//Declaration
let watch_time = 3;//3 minutes
//Timer
var CustomTimer = function (callback){
  let timerId;

  this.start = (new_remaining) => {
    remaining = new_remaining * 60;
    let minutes = Math.floor(remaining / 60);
    let seconds = remaining - minutes * 60;
    chrome.browserAction.setBadgeText({text: minutes + ":" + seconds});
  }

  this.resume = () => {
    timerId = setInterval(() => {
      remaining = remaining - 1;
      if (remaining > 0) {
        let minutes = Math.floor(remaining / 60);
        let seconds = remaining - minutes * 60;
        chrome.browserAction.setBadgeText({text: minutes + ":" + seconds});
      }else {
        callback();
      }
    }, 1000);
  }

  this.pause = () => {
    clearInterval(timerId);
  }

  this.resume();
}

/* -------------------------------- Firebase Setup ---------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyD8lAoB_uRtirEjew0CnKTH_VNhWA0zhJ0",
  authDomain: "extension-e927c.firebaseapp.com",
  databaseURL: "https://extension-e927c.firebaseio.com",
  projectId: "extension-e927c",
  storageBucket: "extension-e927c.appspot.com",
  messagingSenderId: "1080995667086",
  appId: "1:1080995667086:web:0d42767c0cd92367573ddf",
  measurementId: "G-EQ0X3P6SKC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Storage
var storage = firebase.storage();
var storageRef = storage.ref();

storageRef.child('games/game1/tab.html').getDownloadURL().then(function(url) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
}).catch(function(error) {
  // Handle any errors
});*/
/*------------------------ Injecting Script to Videos Tabs -------------------------------------
  inject the content script on new youtube video tabs (because youtube works with ajax so the tab
  actually doesn't change so the content script can't be updated)*/
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

/*------------------------ Start Timer and getting states form conetnt scripts --------------------*/
var timer = new CustomTimer(function () {
  //when the timer ends, go through tabs and get the activated one (that's just to try we're supposed to get the tabs with youtube)
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //send a message to the content script to pause the video (that enables us to get the url/time of the video)
    chrome.tabs.sendMessage(tabs[0].id, { action: "Pause" }, function (response) {
      console.log("Pause Video");

      //update the Time and pause it (for the next run)
      timer.start(watch_time);
      timer.pause();
      
      //Remove the tab we're in (to avoid goinf back to youtube and creating a new tab)
      chrome.tabs.remove(tabs[0].id);
      chrome.tabs.create({url: chrome.extension.getURL("game/tab.html?next=" + response.url.split("&")[0]
        + "&t=" + response.time)});
    });
  });
});
//Start the Timer First Time
timer.start(watch_time);
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