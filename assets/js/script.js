/**
 * Define variables
 *  
 */

 let playerScore = document.getElementById("user-score");
 let computerScore = document.getElementById("comp-score");
 let reset = document.getElementById("reset");

/**
 * Add event listener to buttons
 *  
 */

let button = document.getElementsByClassName('choicebtn');
for (let i = 0; i < button.length; i++) {
 button[i].addEventListener("click", function (){
    let playerChoice = this.getAttribute("data-choice");
    runGame(playerChoice);
});
}
 
function runGame(playerChoice) {
    let choices = ["rock", "paper", "scissors"];

    let computerChoice = Math.floor(Math.random() * 3);
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

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
