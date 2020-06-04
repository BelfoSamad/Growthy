alert("In");

let video = document.getElementsByTagName("video")[0];
let video_url = document.getElementsByTagName("ytd-watch-flexy")[0].videoId;

if (video != null) {
	video.onpause = function () {
		chrome.runtime.sendMessage({state: "Paused", src: video_url, time: video.currentTime},function(response){
			console.log("Paused Timer");
		});
	};

	video.onplaying = function () {
		chrome.runtime.sendMessage({state: "Resumed", src: video_url, time: video.currentTime},function(response){
			console.log("Resumed Timer");
		});
	};
}
