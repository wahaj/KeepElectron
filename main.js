const { app, ipcMain } =  require('electron');
const Window = require('./src/js/Window');
const { PythonShell } = require("python-shell");
const Keep = require("./src/js/Keep");

let mainWindow = null;
let keep = new Keep();

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

ipcMain.on('loginSubmit', (event, username, password) => {
	let pythonOptions = {
		pythonPath: 'venv/bin/python',
		pythonOptions: ['-u'], // get print results in real-time
		args: [username, password]
	};
	PythonShell.run('src/external-python/login.py', pythonOptions, function (err, results) {
		if (err) throw err;
        console.log(results);
    });

	keep.getNotes(username);
	mainWindow.loadURL('file://' + __dirname + '/src/index.html');
});


app.on('window-all-closed', () => {
	app.quit();
});