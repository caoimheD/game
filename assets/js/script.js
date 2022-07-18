/**
 * Define variables
 *  
 */
const compChoiceText = document.getElementById("comp-choice");
const userChoiceText = document.getElementById("user-choice");
const resultText = document.getElementById("result");

let playerScore = document.getElementById("user-score");
let computerScore = document.getElementById("comp-score");
let reset = document.getElementById("reset");
let playerChoice;
let computerChoice;
let result;
/**
 * add event listener to buttons and display user/computer choices in text
 *  
 */
const button = document.getElementsByClassName("choicebtn");
for (let i = 0; i < button.length; i++) {
 button[i].addEventListener("click", (e) => {
  playerChoice = e.target.id;
  userChoiceText.innerHTML = playerChoice;
  compChoice();
  checkWinner();
 }
 )};

/**
 * function that runs the game
 *  
 */
function runGame(e) {
 
   playerChoice = e.target.id;
   userChoiceText.innerHTML = playerChoice;
    compChoice ();
    checkWinner();

  }

/**
 * function that determines computer choice
 *  
 */
function compChoice () {

  const randomOption = Math.floor(Math.random() * 3);

   if (randomOption === 1) {
    computerChoice = 'rock'
   }
   if (randomOption === 2) {
    computerChoice = 'paper'
   }
   if (randomOption === 1) {
    computerChoice = 'scissors'
   }
   compChoiceText.innerHTML = computerChoice;   

}

/**
 * Checks the winner of the game
 */

function checkWinner () {
    if (playerChoice == computerChoice) {
      result = 'its a draw!';
}
if (computerChoice === 'rock' && playerChoice === 'paper') {
  result = 'you won!';
}
if (computerChoice === 'rock' && playerChoice === 'scissors') {
  result = 'you lost!';
}
if (computerChoice === 'paper' && playerChoice === 'scissors') {
  result = 'you won!';
}
if (computerChoice === 'paper' && playerChoice === 'rock') {
  result = 'you lost!';
}
if (computerChoice === 'scissors' && playerChoice === 'rock') {
  result = 'you won!';
}
if (computerChoice === 'scissors' && playerChoice === 'paper') {
  result = 'you lost!';
}
resultText.innerHTML = result;

}

/**
 * Scores
 */


/**
 * Reset game
 */
