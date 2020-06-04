var Timer = function(callback, delay) {
  var timerId, start, remaining = delay;
  
  this.pause = function() {
    window.clearTimeout(timerId);
    remaining -= Date.now() - start;
    console.log(Date.now());
  };
  
  this.resume = function() {
    start = Date.now();
    window.clearTimeout(timerId);
    if(remaining > 0)
      timerId = window.setTimeout(callback, remaining);
  };
  
  this.resume();
};

var timer = new Timer(function() {
  //chrome.tabs.update(null, { url: "https://www.facebook.com" });
}, 60000);

//-----------------------------------------------------
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.state == "Paused"){
      console.log("Pausing Timer");
      timer.pause();
    } else if (request.state == "Resumed"){
      console.log("Resuming Timer");
      timer.resume();
    }
    sendResponse({farewell: "goodbye"});
 });