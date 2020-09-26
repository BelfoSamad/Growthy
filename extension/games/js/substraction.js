/***** ELEMENTS *****/
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var inputField = document.getElementById("in");
var form = document.querySelector("form");
var p = document.getElementById("p");
var q = document.getElementById("q");
var op = document.getElementById("op");
var response = document.getElementById("response"); // used for Try Again text
var results = document.getElementById("results");
var category = document.getElementById("category");

/***** STATE VARIABLES *****/
let level = 1;
let levels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
var max = levels[level - 1];
var num1;
var num2;
var answer;

var startTime;
var endTime;

var count; // number of correct answers
var times = [];

/***** INITIALIZING *****/
inputField.className = "hide";
stopButton.className = "hide";

/***** EVENTS *****/
startButton.onclick = function() {
	// initializing the count
	count = 0;
	times = [];
	results.innerHTML = ""; // clear results
	category.innerHTML = ""; // clear category
	refreshNums();
	inputField.className = ""; // show the input field
	stopButton.className = ""; // show the stop button
	startButton.className = "hide"; // hide the start button
	inputField.focus();
};

form.onsubmit = function(e) {
	// need to prevent the default form submission wich reloads the page
	e.preventDefault();
	getAnswer();
};

stopButton.onclick = function() {
	inputField.className = "hide"; // hide the input field
	stopButton.className = "hide"; // hide the stop button
	startButton.className = ""; // show the start button

	// clear numbers and present results
	p.innerHTML = "";
	q.innerHTML = "";
	op.innerHTML = "";
	response.innerHTML = ""; // clear response in case it was set
};

/***** FUNCTIONS ******/
var refreshNums = function() {
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
var getAnswer = function() {

	var correct;
	if (num1 > num2) {
		correct = num1 - num2;
	} else {
		correct = num2 - num1;
	}
	// Getting the users attempt
	answer = parseInt(inputField.value);

	if (answer === correct) {
		response.innerHTML = "";
		count++;
		console.log(count);
		refreshNums();
	} else {
		response.innerHTML = "Try Again";
	}
	// clear the input field for the next round
	inputField.value = "";
};
