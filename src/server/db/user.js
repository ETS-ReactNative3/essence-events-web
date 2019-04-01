const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	name : {
		type: String,
	},
	verified: {
		type: Boolean,
		default: false
	}
});

let model;
try {
	model = mongoose.model('User');
} catch (e) {
	model = mongoose.model('User', userSchema);
}

module.exports = model;
