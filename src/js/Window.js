const { BrowserWindow } = require('electron');

const defaultProps = {
	frame: false,
	width: 800,
	height: 400,
	icon: __dirname + '/app/assets/keep-icon.png',
	webPreferences: {
		nodeIntegration: true
	}
};

class Window extends BrowserWindow {
	constructor({file, ...windowSettings}) {
		super({...defaultProps, ...windowSettings});

		this.loadURL(file);
		this.webContents.openDevTools();

		this.once('ready-to-show', () => {
			this.show();
		})
	}
}
module.exports = Window;