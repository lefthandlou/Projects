const buttons = document.getElementsByClassName('selections');
let btnArray=Array.from(buttons);

btnArray.forEach(button => {
	button.addEventListener('click', function handleClick (event) {
		console.log('button clicked', event);

		button.classList.add('clicked!');
	});
});

