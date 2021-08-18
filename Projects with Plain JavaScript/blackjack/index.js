let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")

let player = {
  name : "Andrew",
  chips : 145
}

playerEl.textContent = player.name + ":$ " + player.chips

function getRandom() {
  let randomNum = Math.floor(Math.random() * 13 + 1);
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
}

function startGame() {
  // startOrRe = prompt("Do you want to start/restart the game? Please enter y if you would like to")
  // if(startOrRe.toLowerCase()=== "y"){
  isAlive = true   
  hasBlackjack = false;
  let firstCard = getRandom();
  let secondCard = getRandom();
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame();}
// }



function renderGame() {
  if (sum <= 20) {
    message = "do you want to keep drawing?";
  } else if (sum === 21) {
    message = "You have a blackjack";
    hasBlackjack = true;
  } else {
    message = "you are out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  console.log("Drawing a new card from the deck");
  if (isAlive === true && hasBlackjack === false ){
  let card = getRandom();
  sum += card;
  cards.push(card);
  renderGame(); }
}
  
function reSetGame() {
  cards=[]
  sum = 0
  isAlive = false
  sumEl.textContent = "Sum:"
  cardsEl.textContent = "Cards:"
  messageEl.textContent = "Want to play a round?"
}


// let ran1 = Math.floor(Math.random()*(2+11-1)+2)

// Can someone please help me understand this.

// Question number 1: Why do we need to use a for loop to change the display of the cards
// in Blackjack game, while we did not have to use a for loop for the passenger counter
//  app to change the display of the previous entry.
//  I can't figure out the difference, someone please help.

// Question number 2: How does JavaScript know that only to display
// the newest card? Wouldn't for loop always loop from the beginning
// whenever you call it? So why would not the previous cards be repeated?
