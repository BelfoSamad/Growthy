/****** SETUP ******/
//Use this array to get what level should the child play in next
let progress_levels = [8, 15, 20, 30, 60, 70, 80, 90, 100, 200]
let levels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

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
chrome.runtime.sendMessage({ mode: "Game", action: "New", id: "subtraction" }, function (response) {
	//Setup
	max = levels[response.level]
	let progress = response.progress

	//Init Timer
	var timer = new Timer(function () {
		let i = 0;
		while (count > progress_levels[i])
			i++;
		if (count < progress)
			count = progress;
		sendProgress("subtraction", count, i);
	});

	//Start the Timer
	timer.start(0.2);
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

	if (num1 > num2) {
		p.innerHTML = num1;
		op.innerHTML = "-";
		q.innerHTML = num2;
	} else {
		p.innerHTML = num2;
		op.innerHTML = "-";
		q.innerHTML = num1;
	}
};

/*
* This is called in the onsubmit event
*/
var getAnswer = function () {

	var correct;
	if (num1 > num2) {
		correct = num1 - num2;
	} else {
		correct = num2 - num1;
	}
	// Getting the users attempt
	let answer = parseInt(inputField.value);

	if (answer === correct) {
		response.innerHTML = "";
		count++;
		refreshNums();
	} else {
		response.innerHTML = "Try Again";
	}
	// clear the input field for the next round
	inputField.value = "";
};
