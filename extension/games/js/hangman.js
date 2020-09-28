/***** STATE VARIABLES *****/
let progress
let progress_levels = [8, 15, 20, 30, 60, 70, 80, 90, 100, 200]
var words = [['aa', 'bb'],
['aaa', 'bbb', 'ccc'],
['aaaa', 'vbbb', 'dddd'],
['aaaaa', 'aaaaa', 'ddddd']
]
let level;
let right_guesses = 0;

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

//Get Data From Background
/***** NOTIFY BACKGROUND *****/
chrome.runtime.sendMessage({ mode: "Game", action: "New", id: "hangman" }, function (response) {
  level = response.level;
  progress = response.progress;

  var timer = new Timer(function () {
    let i = 0;
    while (right_guesses > progress_levels[i])
      i++;
    if (right_guesses < progress)
      right_guesses = progress;
    sendProgress("hangman", right_guesses, i);
  });
  timer.start(0.2);
  timer.resume();

  randomWord();
  generateButtons();
  guessedWord();
});

function randomWord() {
  answer = words[level - 2][Math.floor(Math.random() * words[level - 2].length)];
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
    right_guesses++;
    console.log(right_guesses);
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
