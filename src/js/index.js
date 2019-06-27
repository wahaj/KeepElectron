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
    if (value.list !== undefined) {
    }
    let gridCellSpans = 'mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-4-desktop';
    let gridCellDiv = '<div class="mdc-layout-grid__cell ' + gridCellSpans + '"><div class="mdc-card">';
    if (value.title !== "")
        gridCellDiv += '<h4 class="mdc-typography mdc-typography--headline4">' + value.title + '</h4>';

    if (value.list) {
        let tempHtml = '<div class="mdc-card__primary-action" tabindex="0"><ul class="mdc-list" role="group" aria-label="List with checkbox items">';
        value.list.forEach(function (item) {
            tempHtml += '<li class="mdc-list-item" role="checkbox" aria-checked="false"><span class="mdc-list-item__graphic">' +
                '<div class="mdc-checkbox"><input type="checkbox" class="mdc-checkbox__native-control" /> ' +
                '<div class="mdc-checkbox__background"><div class="mdc-checkbox__mixedmark"></div></div></div></span>' +
                '<label class="mdc-list-item__text" for="demo-list-checkbox-item-1">' + item.text + '</label></li>';
        });
        tempHtml += '</ul></div>';
        gridCellDiv += tempHtml;
    }
    else {
        gridCellDiv += '<div class="mdc-card__primary-action" tabindex="0"><div class="mdc-typography--body1">' + value.text + '</div></div>';
    }
    gridCellDiv += '</div></div>';

    grid.children[0].innerHTML += gridCellDiv;
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