
function computerPlay() {

    let randomAttack=['rock' , 'paper' , 'scissors'];
    let computerSelection=randomAttack[Math.floor(Math.random()*randomAttack.length)];

   console.log(computerSelection);
}

console.log(computerPlay());









