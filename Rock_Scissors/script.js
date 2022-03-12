function computerPlay() {
    let randomAttack=['rock' , 'paper' , 'scissors'];
    let computerSelection=randomAttack[Math.floor(Math.random()*randomAttack.length)];
    console.log(computerSelection);
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
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log((playRound(playerSelection, computerSelection)));
    } 
}


const playerSelection='rock';
const computerSelection=computerPlay();

/*console.log(playRound(playerSelection, computerSelection));*/
console.log(game());
