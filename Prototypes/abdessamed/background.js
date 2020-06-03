chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.test == "hello"){
      chrome.tabs.update({ url: "htts://www.facebook.com" });
      sendResponse({farewell: "goodbye"});
    }
 });