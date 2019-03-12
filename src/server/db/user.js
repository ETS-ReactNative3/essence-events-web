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
	}
});

export default user = mongoose.model('User', userSchema);
