/*------------------------ Getting States From the Youtube Video Player ------------------------*/
//Getting video url and video object
let video_obj = document.getElementsByTagName("video")[0];
let video_url = window.location.toString();

//Getting video state
if (video != null) {
    //Alert when the video is paused
    video.onpause = function () {
        //send message to background to pause the timer
        chrome.runtime.sendMessage({ state: "Paused" }, function (response) {
            console.log("Paused Timer");
        });
    };

    //Alert that the loading of media data is prevented from continuing
    vid.onsuspend = function() {
        //send message to background to pause the timer
        chrome.runtime.sendMessage({ state: "Paused" }, function (response) {
            console.log("Paused Timer");
        });
    };

    //Alert that the video needs to buffer the next frame before it can start playing
    vid.onwaiting = function() {
        //send message to background to pause the timer
        chrome.runtime.sendMessage({ state: "Paused" }, function (response) {
            console.log("Paused Timer");
        });
    };

    //If the browser is not able to fetch media data, alert that media data is not available
    vid.onstalled = function() {
        //send message to background to pause the timer
        chrome.runtime.sendMessage({ state: "Paused" }, function (response) {
            console.log("Paused Timer");
        });
    };

    //Alert that an error occured while loading the video
    vid.onerror = function() {
        //send message to background to pause the timer
        chrome.runtime.sendMessage({ state: "Paused" }, function (response) {
            console.log("Paused Timer");
        });
    };

    //Alert that the video is playing
    video.onplaying = function () {
        //send message to background to resume the timer
        chrome.runtime.sendMessage({ state: "Resumed" }, function (response) {
            console.log("Resumed Timer");
        });
    };
}

/*----------------------------------- Actions From background.js -------------------------------*/
//Listening to background.js requests
//TODO: Update this process after finishing tab management
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch (request.action) {
            case "Paused":
                //Pause the Video and send the data to background.js
                video.pause();
                sendResponse({ url: video_url, time: Math.round(video.currentTime) });
                break;
            case "Relaod":
                //refresh the data (when injecting this content script to new tabs)
                video = document.getElementsByTagName("video")[0];
                video_url = window.location.toString();
                break;
        }
        sendResponse({ msg: "Done" });
    }
);
