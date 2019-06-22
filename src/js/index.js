const { ipcRenderer } = require('electron');
import { MDCTopAppBar } from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';
import {MDCList} from '@material/list';
import {MDCDrawer} from "@material/drawer";
import {MDCTextField} from '@material/textfield';


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
    let topAppBar = null;
    if (topAppBarElement) {
        topAppBar = new MDCTopAppBar.attachTo(topAppBarElement);
    }

    // Drawer
    const drawerElement = document.querySelector('.mdc-drawer');
    let drawer = null;
    if (drawerElement) {
        drawer = new MDCDrawer.attachTo(drawerElement);
    }

    // DrawerList
    const listElement = document.querySelector('.mdc-drawer .mdc-list');
    if  (listElement) {
        listElement.addEventListener('click', (event) => {
            drawer.open = false;
        });
    }


    // Navbar button click
    if (topAppBar){
        topAppBar.setScrollTarget(document.querySelector('.main-content'));
        topAppBar.listen('MDCTopAppBar:nav', () => {
            drawer.open = !drawer.open;
        });
    }

    // Search Bar
    const searchField = new MDCTextField(document.querySelector('.search-bar'));


    // Button
    let button = document.getElementById('login-button');
    if (button) {
        new MDCRipple(button);
        button.addEventListener('click', logInGoogle, false);
    }
}