let ytb_regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
//Declarations
let watch_time;
let child_id;
let child_name;
let parent_id;
let history;
let url;
let tabs_with_scripts = [];

//Init
let updated = (tabId, changeInfo, tab) => {
    if (changeInfo.status == "loading")
        if (tab.url.match(ytb_regex)) {
            //Inject content script
            chrome.tabs.executeScript(tabId, { file: "js/content.js", runAt: "document_end" }, () => {
                console.log("YW Tab: Injecting");
                if (!tabs_with_scripts.includes(tabId)) {
                    console.log("Adding Tab Id");
                    tabs_with_scripts.push(tabId);
                }
                //Resume Timer
                timer.resume();
            });
        } else {
            console.log("NYW: Nothing");
            if (tabs_with_scripts.includes(tabId)) {
                console.log("NYW: Tab Id is in the array -> Remove id");
                tabs_with_scripts.pop(tabId);
                timer.pause();
            }
        }
};

let removed = (tabId, removeInfo) => {
    if (tabs_with_scripts.includes(tabId)) {
        console.log("Tab Id was in the array now it's removed -> Remove id");
        tabs_with_scripts.pop(tabId);

        //Pause Timer
        timer.pause();
    }
};

let activated = (activeInfo) => {
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
};

/*-------------------------------------- Listen -------------------------------------------------*/
//Receive Updates from Popup, Tabs and Game
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.mode) {
        case "Popup":
            if (request.action == 'Reset') reset();
            else start(request.child);
            break;
        case "Tabs":
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
            break;
        case "Game":
            switch (request.action) {
                case "New":
                    sendResponse(history);
                    break;
                case "Save":
                    if (request.level != null) {
                        saveHistory(parent_id, child_id, request.level, request.progress);
                    }
                    //Go back to youtube (where we were at)
                    chrome.tabs.create({ url: url });

                    //Remove tab
                    chrome.tabs.remove(sender.tab.id);
                    break;
            }
            break;
    }
    return true;
});

//Get Saved Data
chrome.storage.local.get(['watch_time', 'parent_id', 'child_id', 'child_name', 'history'], (result) => {
    console.log(result);
    if (result != null && result.watch_time != null && result.parent_id != null
        && result.child_id != null && result.child_name != null) {
        start(result);
    }
});

/*-------------------------------------- Timer -------------------------------------------------*/
var Timer = function (callback) {
    let timerId;
    let remaining = 0;
    let paused = true;
    let started = false;

    this.start = (delay) => {
        console.log("Timer Set");
        started = true;
        remaining = delay * 60;
        let minutes = Math.floor(remaining / 60);
        let seconds = remaining - minutes * 60;
        chrome.browserAction.setBadgeText({ text: minutes + ":" + seconds });
    }

    this.pause = () => {
        if (!paused) {
            console.log("Timer Paused");
            if (timerId != null) clearInterval(timerId);
            paused = true;
        }
    }

    this.resume = () => {
        if (paused && started) {
            console.log("Timer Resumed");
            paused = false;
            timerId = setInterval(() => {
                remaining = remaining - 1;
                if (remaining > 0) {
                    let minutes = Math.floor(remaining / 60);
                    let seconds = remaining - minutes * 60;
                    chrome.browserAction.setBadgeText({ text: minutes + ":" + seconds });
                } else {
                    callback();
                }
            }, 1000);
        }
    }

    this.reset = () => {
        if (timerId != null) clearInterval(timerId);
        paused = true;
        started = false;
        chrome.browserAction.setBadgeText({
            'text': ''
        });
    }
}
//Setup Timer
var timer = new Timer(function () {
    //Callback after timer finishes
    //Get the Id of the activated tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        //send a message to the content script to pause the video (that enables us to get the url/time of the video)
        chrome.tabs.sendMessage(tabs[0].id, { action: "Pause" }, function (response) {

            //update the Timer
            console.log("Update Timer");
            timer.start(watch_time);
            timer.pause();

            //Save URL
            url = response.url.split("&t=")[0] + "&t=" + response.time;
            console.log("Saving URL: " + url);

            //Create New Tab
            console.log(history);
            if (history == null)
                chrome.tabs.create({ url: chrome.runtime.getURL("../games/addition.html") }, (tab) => {
                    console.log("Starting new Game TAB");
                });
            else if (history.level <= 13)
                chrome.tabs.create({ url: chrome.runtime.getURL("../games/addition.html") }, (tab) => {
                    console.log("Starting new Game TAB");
                });
            else if (history.level > 13 && history.level <= 26)
                chrome.tabs.create({ url: chrome.runtime.getURL("../games/subtraction.html") }, (tab) => {
                    console.log("Starting new Game TAB");
                });
            else if (history.level > 26 && history.level <= 36)
                chrome.tabs.create({ url: chrome.runtime.getURL("../games/multiplication.html") }, (tab) => {
                    console.log("Starting new Game TAB");
                });

            //Remove this tab
            chrome.tabs.remove(tabs[0].id);
        });
    });
});

/*-------------------------------------- Start/Reset -------------------------------------------------*/
function start(data) {
    //Get Last History
    let last_history
    if (data.history == undefined || data.history == null)
        last_history = null;
    else last_history = data.history[Object.keys(data.history)[Object.keys(data.history).length - 1]];
    
    //Storage
    chrome.storage.local.set({
        watch_time: data.watch_time,
        parent_id: data.parent_id,
        child_id: data.key,
        child_name: data.child_name,
        history: last_history
    }, () => {
        console.log('Data saved');
    });

    //Init
    watch_time = 1;
    parent_id = data.parent_id;
    child_id = data.key;
    child_name = data.child_name;
    history = last_history;

    //Listeners
    chrome.tabs.onUpdated.addListener(updated);
    chrome.tabs.onRemoved.addListener(removed);
    chrome.tabs.onActivated.addListener(activated);

    //Start Timer (First run)
    timer.start(watch_time);
    timer.pause();
}

function reset() {
    //Storage
    chrome.storage.local.set({
        watch_time: null,
        parent_id: null,
        child_id: null,
        child_name: null,
        history: null
    }, () => {
        console.log('Data saved');
    });

    //Init
    watch_time = null;
    parent_id = null;
    child_id = null;
    child_name = null;
    history = null;

    //Listeners
    chrome.tabs.onUpdated.removeListener(updated);
    chrome.tabs.onRemoved.removeListener(removed);
    chrome.tabs.onActivated.removeListener(activated);

    //Reset Timer
    timer.reset();
}
