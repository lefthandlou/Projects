
const buttons = document.querySelectorAll('.selections');
let btnArray=Array.from(buttons);

function computerPlay() {
    /*Array with available computer plays*/
    let randomAttack=['rock' , 'paper' , 'scissors'];
    /*randomly selects a play from the arra above and logs and stores the play*/
    let computerSelection=randomAttack[Math.floor(Math.random()*randomAttack.length)];
    //console.log('Computer plays ' + computerSelection);
    console.log(computerSelection);
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

btnArray.forEach(button => {
	button.addEventListener('click', function handleClick (event) {
		console.log('button clicked', event);

		button.classList.add('clicked!');
		console.log(button.classList);
		
		console.log(playRound());
		}); 
});


// https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class

/*btnArray.forEach(button => {
	button.addEventListener('click', function handleClick (event) {
		console.log('button clicked', event);

		button.classList.add('clicked!');	console.log(computerPlay());
		
	}); 
});*/

