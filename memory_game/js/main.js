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
var numCards = cards.length;
var cardIndices = Array.from(Array(numCards).keys());

function shuffleCards() {
	var shuffled = cardIndices.sort(function () {
		return Math.random() - Math.random();
	});
	return shuffled;
}

function createBoard() {
	let deck = shuffleCards();
	for (i of deck) {
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
			result.style.color = "#F15B31";
		} else {
			result.innerHTML = "Sorry, try again.";
			result.style.color = "#F15B31";
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
	var cardElements = document.getElementsByTagName("img");
	for (var i = 0; i < cards.length; i++) {
		cardElements[i].setAttribute("src", "images/back.png");
	}
	var result = document.getElementById("result");
	result.innerHTML = "Choose two cards";
	result.removeAttribute("style");
	cardsInPlay = [];
}

function shuffleBoard() {
	let deck = shuffleCards();
	let cardElements = document.getElementsByTagName("img");
	for (i of cardIndices) {
		cardElements[i].setAttribute("data-id", deck[i]);
	}
	resetBoard();
}

function main() {
	createBoard();
	var resetButton = document.getElementsByTagName("button")[0];
	resetButton.addEventListener("click", resetBoard);

	var shuffleButton = document.getElementsByTagName("button")[1];
	shuffleButton.addEventListener("click", shuffleBoard);	
}

main();
