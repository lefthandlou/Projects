function computerPlay() {
    let randomAttack=['rock' , 'paper' , 'scissors'];
    let computerSelection=randomAttack[Math.floor(Math.random()*randomAttack.length)];
    console.log('Computer plays ' + computerSelection + ' ');
    return computerSelection;
}

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


function game() {
    let runningScore=0;
    for (let i = 0; i < 5; i++) {
        
        let playerSelection=window.prompt('Enter rock, paper, or scissors');
        let computerSelection=computerPlay();
        console.log('Player plays ' + playerSelection + ' ');
        let roundResult=((playRound(playerSelection, computerSelection)));
        console.log(roundResult);
        if (roundResult === 'You win!') {
            runningScore++;
        }
        console.log('Current score:' + runningScore + ' ');
    } 
    if (runningScore>=3) {
        console.log('Player wins!');
    } else {
        console.log('Computer wins!');
    }
}




/*console.log(playRound(playerSelection, computerSelection));*/
console.log(game());
