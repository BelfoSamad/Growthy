/*------------------------ Getting States From the Youtube Video Player ------------------------*/
//Getting video url and video object
console.log("In");
let video_obj = document.getElementsByTagName("video")[0];
console.log(video_obj);
let video_url = window.location.toString();
console.log(video_url);

//Getting video state
if (video_obj != null) {
    console.log("Listening");

    //Alert when the video is paused
    video_obj.onpause = function () {
        //send message to background to pause the timer
        chrome.runtime.sendMessage({ mode:"Tabs", state: "Paused" }, function (response) {
            console.log("Paused Timer");
        });
    };

    //Alert that the loading of media data is prevented from continuing
    video_obj.onsuspend = function() {
        //send message to background to pause the timer
        chrome.runtime.sendMessage({ mode:"Tabs", state: "Paused" }, function (response) {
            console.log("Paused Timer");
        });
    };

    //Alert that the video needs to buffer the next frame before it can start playing
    video_obj.onwaiting = function() {
        //send message to background to pause the timer
        chrome.runtime.sendMessage({ mode:"Tabs", state: "Paused" }, function (response) {
            console.log("Paused Timer");
        });
    };

    //If the browser is not able to fetch media data, alert that media data is not available
    video_obj.onstalled = function() {
        //send message to background to pause the timer
        chrome.runtime.sendMessage({ mode:"Tabs", state: "Paused" }, function (response) {
            console.log("Paused Timer");
        });
    };

    //Alert that an error occured while loading the video
    video_obj.onerror = function() {
        //send message to background to pause the timer
        chrome.runtime.sendMessage({ mode:"Tabs", state: "Paused" }, function (response) {
            console.log("Paused Timer");
        });
    };

    //Alert that the video is playing
    video_obj.onplaying = function () {
        //send message to background to resume the timer
        chrome.runtime.sendMessage({ mode:"Tabs", state: "Resumed" }, function (response) {
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
            case "Pause":
                //Pause the Video and send the data to background.js
                video_obj.pause();
                sendResponse({ url: video_url, time: Math.round(video_obj.currentTime) });
                break;
            case "Reload":
                console.log("Relaoded");
                //refresh the data (when injecting this content script to new tabs)
                video_obj = document.getElementsByTagName("video")[0];
                video_url = window.location.toString();
                sendResponse({ msg: "Done" });
                break;
            case "State":
                sendResponse({paused: video_obj.paused});
                break;
        }
    }
);
