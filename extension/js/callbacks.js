let timer;
let tabs_with_scripts = [];
/*-------------------------------------- Timer -------------------------------------------------*/
var Timer = function (callback) {
    let timerId;
    let remaining = 0;
    let paused = true;

    this.start = (delay) => {
        console.log("Timer Set");
        remaining = delay * 60;
        let minutes = Math.floor(remaining / 60);
        let seconds = remaining - minutes * 60;
        chrome.browserAction.setBadgeText({ text: minutes + ":" + seconds });
        chrome.browserAction.setBadgeBackgroundColor({ color: "#e67e22" });
    }

    this.pause = () => {
        if (!paused) {
            console.log("Timer Paused");
            if (timerId != null) clearInterval(timerId);
            paused = true;
        }
    }

    this.resume = () => {
        if (paused) {
            console.log("Timer Resumed");
            paused = false;
            timerId = setInterval(() => {
                remaining = remaining - 1;
                if (remaining > 0) {
                    let minutes = Math.floor(remaining / 60);
                    let seconds = remaining - minutes * 60;
                    chrome.browserAction.setBadgeText({ text: minutes + ":" + seconds });
                    chrome.browserAction.setBadgeBackgroundColor({ color: "#e67e22" });
                } else {
                    callback();
                }
            }, 1000);
        }
    }
}

/*------------------------------ Inject Content Scripts ----------------------------------------*/
//When a tab is updated or created
function onTabUpdated(tabId, changeInfo, tab) {
    if (changeInfo.status == "loading")
        if (tab.url.startsWith("https://www.youtube.com/watch?v=")) {

            if (!tabs_with_scripts.includes(tabId)) {
                //Inject content script
                chrome.tabs.executeScript(tabId, { file: "js/content.js"}, () => {
                    console.log("YW Tab: Injecting");
                });

                //Add tab id to the list of tabs with scripts
                tabs_with_scripts.push(tabId);
            } else {
                chrome.tabs.sendMessage(tabId, { action: "Reload" }, (response) => {
                    console.log(response.msg);
                });
            }

            //Start Timer (Sometimes background.js can't catch the event of the video starting)
            timer.resume();
        } else {
            console.log("NYW: Nothing");
            if (tabs_with_scripts.includes(tabId)) {
                console.log("NYW: Tab Id is in the array -> Remove id");
                tabs_with_scripts.pop(tabId);
                timer.pause();
            }
        }
}

//Remove tabId from tabs_with_scripts when tab is removed
function onTabRemoved(tabId, removeInfo) {
    if (tabs_with_scripts.includes(tabId)) {
        console.log("Tab Id was in the array now it's removed -> Remove id");
        tabs_with_scripts.pop(tabId);

        //Pause Timer
        timer.pause();
    }

}

/*---------------------------------- Timer Management ------------------------------------------*/
//Setup Timer
function timerCallback() {
    //Callback after timer finishes
    //Get the Id of the activated tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        //send a message to the content script to pause the video (that enables us to get the url/time of the video)
        chrome.tabs.sendMessage(tabs[0].id, { action: "Pause" }, function (response) {

            //update the Timer
            console.log("Update Timer");
            timer.start(watch_time);

            //For Testing
            //alert(data.url.split("&")[0] + "&t=" + data.time);
            injectGame(tabs[0].id, response);
        });
    });
}

//Getting Requests from content scripts
function contentScriptsRequests(request, sender, sendResponse) {
    switch (request.state) {
        case "Paused":
            console.log("Paused State Arrived");
            timer.pause();//When Video Paused (or some type of error)
            break;
        case "Resumed":
            console.log("Resumed State Arrived");
            timer.resume();//When Video started or resumed after it being paused
            break;
    }

    sendResponse("Alright");

}

//Getting state of the new activated tab
function onTabActivated(activeInfo) {
    if (tabs_with_scripts.includes(activeInfo.tabId)) {
        console.log("The Tab You switched to is YW");
        chrome.tabs.sendMessage(activeInfo.tabId, { action: "State" }, (response) => {
            if (response.paused == true) {
                console.log("State of current tab : Paused");
                timer.pause();
            } else {
                console.log("State of current tab : Resumed");
                timer.resume();
            }
        });
    } else {
        console.log("The Tab You switched to is NYW");
        timer.pause();
    }
}

/*---------------------------------- Injecting Games -------------------------------------------*/
injectGame = (tabId, data) => {

    //Remove the tab we're in (to avoid going back to youtube and creating a new tab)
    chrome.tabs.remove(tabId);

    //Create New Tab
    chrome.tabs.create({ url: chrome.runtime.getURL("../games/game_test/index.html") }, (tab) => {

        //Don't Know why this works
        chrome.tabs.executeScript({ file: "js/game_manager.js" }, () => {
            console.log("Content Script Injected");

            //Send Youtube/Game Data to Game Tab (TODO: Change the structure of Game Data)
            chrome.tabs.sendMessage(tab.id, { action: "Next", url: data.url.split("&")[0], time: data.time, level: 1 }, (response) => {
                console.log(response.msg);
            });

            //Send an Action call to the tab to go back
            window.setTimeout(() => {
                chrome.tabs.sendMessage(tab.id, { action: "Back" }, (response) => {

                    //TODO: the response will have the current game level to save it

                    //Remove the current tab (with the game to avoid reusing it)
                    chrome.tabs.remove(tab.id);

                    //Go back to youtube (where we were at)
                    chrome.tabs.create({ url: response.url });
                });
            }, game_time * 60 * 1000);
        });
    });
}

//Receive Data/Actions From Game
function gamesRequests(request, sender, sendResponse) {
    switch (request.action) {
        case "New":
            //Start Getting New Game
            break;
    }

    sendResponse("Alright");
}

/*---------------------------------- Start Listening -------------------------------------------*/
function startProcess() {
    /*----------------------------- Inject Content Scripts ----------------------------------------*/
    chrome.tabs.onUpdated.addListener(onTabUpdated);
    chrome.tabs.onRemoved.addListener(onTabRemoved);

    /*---------------------------------- Timer Management -----------------------------------------*/
    timer = new Timer(timerCallback);
    //Start Timer (First run)
    timer.start(watch_time);

    chrome.runtime.onMessage.addListener(contentScriptsRequests);
    chrome.tabs.onActivated.addListener(onTabActivated);

    /*---------------------------------- Injecting Games ------------------------------------------*/
    chrome.runtime.onMessage.addListener(gamesRequests);
}