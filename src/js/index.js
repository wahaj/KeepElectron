const { ipcRenderer } = require('electron');
const Keep = require('./Keep');
import { MDCTopAppBar } from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';
import {MDCList} from '@material/list';
import {MDCDrawer} from "@material/drawer";
import {MDCTextField} from '@material/textfield';


function logInGoogle () {
    ipcRenderer.send('openGoogleLogin' );
}
function initializeNote(value, index, array) {
    let grid = document.getElementById('grid');
    console.log(value);
    grid.innerHTML += '<div class="mdc-layout-grid__inner"><div class="mdc-layout-grid__cell ' +
        'mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-2-tablet ' +
        'mdc-layout-grid__cell--span-2-phone"><div class="mdc-card">' +
        '<div class="mdc-card__primary-action"><div class="mdc-card__media-content"><h6 class="mdc-typography ' +
        'mdc-typography--headline6">' + value.title + '</h6>' +
        '</div></div></div></div></div>';
}
function createDisplayNotes(noteList) {
    noteList.forEach(initializeNote);

}



// Alternative to load event
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        initApplication();
    }
};

function initApplication() {
    // Instantiation
	let keep = new Keep();
	let noteList = null;
	keep.getNotes("major.payne141@gmail.com").then(function(result) {
	    noteList = result;
	    createDisplayNotes(noteList);
	});


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