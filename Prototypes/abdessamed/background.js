//Custom Timer to be able to pause/resume it
var Timer = function (callback, delay) {
  var timerId, start, remaining = delay;

  this.pause = function () {
    window.clearTimeout(timerId);
    remaining -= Date.now() - start;
  };

  this.resume = function () {
    start = Date.now();
    window.clearTimeout(timerId);
    if (remaining > 0)
      timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
};

//inject the content script on new youtube video tabs (because youtube works with ajax so the tab actually doesn't change so the content
//script can't be updated)
tabs_with_scripts = [];
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "loading") {
    if (changeInfo.url != null) {
      if (changeInfo.url.startsWith("https://www.youtube.com/watch?v=")) {
        if (!tabs_with_scripts.includes(tabId))
          //if tab doesn't have content script, inject one in it
          chrome.tabs.executeScript(tabId, { file: "content.js" }, () => {
            console.log("We In Bitch");
            tabs_with_scripts.push(tabId);
          });
        else
          //if the tab has already content script on it, try to get the new infos (url and video object)
          chrome.tabs.sendMessage(tabId, { action: "Reload"}, function (response) {
            console.log("content Script Loaded");
          });
      }
    }
  }
});

//start the timer when chrome is launched
var timer = new Timer(function () {
  //when the timer ends, go through tabs and get the activated one (that's just to try we're supposed to get the tabs with youtube)
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //send a message to the content script to pause the video (that enables us to get the url/time of the video)
    chrome.tabs.sendMessage(tabs[0].id, { action: "Pause" }, function (response) {
      console.log("Pause Video");
      //update the content of the tab to our html file (we can include js and css on it so we good)
      chrome.tabs.update(null, { url: chrome.extension.getURL("tab.html?next=" + response.url + "&t=" + response.time) });
    });
  });

}, 10000);
//pause it and wait when a video started (to start counting)
timer.pause();

//-----------------------------------------------------
//get states from the content script
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    //when video is paused pause timer (when the video ends it goes to paused state before going to ended state so we just use paused)
    if (request.state == "Paused") {
      console.log("Pausing Timer");
      timer.pause();
      sendResponse({ msg: "Alright" });
    } else if (request.state == "Resumed") {
      //when video is resumed resume timer (when the video starts it goes to resumed state (playing))
      console.log("Resuming Timer");
      timer.resume();
      sendResponse({ msg: "Alright" });
    }

    //this is a test for the created tab 
    if (request.game == "Am in Boii") {
      console.log("we got message from the tab");
      sendResponse({ msg: "Ok Mr Tab I gotcha ya" });
    }
  });