const { app, BrowserWindow} = require('electron')

function createWindow () {
    // Creates an object of a browser window class which shall
    // be used throughout as the main interface to the window
    let window = new BrowserWindow({
        width:800,
        height:400,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // Loads the inde.html page in the electron browser
    window.loadFile('index.html')

    // Open the DevTools.
    window.webContents.openDevTools()

    window.on('closed', () => {
        // Deferencing the window object so as to delete it
        window = null
    })

}
//  Start point for the application for most use cases
app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit()
})