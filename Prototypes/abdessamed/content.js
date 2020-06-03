let interval = setInterval(function(){
	alert("Hello");
	clearInterval(interval);
	chrome.runtime.sendMessage({test: "hello"}, function(response) {
		console.log(response.farewell);
	});
}, 3000);
