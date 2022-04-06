
const buttons = document.querySelectorAll('.selections');
let declarePlayer=document.querySelector('.player-play');
let declareComputer=document.querySelector('.computer-play');
let resultOfRound=document.querySelector('.results');
let runScorePlayer=document.querySelector('.player');
let runScoreComputer=document.querySelector('.computer')
let gameWinner=document.querySelector('.game-winner');
let btnArray=Array.from(buttons);
let playerScore=0;
let computerScore=0;


function computerPlay() {

    let randomAttack=['rock' , 'paper' , 'scissors'];

    let computerSelection=randomAttack[Math.floor(Math.random()*
		randomAttack.length)];
    
	declareComputer.textContent=('Computer plays ' + computerSelection + '!');
	
	return computerSelection;
}


function playRound () {	

	let computerSelection=computerPlay();
	
	
    if ((document.getElementById('rock').classList.contains('clicked!')) 		&& 
			(computerSelection==='rock') 		|| 

		(document.getElementById('scissors').classList.contains('clicked!')) 	&&
			(computerSelection==='scissors') 	||

		(document.getElementById('paper').classList.contains('clicked!')) 		&&
			(computerSelection==='paper')) {
				resultOfRound.textContent=('A tie!');
	
				return 'A tie!';

	} else if ((document.getElementById('rock').classList.contains('clicked!')) &&
			(computerSelection==='scissors') 	|| 

		(document.getElementById('scissors').classList.contains('clicked!')) 	&&
			(computerSelection==='paper') 		||

		(document.getElementById('paper').classList.contains('clicked!')) 		&&
			(computerSelection==='rock')) {

				playerScore++;
				resultOfRound.textContent=('You win the round!');
				return 'You win the round!';

    } else if ((document.getElementById('rock').classList.contains('clicked!')) &&
			(computerSelection==='paper') 		|| 

		(document.getElementById('scissors').classList.contains('clicked!')) 	&&
			(computerSelection==='rock') 		||

		(document.getElementById('paper').classList.contains('clicked!')) 		&&
			(computerSelection==='scissors')) {

				computerScore++
				resultOfRound.textContent=('You lose the round!');
				return 'You lose the round!';
	};	
}   

function declarePlay() {

	if ((document.getElementById('rock').classList.contains('clicked!'))) {
		declarePlayer.textContent='Player chose rock!';

	} else if ((document.getElementById('paper').classList.contains('clicked!'))) {
		declarePlayer.textContent='Player chose paper!';
	} else {
		declarePlayer.textContent='Player chose scissors!';
	};
}


function keepScore() {
	let roundResult=playRound()

	if (playerScore >= 5) {
		gameWinner.textContent='Player wins the game!'

	} else if (computerScore >= 5) {
		gameWinner.textContent='Computer wins the game!'
	};

	runScorePlayer.textContent=('Current player score: ' + playerScore);
	runScoreComputer.textContent=('Current computer score: ' + computerScore);
}



function playerInput() {
	
	btnArray.forEach(button => {
		button.addEventListener('click', function handleClick (event) {

			button.classList.add('clicked!');

			console.log(declarePlay());

			console.log(keepScore());	
		
			button.classList.remove('clicked!');	

			}); 
	});
}

console.log(playerInput());


