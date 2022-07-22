![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome!

This website is a game of rock, paper and scissors. It is targeted towards any user who wishes to play the game. The design is intuitive, meaning that it should be clear to the user that in order to play they make a selection from one of the 3 buttons (rock, paper or scissors). This is also explianed to the user in the section with shows their choice and the computer's choice; on loading the webiste, this displays the text 'make a choice'.

The rules of the game are outlined in the footer. These are the traditional rules for a rock, paper, scissors game: Rock beats scissors, Scissors beats paper, Paper beats rock. There is an additional rule in this specific game which is that the first player to reach the score of '5' wins the round. Players can then press 'reset' to start a new round. If they do not press anything, the game will automatically reset after 10 seconds.



## Features

Header

IMAGE

The header provides the name of the game (rock, paper, scissors). This informs the user of the type of game they can expect to see on the page.

Buttons

There are three buttons that the user can use for their choice: rock button, paper button and scissors button. An event listener has been added to these buttons in javascript, which calls multiple functions. After making a selection and clicking a button, the user can expect to see the following changes:
- user image changes to the image of the option they selected
- 'your choice' text will display their selection in text format
- a computer choice function will also run and the same above changes will occur on the 'computer choice' div on the right hand side.
- the winner is checked, also through a javascript function, and this is displayed in text beside 'result'
- scores are adjusted depending on who won points

There is a fourth button called 'reset'. The user can press this at anytime during the game and it will reset the scores back to zero, the result to blank, the image to the placeholder image and the 'your choice' text to 'make a choice'.

As the rule of this game is that the first to 5 wins, the reset function is automatically called when either the player or the computer reaches a score of 5. There is a 10 second delay on this to allow the user time to read the scores and see who one the last choice. The message that the user receives in the 'result' section will also prompt them to start a new game by pressing 'reset'.

Scores

The score area provides information on the player score and the computer score. Each time the player wins or draws, their score is increased. This also happens for the computer score. Scores will reset to 0 either when the reset button is pressed or when the round is finished and someone reached the score of 5. 

Result

The result provides information in text format every time a selection is made my the player. The possible options are 'you won', 'you lost' and 'its a draw'. This section will also display the winner of the round (first to 5) in text format, along with a prompt for the user to press reset to start again.

User and computer areas

These areas provide information on the choice that has been made  by both the user and the computer. Before any selection has been made, they contain a placeholder image. After a selection has been made, this image changes to an image that represents the choice (e.g. picture of paper). With this feature, players are able to see both in text and in image format what their choice is and what the computer has chosen.

Footer

The footer area contains the rules of the game. Players can read this to understand what the rules are and how they can win.


------

## Testing

Feature testing

| Action        | Expected Behaviour  | Result | 
| ------------- | ------------- | ------------- | 
| Enter url of site in browser  | site shows homepage | pass | 
| Click on rock/paper/scissors buttons  | game starts and player's choice is shown  |  | 
| Click on reset button  | scores reset to 0  |  | 
| a | a  | a |
|  b | b  | b |
| c  | c  | c |
| a  | a  | a |
| a  | a | a |

Validator Testing

Responsiveness testing

Lighthouse

Other general testing

------

## Deployment

 GitHub pages:

 Local deployment:

---

## Content credits


Images: https://www.iconspng.com/image/36942/rockpaperscissors

https://coolors.co/379634-f4f1bb-ad5d4e-231b1b-bddbd0
---
