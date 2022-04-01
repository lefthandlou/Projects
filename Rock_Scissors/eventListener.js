const buttons = document.getElementsByClassName('selections');



/*btnArray.forEach(button => {
	button.addEventListener('click', function handleClick (event) {
		console.log('button clicked', event);

		button.classList.add('clicked!');
		
	}); 
});*/


function changeClass() {
	let btnArray=Array.from(buttons);
	btnArray.forEach(button => {
		button.addEventListener('click', function handleClick (event) {
			console.log('button clicked', event);
	
			button.classList.add('clicked!');
		});
	}); 
}

changeClass();

// https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class


//Rewrite logic so player selection is based on class names;
//Add a loop that removes class name of 'clicked!' after round




