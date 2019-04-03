const mongoose = require('mongoose');
const Schema = mongoose.Schema;

delete mongoose.models.user;
delete mongoose.modelSchemas.user;

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
		required: true
	}
});

const users = mongoose.model('User', userSchema);

module.exports = users;
