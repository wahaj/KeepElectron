const { ipcRenderer } = require('electron');

import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCFormField} from '@material/form-field';


function loginSubmit(username, password){
	ipcRenderer.send('loginSubmit', username, password);
}


// Alternative to load event
document.onreadystatechange = function () {
	if (document.readyState === 'complete') {
		initApplication();
	}
};

function initApplication() {
	// Instantiation
	const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
	const username = new MDCTextField(document.querySelector('.username'));
	const password = new MDCTextField(document.querySelector('.password'));

	const loginButton = document.getElementById('login-button');
	if (loginButton){
		new MDCRipple(loginButton);
		loginButton.addEventListener('click', function loginSubmit() {
			ipcRenderer.send('loginSubmit', username.value, password.value);
		});
	}
}
