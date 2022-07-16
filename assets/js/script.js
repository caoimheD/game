/**
 * Add event listener to buttons
 *   button.addEventListener("click", function (){
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
 */

let button = document.getElementsByClassName('choicebtn');
for (let i = 0; i < button.length; i++) {
 button[i].addEventListener("click", runGame);
}


function runGame() {
    
    alert("hello");
    console.log("hello");
}

