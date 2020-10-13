/****** SETUP ******/
//Use this array to get what level should the child play in next
let progress_levels = [8, 15, 20, 30, 60, 70, 80, 90, 100, 200]
let levels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 500, 1000, 10000]

/***** ELEMENTS *****/
var inputField = document.getElementById("in");
var form = document.querySelector("form");
var p = document.getElementById("p");
var q = document.getElementById("q");
var op = document.getElementById("op");
var response = document.getElementById("response"); // used for Try Again text

/***** STATE VARIABLES *****/
var max;
var num1;
var num2;
var count = 0;

//Get Data From Background
/***** NOTIFY BACKGROUND *****/
chrome.runtime.sendMessage({ mode: "Game", action: "New", id: "addition" }, function (response) {
	//Setup
	max = levels[response.level]
	let progress = response.progress;

	//Init Timer
	var timer = new Timer(function () {
		let i = 0;
		while (count > progress_levels[i])
			i++;
		if (count < progress)
			count = progress;
		sendProgress("addition", count, i);
	});

	//Start the Timer
	timer.start(2);
	timer.resume();

	//focus input
	inputField.focus();

	//start Game
	refreshNums();
});

/***** EVENTS *****/
form.onsubmit = function (e) {
	// need to prevent the default form submission wich reloads the page
	e.preventDefault();
	getAnswer();
};

/***** FUNCTIONS ******/
var refreshNums = function () {
	// Getting some random numbers
	num1 = Math.floor((Math.random() * max) + 1);
	num2 = Math.floor((Math.random() * max) + 1);
	// Printing numbers to user
	p.innerHTML = num1;
	op.innerHTML = "+";
	q.innerHTML = num2;
};

var getAnswer = function () {
	var correct = num1 + num2;
	// Getting the users attempt
	let answer = parseInt(inputField.value);

	if (answer === correct) {
		response.innerHTML = "";
		count++;
		document.getElementById('progress').innerHTML = 'Right Answers: ' + count;
		refreshNums();
	} else {
		response.innerHTML = "Try Again";
	}
	// clear the input field for the next round
	inputField.value = "";
};