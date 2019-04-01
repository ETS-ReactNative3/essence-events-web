var mongoose = require(mongoose);
var User = require('./user');
const config = require('./config');

mongoose.connect(config.URI, function(err) {
	if (err) throw err;
	console.log("Successfully connected to mongodb");
});

var testUser = new User({
	email: "bobtest@gmail.com",
	password: "test123";
});

testUser.save(function(err) {
	if (err) throw err;
});

User.findOne({email: "bobtest@gmail.com"}, function(err, user) {
	if (err) throw err;

	user.comparePassword('test123', function(err, isMatch) {
		if (err) throw err;
		console.log('test123', isMatch);
	});

	user.comparePassword('123test', function(err, isMatch) {
		if (err) throw err;
		console.log('123test:', isMatch);
	});
});
