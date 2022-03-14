

/*function computerPlay() generates a random choice for the computer player
from rock, paper, or scissors and logs and stores the result.*/

function computerPlay() {
    /*Array with available computer plays*/
    let randomAttack=['rock' , 'paper' , 'scissors'];
    /*randomly selects a play from the arra above and logs and stores the play*/
    let computerSelection=randomAttack[Math.floor(Math.random()*randomAttack.length)];
    console.log('Computer plays ' + computerSelection);
    return computerSelection;
}

/*function playRound() compares the playerSelection (input below in the game()
function) to the computerSelection (from the computerPlay() function) and 
returns a string based on the outcome.*/

function playRound (playerSelection, computerSelection) {
    if (playerSelection==computerSelection) {
        return 'A tie!';
    } else if ((playerSelection==='rock') && (computerSelection==='scissors') || 
        (playerSelection==='scissors') && (computerSelection==='paper') || 
        (playerSelection==='paper') && (computerSelection==='rock')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}   

/* function game() loops through the computer and player selections five times,
each time displaying the selection from each player, the outcome, and the running
score. At the end of the loop, a winner is declared.*/

function game() {
    let runningScore=0; /*variable to store and tally score as game progresses*/
    for (let i = 0; i < 5; i++) {
        /*playerInput receives the players chosen play; playerSelection converts
        to lower case; result is then logged to console.*/
        let playerInput=window.prompt('Enter rock, paper, or scissors');
        let playerSelection=playerInput.toLowerCase();
        console.log('Player plays ' + playerSelection);
        /*computerSelection is pulled from the computerPlay function*/
        let computerSelection=computerPlay();
        /*calls the playRound function and logs the result of each round*/
        let roundResult=((playRound(playerSelection, computerSelection)));
        console.log(roundResult);
        /*keeps and logs a running score after each round*/
        if (roundResult === 'You win!') {
            runningScore++;
        }
        console.log('Current score: ' + runningScore);
    }   
    /*Returns the winner of the full game.*/
    if (runningScore>=3) {
        console.log('Player wins!');
    } else {
        console.log('Computer wins!');
    }
}
/*Prints the results of game() to the console*/
console.log(game());
