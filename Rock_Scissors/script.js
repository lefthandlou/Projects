
/*function computerPlay() {

    let randomAttack=['rock' , 'paper' , 'scissors'];
    let computerSelection=randomAttack[Math.floor(Math.random()*randomAttack.length)];

   console.log(computerSelection);
}
*/
let playerSelection= 5 ;
let computerSelection= 5 ;

function playRound (playerSelection, computerSelection) {

    
    if (playerSelection===computerSelection) {
        console.log('A tie!');
      } else {
        
      }
}




/* function playRound(playerSelection, computerSelection) {
    function assignNumber(playerSelection, computerSelection) {
        let playerSelection=a;
        let computerSelection=b;
        let a=1;
        let b=2;   
        let playerWin=(a + b);
        let computerWin=(a-b);
    }
   

    if (playerWin) {
        return 'You win!'
    } else if (computerWin) {
        return 'You lose!';
    }
}



function playRound(playerSelection, computerSelection) {

   if (playerSelection===computerSelection) {
        return 'Tie';

    } else if ((playerSelection==='rock') && (computerSelection==='scissors') || (playerSelection==='scissors') && (computerSelection==='paper') || (playerSelection==='paper') && (computerSelection==='rock')) {
        return 'You win!';

    } else {
        return 'You lose!';
    }    
}


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */







