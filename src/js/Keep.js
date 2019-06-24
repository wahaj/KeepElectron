const {PythonShell} = require("python-shell");
const Note = require("./KeepNote");

class Keep {
	constructor() {
		this.noteList = [];
	}
	addNoteFromJSON(noteJSON) {
		let note = new Note(noteJSON);
		this.noteList.push(note);
	}
	getNoteList() {
		return this.noteList;
	}
	async getNotes(username) {
		let self = this;

		// Creating a Python shell for interacting with the gkeepapi
		let options = {
			mode: 'json',
			pythonPath: 'venv/bin/python',
			pythonOptions: ['-u'], // get print results in real-time
			args: [username]
		};
		let shell = new PythonShell('src/external-python/get_notes.py', options);

		// On message received from the shell, that is JSON which is passed to create a new Note
		shell.on('message', (message) => {
			self.addNoteFromJSON(message);
		});

		return new Promise(function (resolve, reject) {
			// On the python shell script termination, resolve and return the promise
			shell.on('close', () => {
				resolve(self.noteList);
			})
			shell.on('error', (error) => {
				reject(error);
			})
		});
	}
}
module.exports = Keep;