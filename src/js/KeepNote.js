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
			this.setJSON(json)
		}
	}
	setJSON(json) {
		if (json["list"]) {
			this.id = json.id;
			this.color = json.color;
			this.archived = json.archived;
			this.pinned = json.pinned;
			this.title = json.title;
			this.list = json.list;
		}
		else {
			this.id = json.id;
			this.color = json.color;
			this.archived = json.archived;
			this.pinned = json.pinned;
			this.title = json.title;
			this.text = json.text;
		}
	}
	getJSON() {
		return {
			'id': this.id,
			'color' : this.color,
			'archived' : this.archived,
			'pinned' : this.pinned,
			'title' : this.title,
			'text' : this.text
		}
	}
}

module.exports = KeepNote;