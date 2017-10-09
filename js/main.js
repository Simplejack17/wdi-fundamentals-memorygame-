var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {

    setTimeout(function() {
      alert("You found a match!");
    }, 600);
  }
    else{
      setTimeout(function() {
        alert("Sorry, try again.");
      }, 600);
  }
};
var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  if (cardsInPlay.length === 2) {
    checkForMatch();
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
  }
};

var createBoard = function() {
  var gameBoard = document.getElementById('game-board');

  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('class', 'card');
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute('data-id', i)
    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement)
  }
}

var resetBoard = function() {
  console.log("Reset Board");
  cardsInPlay = [];

  document.getElementById('game-board').innerHTML = '';

  createBoard();
}

createBoard();
var button = document.getElementById('resetButton');
button.addEventListener("click", function() {
  resetBoard();
})
// flipCard (0);
// flipCard (2);
