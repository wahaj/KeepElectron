const { ipcRenderer } = require('electron');

import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';


function loginSubmit(){
	ipcRenderer.send('loginSubmit',)
}


// Alternative to load event
document.onreadystatechange = function () {
	if (document.readyState === 'complete') {
		initApplication();
	}
};

function initApplication() {
	// Instantiation
	const username = new MDCTextField(document.querySelector('.username'));
	const password = new MDCTextField(document.querySelector('.password'));

	const loginButton = document.getElementById('login-button');
	if (loginButton){
		new MDCRipple(button);
		loginButton.addEventListener('click', loginSubmit, false);
	}
}
