/*-------------------------------------- Timer -------------------------------------------------*/
var Timer = function (callback) {
    let timerId;
    let remaining = 0;
    let paused = true;

    this.start = (delay) => {
        console.log("Timer Set");
        remaining = delay * 60;
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
                if (remaining == 0) {
                    callback();
                }
            }, 1000);
        }
    }
}

//Send Data To Background
function sendProgress(game_id, progress, level) {
    chrome.runtime.sendMessage({ mode: "Game", action:"Save", game_id:game_id, progress: progress, level: level }, function (response) {
        console.log("Data Sent");
    });
}