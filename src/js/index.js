const { ipcRenderer } = require('electron');
import { MDCTopAppBar } from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';
import {MDCList} from '@material/list';
import {MDCDrawer} from "@material/drawer";


function logInGoogle () {
    ipcRenderer.send('openGoogleLogin' );
}

// Alternative to load event
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        initApplication();
    }
};

function initApplication() {
    // Instantiation

    // Navbar
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    if (topAppBarElement) {
        console.log("AS");
        const topAppBar = new MDCTopAppBar(topAppBarElement);
    }
    // Drawer
    const drawerElement = document.querySelector('keep-drawer');
    if (drawerElement) {
        const drawer = MDCDrawer.attachTo(drawerElement);
        //const drawer = new MDCList(document.querySelector('.mdc-list'));
    }

    // Navbar button click
    topAppBar.listen('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
    });

    // Button
    let button = document.getElementById('login-button');
    if (button) {
        new MDCRipple(button);
        button.addEventListener('click', logInGoogle, false);
    }
}