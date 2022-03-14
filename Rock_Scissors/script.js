

/*function computerPlay() generates a random choice for the computer player from rock, paper, or scissors and 
logs and stores the result.*/

function computerPlay() {
    let randomAttack=['rock' , 'paper' , 'scissors'];
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
    let runningScore=0;
    for (let i = 0; i < 5; i++) {
        let playerInput=window.prompt('Enter rock, paper, or scissors');
        let playerSelection=playerInput.toLowerCase();
        let computerSelection=computerPlay();
        console.log('Player plays ' + playerSelection);
        let roundResult=((playRound(playerSelection, computerSelection)));
        console.log(roundResult);
        if (roundResult === 'You win!') {
            runningScore++;
        }
        console.log('Current score: ' + runningScore);
    } 
    if (runningScore>=3) {
        console.log('Player wins!');
    } else {
        console.log('Computer wins!');
    }
}

console.log(game());
