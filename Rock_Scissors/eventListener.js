

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

function changeText(button) {
    if (button===rockButton) {
        pRock.textContent='Rock';
    } else if (button===paperButton) {
        pPaper.textContent='Paper';
    } else if (button===scissorButton) {
        pScissor.textContent='Scissors';
    };  
}

let playerRound = function (button) {
    for (let i=0; i<buttArr.length; i++) {
        buttArr[i].addEventListener('click' , changeText());
    };
}


playerRound ();




