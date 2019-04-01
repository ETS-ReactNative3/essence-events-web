const mongoose = require('mongoose');
const userModel = require('../db/user');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('./config');

// log in a user
function login(req, res, next) {
  // TODO: add user log in functionality
  // response = { authorized: bool, authToken: str }
  console.log(req.body);
  userModel.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
}

// create a user
function create(req, res, next) {
  // TODO: add user create account functionality
  // response = { created: bool, authToken: str }


  return res.send(req.body);
}


// update a user
function update(req, res, next) {
  // TODO: add user update functionality
  // response = { updated: bool }


  return res.send(req.body);
}

router.post('/create', create);
router.post('/login', login);
router.post('/update', update);

module.exports = router;
