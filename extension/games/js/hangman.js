/****** SETUP ******/
const words = [
  ['bag', 'ace', 'art', 'bat', 'boy', 'buy', 'cop', 'hat', 'zoo'],
  ['bear', 'cool', 'dark', 'feel', 'film', 'frog', 'goal', 'wolf', 'zoom'],
  ['actor', 'begin', 'birth', 'enjoy', 'floor', 'leave', 'remix', 'saint', 'short'],
  ['action', 'detail', 'dragon', 'father', 'mother', 'muscle', 'zombie', 'skills', 'review']
];
const insights = {
  bag: "something used carry things.",
  ace: "something very cold.",
  art: "something creative.",
  bat: "something to hit the ball with.",
  boy: "another expression for young man.",
  buy: "something that we do in supermarkets.",
  cop: "someone you find in the roads.",
  hat: "something you put in your head.",
  zoo: "a place where you find animals.",
  bear: "a big animal with fur.",
  cool: "something not hot and not cold.",
  dark: "when there's no ligh.",
  feel: "being aware of a person or object touching/being touched.",
  film: "something you watch.",
  frog: "an animal that eats flies.",
  goal: "something you want to acheive.",
  wolf: "an animal form the same family of dogs.",
  zoom: "when you use a camera an there's a far object you want to take a picture of.",
  actor: "someone who play in movies.",
  begin: "the start of a thing.",
  birth: "the oppsite of death.",
  enjoy: "having pleasure doing something.",
  floor: "somewhere we sit.",
  leave: "the act of going far away.",
  remix: "a song that has been changed.",
  saint: "someone acknowleged as holy.",
  short: "the opposite of tall.",
  action: "the process of doing something.",
  detail: "an individual fact or item.",
  dragon: "a big creature that spits fire.",
  father: "someone close to you.",
  mother: "someone close to you.",
  muscle: "what make you able to lift things.",
  zombie: "a walking dead person.",
  skills: "the ability to do something.",
  review: "when you check something."
}


/***** STATE VARIABLES *****/
let right_guesses = 0;

let level = 0;
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
  document.getElementById('insights').innerHTML = "Guess a word for " + insights[answer];
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