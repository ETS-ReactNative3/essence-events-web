const mongoose = require('mongoose');
const userModel = require('../db/user');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

// log in a user
function login(req, res, next) {
  // TODO: add user log in functionality
  // response = { authorized: bool, authToken: str }


  return res.send(req.body);
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
