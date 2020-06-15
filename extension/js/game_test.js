let url;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("In Again");
    switch (request.action) {
        case "Next":
            url = request.url + "&t=" + request.time;
            sendResponse({ msg: "Got Url" });
            break;
        case "Back":
            sendResponse({ url: url });
            break;
    }
    sendResponse({msg: "Alright"});
});