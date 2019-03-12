const express = require('express');
const router = express.Router();
const userService = require('./userFunctions');

router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/profile', profile);

module.exports = router;

function authenticate(req, res, next) {
	userService.authenticate(req.body)
		.then(user => user ? res.json(user) : res.status(400).json({ message: 'Email or password is incorrect' }))
		.catch(err => next(err));
}

function register(req, res, next) {
	userService.create(req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
}

function profile(req, res, next) {
	userService.getById(req.user.sub)
		.then(user => ? res.json(user) : res.sendStatus(404))
		.catch(err => next(err));
}