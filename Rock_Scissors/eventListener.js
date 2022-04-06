
const buttons = document.querySelectorAll('.selections');
let btnArray=Array.from(buttons);
let clickCount=0;
let tie='A tie!';
let win='You win!';
let lose='You lose!';


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
		return tie;
	} else if ((document.getElementById('rock').classList.contains('clicked!')) && (computerSelection==='scissors') || 
		(document.getElementById('scissors').classList.contains('clicked!')) && (computerSelection==='paper') ||
		(document.getElementById('paper').classList.contains('clicked!')) && (computerSelection==='rock')) {
        return win;
    } else if ((document.getElementById('rock').classList.contains('clicked!')) && (computerSelection==='paper') || 
		(document.getElementById('scissors').classList.contains('clicked!')) && (computerSelection==='rock') ||
		(document.getElementById('paper').classList.contains('clicked!')) && (computerSelection==='scissors')) {
        return lose;
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

function keepScore() {
	let roundResult=playRound()
	console.log(roundResult);
	if (roundResult===win) {
		clickCount++;
		console.log(clickCount);	
	};
	console.log('Current score: ' + clickCount);
}

function playerInput() {
	
	btnArray.forEach(button => {
		button.addEventListener('click', function handleClick (event) {
			button.classList.add('clicked!');
			//console.log(button.classList);

			console.log(declarePlay());
			console.log(keepScore());
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

