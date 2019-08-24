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

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		var result = document.getElementById("result");
		if (cardsInPlay[0] === cardsInPlay[1]) {
			result.innerHTML = "You found a match!";
		} else {
			result.innerHTML = "Sorry, try again.";
		}
	}
}

function flipCard() {
	var cardID = this.getAttribute("data-id");

	this.setAttribute("src", cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);

	checkForMatch();
}

function resetBoard() {
	var cardsList = document.getElementsByTagName("img");
	for (var i = 0; i < cards.length; i++) {
		cardsList[i].setAttribute("src", "images/back.png");
	}
	var result = document.getElementById("result");
	result.innerHTML = "Choose two cards";
	cardsInPlay = [];
}

createBoard();
var resetButton = document.getElementsByTagName("button")[0];
resetButton.addEventListener("click", resetBoard);
