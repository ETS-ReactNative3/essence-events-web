const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({

	email: {
		type: String,
		unique: true,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean
	}
});

module.exports = mongoose.model('User', todoSchema);
