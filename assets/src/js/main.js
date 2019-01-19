document.addEventListener('DOMContentLoaded', () => {
	let supportBtn 		 		= document.getElementById('supportBtn'),
			popup			 		 		= document.getElementById('popup'),
			popupBlock 		 		= document.getElementById('popupBlock'),
			myBody		 		 		= document.body,
			closeBtn	 		 		= document.getElementById('closeBtn'),
			animationDuration = 500;

	supportBtn.addEventListener('click', (event) => {
		event.preventDefault();
		if ( !myBody.classList.contains('noscroll') ) {
			myBody.classList.add('noscroll');
			popup.classList.remove('hidden');
			popup.classList.add('visible');
			setTimeout(function() {
				popupBlock.classList.add('active');
			}, 1);
		}
	});

	closeBtn.addEventListener('click', () => {
		myBody.classList.remove('noscroll');
		popup.classList.remove('visible');
		setTimeout(function() {
			popup.classList.add('hidden');
		}, animationDuration);
		popupBlock.classList.remove('active');
	});
});