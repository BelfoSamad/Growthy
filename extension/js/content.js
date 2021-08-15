/*------------------------ Init ------------------------*/
//Getting video url and video object
let vid = document.getElementsByTagName("video")[0];
;
let video_url = window.location.toString();

//Remove Recommendations
function removeSelectors(selectors) {
    const cssSheet = document.styleSheets.length > 0 && document.styleSheets[0];
    const displayNoneRule = " { display: none !important; }";
    const compoundSelector = selectors.join(", ");
    cssSheet && cssSheet.insertRule(compoundSelector + displayNoneRule);
}

removeSelectors([
    "#upnext",
    "#continuations",
    "ytd-compact-autoplay-renderer"])


/*------------------------ Listening ------------------------*/
console.log("Listening");

//Alert when the video is paused
vid.onpause = function () {
    //send message to background to pause the timer
    chrome.runtime.sendMessage({mode: "Tabs", state: "Paused"}, function (response) {
        console.log("Paused Timer");
    });
};

//Alert that the loading of media data is prevented from continuing
vid.onsuspend = function () {
    //send message to background to pause the timer
    chrome.runtime.sendMessage({mode: "Tabs", state: "Paused"}, function (response) {
        console.log("Paused Timer");
    });
};

//Alert that the video needs to buffer the next frame before it can start playing
vid.onwaiting = function () {
    //send message to background to pause the timer
    chrome.runtime.sendMessage({mode: "Tabs", state: "Paused"}, function (response) {
        console.log("Paused Timer");
    });
};

//If the browser is not able to fetch media data, alert that media data is not available
vid.onstalled = function () {
    //send message to background to pause the timer
    chrome.runtime.sendMessage({mode: "Tabs", state: "Paused"}, function (response) {
        console.log("Paused Timer");
    });
};

//Alert that an error occured while loading the video
vid.onerror = function () {
    //send message to background to pause the timer
    chrome.runtime.sendMessage({mode: "Tabs", state: "Paused"}, function (response) {
        console.log("Paused Timer");
    });
};

//Alert that the video is playing
vid.onplaying = function () {
    //send message to background to resume the timer
    chrome.runtime.sendMessage({mode: "Tabs", state: "Resumed"}, function (response) {
        console.log("Resumed Timer");
    });
};

/*----------------------------------- Actions From background.js -------------------------------*/
//Listening to background.js requests
//TODO: Update this process after finishing tab management
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('message received');
        switch (request.action) {
            case "Pause":
                //Pause the Video and send the data to background.js
                vid.pause();
                sendResponse({url: video_url, time: Math.round(vid.currentTime)});
                break;
            case "Reload":
                console.log("Relaoded");
                //refresh the data (when injecting this content script to new tabs)
                vid = document.getElementsByTagName("video")[0];
                video_url = window.location.toString();
                sendResponse({msg: "Done"});
                break;
            case "State":
                console.log('state request');
                sendResponse({paused: vid.paused});
                break;
        }
    }
);