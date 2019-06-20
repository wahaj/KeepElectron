const { app, ipcMain } =  require('electron');
const Window = require('./src/js/Window');

let mainWindow = null;

function main () {
    // Creates an object of a browser window class which shall
    // be used throughout as the main interface to the window
    mainWindow = new Window({file:'file://' + __dirname + '/src/index.html'});
    // Loads the index.html page in the electron browser

    mainWindow.on('closed', () => {
        // Dereference the window object so as to delete it
        mainWindow = null;
    })

}
//  Start point for the application for most use cases
app.on('ready', main);

ipcMain.on('openGoogleLogin', () => {
    mainWindow.loadURL('file://' + __dirname + '/src/login.html');
});

app.on('window-all-closed', () => {
	app.quit();
});