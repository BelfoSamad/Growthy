
//Declarations (Temporary)
let watch_time;
let child_id;
let parent_uid;
let url;
let game_time = 0.2;
let enabled = true;

//Receive Updates from Popup, Tabs and Game
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  switch (request.mode) {
    case "Popup":
      watch_time = request.child.settings.watch_time;
      parent_uid = request.parent_uid;
      child_id = request.child.key;
      //Start Timer (First run)
      timer.start(watch_time);
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
          database.ref('parents/'+parent_uid+'/children_info/'+child_id+'/games/'+request.id).once('value').then(vals => {
            console.log(vals.val());
            sendResponse(vals.val());
          });
          break;
        case "Save":
          saveGameData(parent_uid, child_id, request.game_id, request.level, request.progress);
          chrome.tabs.remove(sender.tab.id);
          //Go back to youtube (where we were at)
          chrome.tabs.create({ url: url });
          break;
      }
      break;
  }
  return true;
});
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
  if (changeInfo.status == "loading")
    if (tab.url.startsWith("https://www.youtube.com/watch?v=")) {
      //Inject content script
      chrome.tabs.executeScript(tabId, { file: "js/content.js" }, () => {
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


      //Save URL
      url = response.url.split("&")[0] + "&t=" + response.time;
      console.log("Saving URL: " + url);
      //Remove this tab
      chrome.tabs.remove(tabs[0].id);

      //Create New Tab
      chrome.tabs.create({ url: chrome.runtime.getURL("../games/home.html") }, (tab) => {
        console.log("Starting new Game TAB");
      });
    });
  });
});

//Getting state of the new activated tab
chrome.tabs.onActivated.addListener((activeInfo) => {
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
});

/*---------------------------------- Injecting Games -------------------------------------------*/
injectGame = (tabId, data) => {

  //Create New Tab
  chrome.tabs.create({ url: chrome.runtime.getURL("/home.html") }, (tab) => {

    //Don't Know why this works
    chrome.tabs.executeScript({ file: "js/game_test.js" }, () => {
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