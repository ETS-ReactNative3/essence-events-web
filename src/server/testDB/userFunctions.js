const config = require('../config.js');
const bcrypt = require('bcryptjs');

const User = db.User;

module.exports = {
	authenticate,
	getAll,
	create,
	update,
	delete: _delete
};

async function authenticate({email, password}) {
	const user = await User.findOne({email});
	if (user && bcrypt.compareSync(password, user.hash)) {
		const { hash, ...userWithoutHash } = user.toObject();
		return {
			...userWithoutHash
		};
	}
}

async function profile(id) {
	return await User.findById(id).select('-hash');
}

async function create(userParam) {
	if (await User.findOne({ email: userParam.email })) {
		throw userParam.email + 'already has an account, try loggin in';
	}

	const user = new User(userParam);

	if (userParam.password) {
		user.hash = bcrypt.hashSync(userParam.password, 10);
	}

	await user.save();
}