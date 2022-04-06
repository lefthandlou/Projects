
const buttons = document.querySelectorAll('.selections');
let btnArray=Array.from(buttons);


function computerPlay() {
    let randomAttack=['rock' , 'paper' , 'scissors'];
    let computerSelection=randomAttack[Math.floor(Math.random()*randomAttack.length)];
    console.log('Computer plays ' + computerSelection + '!');
	return computerSelection;
}


function playRound () {
	let computerSelection=computerPlay();
	
    if ((document.getElementById('rock').classList.contains('clicked!')) && (computerSelection==='rock') || 
		(document.getElementById('scissors').classList.contains('clicked!')) && (computerSelection==='scissors') ||
		(document.getElementById('paper').classList.contains('clicked!')) && (computerSelection==='paper')) {
		return 'A tie!';
	} else if ((document.getElementById('rock').classList.contains('clicked!')) && (computerSelection==='scissors') || 
		(document.getElementById('scissors').classList.contains('clicked!')) && (computerSelection==='paper') ||
		(document.getElementById('paper').classList.contains('clicked!')) && (computerSelection==='rock')) {
        return 'You win!';
    } else if ((document.getElementById('rock').classList.contains('clicked!')) && (computerSelection==='paper') || 
		(document.getElementById('scissors').classList.contains('clicked!')) && (computerSelection==='rock') ||
		(document.getElementById('paper').classList.contains('clicked!')) && (computerSelection==='scissors')) {
        return 'You lose!';
	};	
}   

function declarePlay() {
	if ((document.getElementById('rock').classList.contains('clicked!'))) {
		console.log('Player chose rock!');
	} else if ((document.getElementById('paper').classList.contains('clicked!'))) {
		console.log('Player chose paper!');
	} else {
		console.log('Player chose scissors!');
	};
}

function playerInput() {
	
	btnArray.forEach(button => {
		button.addEventListener('click', function handleClick (event) {
			button.classList.add('clicked!');
			//console.log(button.classList);

			console.log(declarePlay());
			console.log(playRound());
			
			button.classList.remove('clicked!');	
			}); 
	});
	
}

console.log(playerInput());


// https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class

/*btnArray.forEach(button => {
	button.addEventListener('click', function handleClick (event) {
		console.log('button clicked', event);

		button.classList.add('clicked!');	console.log(computerPlay());
		
	}); 
});*/

