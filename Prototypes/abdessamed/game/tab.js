//get the data sent by url (has video url and the time where we paused)
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const next = urlParams.get('next');
const t = urlParams.get('t');

//example: sending a message to background process
chrome.runtime.sendMessage({game: "Am in Boii"},function(response){
    console.log("Message Sent");
});

//to go back ot video
document.getElementById("back").href = next + "&t=" + t;

//Still has to change the behavior of the back button to avoid the child dismissing the game
