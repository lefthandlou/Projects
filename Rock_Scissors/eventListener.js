const buttons = document.querySelector('#selections');

buttons.addEventListener('click', (e) => {
	e.target.classList.add('playerSelection');
	console.log(e.target);
});