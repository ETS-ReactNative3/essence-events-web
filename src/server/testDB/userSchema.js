var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

	email: {
		type: String,
		unique: true,
		required: true
	}, 

	hashed_password: {
		type: String,
		required: true
	},

	firstName: { 
		type: String,
		required: true
	},

	lastName: {
		type: String,
		required: true
	}
});

exports.User = mongoose.model('User', userSchema);