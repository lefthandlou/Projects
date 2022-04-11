

/*const changeTextRock = () => {
    pRock.textContent = 'Rock';
}

const changeTextPaper = () => {
    pPaper.textContent = 'Paper';
}

const changeTextScissor = () => {
    pScissor.textContent = 'Scissors';
}

function clickListener() {
    for (let i=0; i<button.length; i++) {
        button[i].addEventListener('click', changeText)
    };
}

clickListener();

*/

const pRock = document.getElementById('rockP');
const pPaper = document.getElementById('paperP');
const pScissor = document.getElementById('scissorP');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissors');


const button = document.getElementsByTagName('button');
const paragraph = document.getElementsByTagName('p');

const parArray=Array.from(paragraph);
const buttArr=Array.from(button);

function changeText(playerRound) {
    let playerSelection = playerRound;
   
    if (playerSelection===rockButton) {
        pRock.textContent='Rock';
    } else if (playerSelection===paperButton) {
        pPaper.textContent='Paper';
    } else if (playerSelection===scissorButton) {
        pScissor.textContent='Scissors';
    };  
}

function playerRound () {
    
    rockButton.addEventListener('click', changeText);
    scissorButton.addEventListener('click', changeText);
    paperButton.addEventListener('click', changeText);
}





