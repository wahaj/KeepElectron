const { ripple } = require('material-components-web');
const { ipcRenderer } = require('electron');


console.log("index.js loaded");
function logInGoogle () {
    console.log("ASASAS");
    ipcRenderer.send('openGoogleLogin' );
}

// window.onload = function () {

    // Alternative to load event
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        initApplication();
    }
};

function initApplication() {

    let button = document.getElementById('login-button');
    console.log("wjat");
    if (button) {
        console.log("Button found");
        ripple.MDCRipple.attachTo(button);
        button.addEventListener('click', logInGoogle, false);
    }
}

// var settingsEl = document.querySelector('.settings');
// settingsEl.addEventListener('click', function () {
//     ipc.send('open-settings-window');
// });