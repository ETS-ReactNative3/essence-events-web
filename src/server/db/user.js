const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require(bcrypt);
var SALT = 10;

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

//export default mongoose.model('User', userSchema);

userSchema.pre('save', function(next) { 
	var user = this;

if (!user.isModified('password')) return next();

bcrypt.genSalt(SALT, function(err, salt) {
	if (err) return next(err);

	bcrypt.hash(user.password, salt, function(err, hash) {
		if (err) return next(err);

		user.password = hash;
		next();
	});
});

});

userSchema.methods.comparePassword = function(canPassword, cb) {
	bcrypt.compare(canPassword, this.password, function(err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

module.exports = mongoose.model(User, userSchema);

