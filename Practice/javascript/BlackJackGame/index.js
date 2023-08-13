let firstCard, secondCard;
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = true;
let messege = "";
let messegeEl = document.getElementById("messege-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function renderGame() {
  cardsEl.textContent = "cards : ";
  sumEl.textContent = "Sum : ";
  for (let i = 0; i < cards.length; i++) cardsEl.textContent += cards[i] + " ";
  sumEl.textContent += sum;
  if (sum <= 20) {
    messege = "Do you want to draw a new card";
  } else if (sum === 21) {
    messege = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    messege = "You are out of game!";
    isAlive = false;
    sum = 0;
  }
  messegeEl.textContent = messege;
}

function generateNewCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) return 10;
  else if (randomNumber === 1) return 11;
  return randomNumber;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = generateNewCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
  else if(isAlive === false)  messegeEl = "You are out of game. Please start new game.";
  else if(hasBlackJack === true)    messegeEl = "Yup! you have won Blackjack. Enjoy your day."
}

function startGame() {
  firstCard = generateNewCard();
  secondCard = generateNewCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}