const { ipcRenderer } = require('electron');

window.onload = function () {
    let button = document.getElementsByClassName('.login-button')[0];
    if (button) {
        button.addEventListener('click', logInGoogle, false);
    }
};

function logInGoogle () {
    console.log("ASASAS");
    ipcRenderer.send('openGoogleLogin' );
}

// var settingsEl = document.querySelector('.settings');
// settingsEl.addEventListener('click', function () {
//     ipc.send('open-settings-window');
// });