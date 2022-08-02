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
let gameResetTimeout;

/**
 * add event listener to buttons and run all game functions 
 */

const choiceButtons = document.getElementsByClassName("choicebtn");
for (let i = 0; i < choiceButtons.length; i++) {
  choiceButtons[i].addEventListener("click", function (e) {
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
  switch (playerChoice) {
    case 'rock':
      userImg.src = "assets/images/rockanimated.jpg";
      break;
    case 'scissors':
      userImg.src = "assets/images/scissorsanimated.jpg";
      break;
    case 'paper':
      userImg.src = "assets/images/paperanimated.jpg";
      break;
    default:
      console.log('unexpected value for player choice');
  }
  switch (computerChoice) {
    case 'rock':
      compImg.src = "assets/images/rockanimated.jpg";
      break;
    case 'scissors':
      compImg.src = "assets/images/scissorsanimated.jpg";
      break;
    case 'paper':
      compImg.src = "assets/images/paperanimated.jpg";
      break;
    default:
      console.log('unexpected value for computer choice');
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
    result = 'Congratulations, you won the game! To play again, click restart!';
    gameEnd();
  } else if (computerScore === 5) {
    result = 'Computer won the game! To play again, click restart!';
    gameEnd();
  } else if (computerScore === 5 && playerScore === 5) {
    result = 'this game is a draw! To play again, click restart!';
    gameEnd();
  }
  resultText.innerHTML = result;
}

/**
 * function that ends the game (when a player or computer reaches score of 5) and disables buttons from being clicked
 */

 function gameEnd() {
  gameResetTimeout = setTimeout(gameReset, 10000);
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

/**
 * Resets the game (scores, images, text, name)
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

    clearTimeout(gameResetTimeout);
}

/**
 * Function that lets players enter their name
 */

function playerName () {
  let playername = prompt("Please enter your name", "Name");

  if (playername != null) {
    document.getElementById("userscorearea").innerHTML =
    playername + "'s score:";
    document.getElementById("userchoicearea").innerHTML =
    playername + "'s choice:";
  }
}