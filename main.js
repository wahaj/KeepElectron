const { app, BrowserWindow, ipcMain} = require('electron')

function createWindow () {
    // Creates an object of a browser window class which shall
    // be used throughout as the main interface to the window
    let window = new BrowserWindow({
        frame: true,
        width: 800,
        height: 400,
        icon: __dirname + '/app/assets/keep-icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    })
    // Loads the inde.html page in the electron browser
    window.loadFile('app/index.html')
    //window.loadURL('file://' + __dirname + '/index.html')
    //window.loadURL('https://keep.google.com')
    window.webContents.openDevTools();

    window.on('closed', () => {
        // Deferencing the window object so as to delete it
        window = null
    })

}
//  Start point for the application for most use cases
app.on('ready', createWindow)

ipcMain.on('openGoogleLogin', () => {
    let loginWindow = new BrowserWindow({
            frame: true,
            width: 800,
            height: 400,
            icon: __dirname + '/app/assets/keep-icon.png',
            webPreferences: {
                nodeIntegration: true
            }
        }
    )
    loginWindow.loadFile('app/')
})


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
})