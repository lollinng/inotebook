const mongoose = require("mongoose");
const { Schema } = mongoose;

// Creating a user schema or collection
const NoteSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
		unique: true,
	},
	tag: {
		type: String,
		default: "General",
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("user", NoteSchema);
