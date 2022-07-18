/**
 * Define variables
 *  
 */

 let playerScore = document.getElementById("user-score");
 let computerScore = document.getElementById("comp-score");
 let reset = document.getElementById("reset");

/**
 * function that runs the game
 *  
 */
function runGame(playerChoice) {
 
    let button = document.getElementsByClassName('choicebtn');
    for (let i = 0; i < button.length; i++) {
    let playerChoice = this.getAttribute("data-choice");

  }
}
/**
 * function that determines computer choice
 *  
 */
function compChoice () {

    let computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice) {
      case 0:
          choice = "rock";
          break;
      case 1:
          choice = "paper";
          break;
      case 2:
          choice = "scissors";
          break; 
  }
  return choice;
}


function checkWinner () {
    if (playerChoice == computerChoice) {
        return draw;
    }  else if (playerChoice === "rock" && computerChoice === "scissors") {
        return playerWin;
    
      } else if (playerChoice === "paper" && computerSelection === "rock") {
        return playerWin;
    
      } else if (playerChoice === "scissors" && computerSelection === "paper") {
        return playerWin;
    
      } else {
        return computerWin;
      }
}

function playerWin () {
    alert("you won!");
    playerScore++;
}
function computerWin () {
    alert("you lost!");
    computerScore++;
}
function draw () {
    alert("it's a draw!");
    computerScore++;
    playerScore++;

}
/**
 * Results
 */
