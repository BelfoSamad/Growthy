//Declarations
let watch_time = 5; //TODO: Get the Time from the popup.js
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
    if (tab.url.startsWith("https://www.youtube.com/watch?v=")) {
      //Inject content script
      chrome.tabs.executeScript(tabId, { file: "js/content.js" }, () => {
        console.log("YW Tab: Injecting");
        if (!tabs_with_scripts.includes(tabId)) {
          console.log("Adding Tab Id");
          tabs_with_scripts.push(tabId);
        }
      });
    } else {
      console.log("NYW: Nothing");
      if (tabs_with_scripts.includes(tabId)) {
        console.log("NYW: Tab Id is in the array -> Remove id");
        tabs_with_scripts.pop(tabId);
        timer.pause();
      }
    }
});

//Remove tabId from tabs_with_scripts when tab is removed
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  if (tabs_with_scripts.includes(tabId)) {
    console.log("Tab Id was in the array now it's removed -> Remove id");
    tabs_with_scripts.pop(tabId);

    //Pause Timer
    timer.pause();
  }
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
      console.log("Update Timer");
      timer.start(watch_time);

      injectGame(tabs[0].id, response);
    });
  });
});

//Start Timer (First run)
timer.start(watch_time);

//Getting Requests from content scripts
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

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
});

//Getting state of the new activated tab
chrome.tabs.onActivated.addListener((activeInfo) => {
  if (tabs_with_scripts.includes(activeInfo.tabId)){
    console.log("The Tab You switched to is YW");
    chrome.tabs.sendMessage(activeInfo.tabId, { action: "State" }, function (response) {
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
});
/*---------------------------------- Injecting Games -------------------------------------------*/
injectGame = (tabId, data) => {
  alert(data.url.split("&")[0] + "&t=" + data.time);
  /*Remove the tab we're in (to avoid going back to youtube and creating a new tab)
  chrome.tabs.remove(tabs[0].id);
  chrome.tabs.create({url: chrome.extension.getURL("game/tab.html?next=" + response.url.split("&")[0] + "&t=" + response.time)});*/
}
