/****** SETUP ******/
const words = [
  ['bag', 'ace', 'art', 'bat', 'boy', 'buy', 'cop', 'hat', 'zoo'],
  ['bear', 'cool', 'dark', 'feel', 'film', 'frog', 'goal', 'wolf', 'zoom'],
  ['actor', 'begin', 'birth', 'enjoy', 'floor', 'leave', 'remix', 'saint', 'short'],
  ['action', 'detail', 'dragon', 'father', 'mother', 'muscle', 'zombie', 'skills', 'review']
]


/***** STATE VARIABLES *****/
let right_guesses = 0;

let level;
let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

//Get Data From Background
/***** NOTIFY BACKGROUND *****/
chrome.runtime.sendMessage({ mode: "Game", action: "New", id: "hangman" }, function (response) {
  //Setup
  if (response != null)
    level = response.level;
  else level = 0;

  //Init Timer
  var timer = new Timer(function () {
    if (right_guesses >= 3) {
      level++;
      sendProgress("hangman", right_guesses, level);
    } else sendProgress("hangman")
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
      >
        ` + letter + `
      </button>
    `).join('');
  document.getElementById('keyboard').innerHTML = buttonsHTML;
  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < letters.length; i++) {
    document.getElementById(letters[i]).addEventListener('click', () => {
      handleGuess(letters[i]);
    });
  }
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

    document.getElementById('insights').innerHTML = "You Lost, The answer was: " + answer;

    setTimeout(() => {
      document.getElementById('insights').innerHTML = "";

      mistakes = 0;
      guessed = [];
      document.getElementById('hangmanPic').src = './images/0.jpg';

      randomWord();
      guessedWord();
      generateButtons();
    }, 3000)
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