/*---------------------------------- Declarations -------------------------------------------*/
//Declarations (Temporary)
let watch_time = 0.5;
let game_time = 0.3;

/*--------------------------------- Extension State -----------------------------------------*/
//Check if Extension is Enabled or Disabled
let enabled = true;
chrome.storage.sync.get(["enabled"], (items) => {
  enabled = items[0];
});
//Listen if Extension State Changed
chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (var key in changes) {
    var storageChange = changes[key];
    switch (key) {
      case "enabled":
        enabled = storageChange.newValue;
        console.log(enabled);
        if (enabled) {
          startProcess();
        } else {
          //Stop and Unset Time Object
          if (timer != null) {
            timer.pause();
            timer = null;
          }
          //Remove All Listeners
          chrome.runtime.onMessage.removeListener(gamesRequests);
          chrome.tabs.onActivated.removeListener(onTabActivated);
          chrome.runtime.onMessage.removeListener(contentScriptsRequests);
          chrome.tabs.onRemoved.removeListener(onTabRemoved);
          chrome.tabs.onUpdated.removeListener(onTabUpdated);

          //Change Badge
          chrome.browserAction.setBadgeText({ text: "Off" });
          chrome.browserAction.setBadgeBackgroundColor({ color: "#bdc3c7" });
        }
        break;
    }
  }
});

/*--------------------------------- Start Listening -------------------------------------------*/
if (enabled) {
  startProcess();
} else {
  chrome.browserAction.setBadgeText({ text: "Off" });
  chrome.browserAction.setBadgeBackgroundColor({ color: "#bdc3c7" });
}

