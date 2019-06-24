class KeepNote {
	constructor(json) {
		if (json === undefined) {
			this.color = "White";
			this.archived = false;
			this.pinned = false;
			this.title = "";
			this.text = "";
		}
		else {
			this.color = json.color;
			this.archived = json.archived;
			this.pinned = json.pinned;
			this.title = json.title;
			this.text = json.text;
		}
	}
}

module.exports = KeepNote;