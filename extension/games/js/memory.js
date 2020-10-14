/****** SETUP ******/
let progress_levels = [8, 15, 20, 30, 60, 70, 80, 90, 100, 200]
let levels = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 30, 36, 40, 46, 50, 54]
const cardsInit = [
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }
];

/***** STATE VARIABLES *****/
let matches = 0;
let cardArray = [];
var cardsChosen = []
let cardsWon = []
var cardsChosenId = []

/***** ELEMENTS *****/
let grid = document.getElementById("grid");

//Get Data From Background
/***** NOTIFY BACKGROUND *****/
chrome.runtime.sendMessage({ mode: "Game", action: "New", id: "memory" }, function (response) {
  let x, y;
	let level;
	if (response != null)
		level = response.level;
	else level = 0;
  //Set Level and matrix size
  let space = 10;
  let pics = levels[response.level];
  for (let index = 1; index < 10; index++) {
    if ((pics * 2) % index == 0) {
      if (space > Math.abs(index - (pics * 2) / index)) {
        x = index;
        y = (pics * 2) / index;
        space = Math.abs(x - y);
      }
    }
  }


  let firstCards = [];
  for (let i = 0; i < pics; i++) {
    firstCards.push(cardsInit[Math.floor((Math.random() * cardsInit.length))]);
  }

  //Create Card
  cardArray = firstCards;
  cardArray = cardArray.concat(firstCards);
  cardArray.sort(() => 0.5 - Math.random())

  //Create Grid
  if (x > y) {
    grid.style['width'] = 100 * x + "px";
    grid.style['height'] = 100 * y + "px";
  } else {
    grid.style['width'] = 100 * y + "px";
    grid.style['height'] = 100 * x + "px";
  }

  //Set Timer
  var timer = new Timer(function () {
		if (matches >= Math.floor(levels[level]/2)) {
			level++;
			sendProgress("memory", matches, level);
		} else sendProgress("memory")
  });

  //Start timer
  timer.start(1);
  timer.resume();

  //Create Board
  createBoard();
});

//create your board
function createBoard() {
  console.log("creating");
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

function recreateBoard() {
  grid.innerHTML = "";
  createBoard();
}

//check for matches
function checkForMatch() {

  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
    matches = matches + 1;
    document.getElementById('progress').innerHTML = 'Matches: ' + matches;
    console.log(matches);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
  }
  cardsChosen = []
  cardsChosenId = []
  console.log('cardsWon: ' + cardsWon.length);
  console.log('cardArray: ' + cardArray.length);
  if (cardsWon.length === cardArray.length / 2) {
    console.log('in - 2');
    cardsWon = [];
    recreateBoard();
  }
}

//flip your card
function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}