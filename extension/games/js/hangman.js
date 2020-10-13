/****** SETUP ******/
const words = [
  ['aa', 'bb'],
  ['aaa', 'bbb', 'ccc'],
  ['aaaa', 'vbbb', 'dddd'],
  ['abcde', 'figkl', 'xyzwl']
]
//Use this array to get what level should the child play in next
let progress_levels = [8, 15, 20, 30, 60, 70, 80, 90, 100, 200]


/***** STATE VARIABLES *****/
let level = 3;
let right_guesses = 0;

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

//Get Data From Background
/***** NOTIFY BACKGROUND *****/
chrome.runtime.sendMessage({ mode: "Game", action: "New", id: "hangman" }, function (response) {
  //Setup
  level = response.level;
  let progress = response.progress;

  //Init Timer
  var timer = new Timer(function () {
    let i = 0;
    while (right_guesses > progress_levels[i])
      i++;
    if (right_guesses < progress)
      right_guesses = progress;
    sendProgress("hangman", right_guesses, i);
  });

  //Start the Timer
  timer.start(1);
  timer.resume();

  //start Game
  randomWord();
  generateButtons();
  guessedWord();
});

function randomWord() {
  answer = words[level][Math.floor(Math.random() * words[level].length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    right_guesses++;
    document.getElementById('progress').innerHTML = 'Right Guesses: ' + right_guesses;
    alert("You guessed it right!");

    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.jpg';

    randomWord();
    guessedWord();
    generateButtons();
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    alert("You Lost, The answer was: " + answer);

    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.jpg';

    randomWord();
    guessedWord();
    generateButtons();
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';

  randomWord();
  guessedWord();
  generateButtons();
}