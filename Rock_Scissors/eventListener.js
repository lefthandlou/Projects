
const buttons = document.querySelectorAll('.selections');
let btnArray=Array.from(buttons);
let playerScore=0;
let computerScore=0;
let gameWinner=document.querySelector('.game-winner');
let winnerBody=document.querySelector('.winner');
let tryAgainButton=document.createElement('button');
let buttonsWindow=document.querySelector('.playerButtons');
let roundDisplay=document.querySelector('.main-round-window');


function computerPlay() {
	let declareComputer=document.querySelector('.computer-play');
    let randomAttack=['rock' , 'paper' , 'scissors'];

    let computerSelection=randomAttack[Math.floor(Math.random()*
		randomAttack.length)];
    
	declareComputer.textContent=(computerSelection + '!');
	
	return computerSelection;
}


function playRound () {	

	let computerSelection=computerPlay();
	let resultOfRound=document.querySelector('.results');
	
	
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

	let declarePlayer=document.querySelector('.player-play');
	
	if ((document.getElementById('rock').classList.contains('clicked!'))) {
		declarePlayer.textContent='rock!';
	} else if ((document.getElementById('paper').classList.contains('clicked!'))) {
		declarePlayer.textContent='paper!';
	} else {
		declarePlayer.textContent='scissors!';
	};
}

function newGame() {
	
	winnerBody.append(gameWinner);
	tryAgainButton.textContent='Try again?';
	winnerBody.append(tryAgainButton);
	tryAgainButton.addEventListener('click', () => location.reload());
	setStyle();	
}

function setStyle () {
	winnerBody.style.border='3px solid white'; 
	winnerBody.style.width='480px';
	winnerBody.style.backgroundColor='#DBF3FA';
	winnerBody.style.marginTop='20px';
	winnerBody.style.marginBottom='15px';
	tryAgainButton.style.marginBottom='10px';
	gameWinner.style.fontSize='16px';
	buttonsWindow.remove();	
	roundDisplay.remove();
}

function keepScore() {
	let roundResult=playRound()
	let runScorePlayer=document.querySelector('.player');
	let runScoreComputer=document.querySelector('.computer')
	
	if (playerScore >= 5) {
		gameWinner.textContent='Player wins the game!'
		newGame();
	} else if (computerScore >= 5) {
		gameWinner.textContent='Computer wins the game!'
		newGame();
	};

	runScorePlayer.textContent=(playerScore);
	runScoreComputer.textContent=(computerScore);
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


