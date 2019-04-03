const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({

	email: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: true
	}
});

module.exports = mongoose.model('Todo', todoSchema);
