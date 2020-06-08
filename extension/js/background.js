//Declarations
let watch_time = 0.2; //TODO: Get the Time from the popup.js
let game_time = 5; //TODO: Get the time from the popuhp.js
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
  }

  this.pause = () => {
    if (!paused) {
      if (timerId != null) clearInterval(timerId);
      paused = true;
    }
  }

  this.resume = () => {
    if (paused) {
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
}


/*------------------------------ Inject Content Scripts ----------------------------------------*/
let tabs_with_scripts = [];

//When a tab is updated or created
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete")
    if (tab.url.startsWith("https://www.youtube.com/watch?v="))
      //Inject content script
      chrome.tabs.executeScript(tabId, { file: "js/content.js" }, () => {
        console.log("Injecting");
        if (!tabs_with_scripts.includes(tabId)) tabs_with_scripts.push(tabId);
      });
    else if (tabs_with_scripts.includes(tabId)) tabs_with_scripts.pop(tabId);

    console.log(tabs_with_scripts);
});

//Remove tabId from tabs_with_scripts when tab is removed
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  if (tabs_with_scripts.includes(tabId)) tabs_with_scripts.pop(tabId);
  //Pause Timer
  timer.pause();
});
/*---------------------------------- Timer Management ------------------------------------------*/
//Setup Timer
var timer = new Timer(function () {
  //Callback after timer finishes
  //Get the Id of the activated tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //send a message to the content script to pause the video (that enables us to get the url/time of the video)
    chrome.tabs.sendMessage(tabs[0].id, { action: "Pause" }, function (response) {

      //update the Timer
      timer.start(watch_time);

      /*Remove the tab we're in (to avoid going back to youtube and creating a new tab)
      chrome.tabs.remove(tabs[0].id);
      chrome.tabs.create({url: chrome.extension.getURL("game/tab.html?next=" + response.url.split("&")[0] + "&t=" + response.time)});*/
      alert(response.url.split("&")[0] + "&t=" + response.time);
    });
  });
});

//Start Timer (First run)
timer.start(watch_time);

//Getting Requests from content scripts
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  switch (request.state) {
    case "Paused":
      timer.pause();//When Video Paused (or some type of error)
      break;
    case "Resumed":
      timer.resume();//When Video started or resumed after it being paused
      break;
  }

  sendResponse("Alright");
});

//Getting state of the new activated tab
chrome.tabs.onActivated.addListener((activeInfo) => {
  if (tabs_with_scripts.includes(activeInfo.tabId))
    chrome.tabs.sendMessage(activeInfo.tabId, { action: "State" }, function (response) {
      if (response.paused == true) {
        timer.pause();
      } else {
        timer.resume();
      }
    });
  else timer.pause();
});
/*---------------------------------- Injecting Games -------------------------------------------*/
/* ---> Firebase Setup
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