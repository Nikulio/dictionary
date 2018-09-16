const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Word = new Schema({
	from: {
		type: String,
		isRequired: true
	},
	language: {
		type: String,
		isRequired: true
	},
	to: {
		type: String,
		isRequired: true
	},
});

module.exports = mongoose.model("Word", Word, "words");
