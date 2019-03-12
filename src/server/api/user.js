const mongoose = require('mongoose');
const userModel = require('../db/user');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

// log in a user
function logIn(req, res, next) {
  return res.send(req.body);
}


function createAccount(req, res, next) {
  return res.send(req.body);
}

router.post('/create', createAccount);
router.post('/login', logIn);

module.exports = router;
