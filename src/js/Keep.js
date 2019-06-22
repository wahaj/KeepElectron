const {PythonShell} = require("python-shell");

class Keep {
	constructor() {
		this.noteList = [];

	}
	getNotes(username) {
		let options = {
			mode: 'json',
			pythonPath: 'venv/bin/python',
			pythonOptions: ['-u'], // get print results in real-time
			args: [username]
		};
		let shell = new PythonShell('src/external-python/get_notes.py', options);
		shell.on('message', function (message) {
			console.log(message);
			// handle message (a line of text from stdout, parsed as JSON)
		});	}
}
module.exports = Keep;