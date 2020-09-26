let level = 18;
let x, y;
let space = 10;
for (let index = 1; index < 10; index++) {
  if ((level * 2) % index == 0) {
    if (space > Math.abs(index - (level * 2) / index)) {
      x = index;
      y = (level * 2) / index;
      space = Math.abs(x - y);
    }
  }
}

let matches = 0;
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

document.addEventListener('DOMContentLoaded', () => {
  let firstCards = [];
  for (let i = 0; i < level; i++) {
    firstCards.push(cardsInit[Math.floor((Math.random() * cardsInit.length))]);
  }

  //card options
  let cardArray = firstCards;
  cardArray = cardArray.concat(firstCards);

  console.log(cardArray.length);

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid');
  if (x > y){
    grid.style['width'] = 100 * x + "px";
    grid.style['height'] = 100 * y + "px";
  }else{
    grid.style['width'] = 100 * y + "px";
    grid.style['height'] = 100 * x + "px";
  }
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //create your board
  function createBoard() {
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
      console.log(matches);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    cardsChosen = []
    cardsChosenId = []
    if (cardsWon.length === cardArray.length / 2) {
      console.log("Recreate");
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

  createBoard();
})
