//get the video object and the video url in the beginning (when the content script first injected)
let video = document.getElementsByTagName("video")[0];
let video_url = window.location.toString();

if (video != null) { 
	//pause event listener
	video.onpause = function () {
		//send message to background to pause the timer
		chrome.runtime.sendMessage({state: "Paused"},function(response){
			console.log("Paused Timer");
		});
	};

	video.onplaying = function () {
		//send message to background to resume the timer
		chrome.runtime.sendMessage({state: "Resumed"},function(response){
			console.log("Resumed Timer");
		});
	};
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	  if (request.action == "Pause"){
		  //when getting a request from the background process to pause the video we pause it and set the latest data as a response
		  video.pause();
		  sendResponse({url: video_url, time: Math.round(video.currentTime)});
	  }else if (request.action == "Reload"){
		  //when the tab is updated we have to update the video object and the url with the new ones (to go back to our recent video)
		  video = document.getElementsByTagName("video")[0];
		  video_url = window.location.toString();
		  sendResponse({msg: "Done"});
	  }
   });
