/**
 * Define variables
 *  
 */
const compChoiceText = document.getElementById("comp-choice");
const userChoiceText = document.getElementById("user-choice");
const resultText = document.getElementById("result");
const playerScoreText = document.getElementById("user-score");
const compScoreText = document.getElementById("comp-score");

let playerScore = 0;
let computerScore = 0;
let reset = document.getElementById("reset");
let playerChoice;
let computerChoice;
let result;
let score;
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
  checkScore();
  gameRound();
  changeImg();
 }
 )};

/**
 * function that runs the game
 * function runGame(e) {
 
   playerChoice = e.target.id;
   userChoiceText.innerHTML = playerChoice;
    compChoice ();
    checkWinner();

  }
 *  
 */


/**
 * function that determines computer choice
 *  
 */
function compChoice () {

  const randomOption = Math.floor(Math.random() * 3);

   if (randomOption === 0) {
    computerChoice = 'rock'
   }
   if (randomOption === 1) {
    computerChoice = 'paper'
   }
   if (randomOption === 2) {
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
 * Scores
 */

function checkScore(){

    if (score == 'player') {
      playerScore++;
    } else if (score == 'computer') {
      computerScore++;
    }
    else if (score == 'playerAndcomputer') {
      computerScore++;
      playerScore++;
    }
    playerScoreText.innerHTML = playerScore;
    compScoreText.innerHTML = computerScore;
  }
/**
 * Reset game
 */

function gameReset() {
      computerScore = 0;
      playerScore = 0;
      result = "";
      playerChoice = "";
      computerChoice = "";

      playerScoreText.innerHTML = playerScore;
      compScoreText.innerHTML = computerScore;
      resultText.innerHTML = result;
      compChoiceText.innerHTML = computerChoice;
      userChoiceText.innerHTML = playerChoice;

}

/**
 * Sets the game rules to first player to '5' wins
 */

function gameRound() {

  if (playerScore === 5) {
    alert('You win the game!');
    gameReset();
  } else if (computerScore === 5 ) {
    alert('You lost the game!');
    gameReset();
  }
}

/**
 * Changes the image based on user choice
 */

function changeImg() {
  let userImg = document.getElementById("user-img");
  let compImg = document.getElementById("comp-img");

  if (playerChoice === 'rock') {
    userImg.src="assets/images/rockanimated.jpg";
  } else if (playerChoice === 'scissors') {
    userImg.src="assets/images/scissorsanimated.jpg";
  } else if (playerChoice === 'paper') {
    userImg.src="assets/images/paperanimated.jpg";
  } 

  if (computerChoice === 'rock') {
    compImg.src="assets/images/rockanimated.jpg";
  } else if (computerChoice === 'scissors') {
    compImg.src="assets/images/scissorsanimated.jpg";
  } else if (computerChoice === 'paper') {
    compImg.src="assets/images/paperanimated.jpg";
  } 

}