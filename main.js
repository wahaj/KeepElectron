const electron = require('electron');
const app  = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;


let mainWindow = null;
function createWindow () {
    // Creates an object of a browser window class which shall
    // be used throughout as the main interface to the window
    mainWindow = new BrowserWindow({
        frame: true,
        width: 800,
        height: 400,
        show: true,
        icon: __dirname + '/app/assets/keep-icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });
    // Loads the index.html page in the electron browser
    console.log("ASA");
    //window.loadFile('index.html');
    mainWindow.loadURL('file://' + __dirname + '/src/index.html');
    //window.loadURL('https://keep.google.com')
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        // Dereference the window object so as to delete it
        mainWindow = null;
    })

}
//  Start point for the application for most use cases
app.on('ready', createWindow);

ipcMain.on('openGoogleLogin', () => {

    let loginWindow = new BrowserWindow({
            frame: false,
            width: 800,
            height: 400,
            icon: __dirname + '/app/assets/keep-icon.png',
            webPreferences: {
                nodeIntegration: true
            }
        }
    );
    mainWindow.vis
    loginWindow.loadURL('file://' + __dirname + '/src/signin.html');
});


// Google OAuth
// using electrongoogleoauth
// button = app.querySelector('mdc-button');
// button.on('click', () => {
//     console.log("AS");
//     const browserWindowParams = {
//         'use-content-size': true,
//         center: true,
//         show: false,
//         resizable: false,
//         'always-on-top': true,
//         'standard-window': true,
//         'auto-hide-menu-bar': true,
//         'node-integration': false
//     };
//
// })


app.on('window-all-closed', () => {
	app.quit();
});