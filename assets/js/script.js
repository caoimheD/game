/*jshint esversion: 6 */

/**
 * Define variables
 *  
 */
const compChoiceText = document.getElementById("comp-choice");
const userChoiceText = document.getElementById("user-choice");
const resultText = document.getElementById("result");
const playerScoreText = document.getElementById("user-score");
const compScoreText = document.getElementById("comp-score");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const userImg = document.getElementById("user-img");
const compImg = document.getElementById("comp-img");

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let result;
let score;

/**
 * add event listener to buttons and run all game functions
 *  
 */

const button = document.getElementsByClassName("choicebtn");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (e) {
    playerChoice = e.target.id;
    userChoiceText.innerHTML = playerChoice;
    compChoice();
    checkWinner();
    checkScore();
    gameRound();
    changeImg();
  });
}

/**
 * function that determines computer choice
 *  
 */

function compChoice() {
  const randomOption = Math.floor(Math.random() * 3);
  const computerChoices = ['rock', 'paper', 'scissors'];
  computerChoice = computerChoices[randomOption];

  compChoiceText.innerHTML = computerChoices[randomOption];
}

/**
 * Changes the image based on user choice and computer choice
 */

 function changeImg() {
  if (playerChoice === 'rock') {
    userImg.src = "assets/images/rockanimated.jpg";
  } else if (playerChoice === 'scissors') {
    userImg.src = "assets/images/scissorsanimated.jpg";
  } else if (playerChoice === 'paper') {
    userImg.src = "assets/images/paperanimated.jpg";
  }

  if (computerChoice === 'rock') {
    compImg.src = "assets/images/rockanimated.jpg";
  } else if (computerChoice === 'scissors') {
    compImg.src = "assets/images/scissorsanimated.jpg";
  } else if (computerChoice === 'paper') {
    compImg.src = "assets/images/paperanimated.jpg";
  }
}

/**
 * Checks the winner of the round
 */

function checkWinner() {
  if (playerChoice == computerChoice) {
    result = 'its a draw!';
    score = 'playerAndcomputer';
  } else if (computerChoice === 'rock' && playerChoice === 'paper') {
    result = 'you won!';
    score = 'player';
  } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
    result = 'you lost!';
    score = 'computer';
  } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
    result = 'you won!';
    score = 'player';
  } else if (computerChoice === 'paper' && playerChoice === 'rock') {
    result = 'you lost!';
    score = 'computer';
  } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
    result = 'you won!';
    score = 'player';
  } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
    result = 'you lost!';
    score = 'computer';
  }
  resultText.innerHTML = result;
}

/**
 * Calculates user and computer scores
 */

function checkScore() {
  if (score == 'player') {
    playerScore++;
  } else if (score == 'computer') {
    computerScore++;
  } else if (score == 'playerAndcomputer') {
    computerScore++;
    playerScore++;
  }
  playerScoreText.innerHTML = playerScore;
  compScoreText.innerHTML = computerScore;
}

/**
 * Sets the game rules to first player to '5' wins
 */

 function gameRound() {
  if (playerScore === 5) {
    result = 'Congratulations! You won the game! To play again, click reset!';
    gameEnd();
  } else if (computerScore === 5) {
    result = 'Computer won the game! To play again, click reset!';
    gameEnd();
  } else if (computerScore === 5 && playerScore === 5) {
    result = 'this game is a draw! To play again, click reset!';
    gameEnd();
  }
  resultText.innerHTML = result;
}

/**
 * function that ends the game (when a player or computer reaches score of 5) and disables buttons from being clicked
 */

 function gameEnd() {
  setTimeout(gameReset, 10000);
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

/**
 * Resets the game (scores, images and text)
 */

function gameReset() {
  computerScore = 0;
  playerScore = 0;
  result = "";
  playerChoice = 'Make a choice!';
  computerChoice = 'Make a choice!';

  playerScoreText.innerHTML = playerScore;
  compScoreText.innerHTML = computerScore;
  resultText.innerHTML = result;
  compChoiceText.innerHTML = computerChoice;
  userChoiceText.innerHTML = playerChoice;
  userImg.src = "assets/images/placeholder.jpg";
  compImg.src = "assets/images/placeholder.jpg";

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}