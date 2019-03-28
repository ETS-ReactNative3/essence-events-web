const mongoose = require('mongoose');
const marketplaceModel = require('../db/marketplace');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

// create a todo
function create(req, res, next) {
  // TODO: add complete todo functionality by todoId
  // response = { created: bool, todoId: str }


  return res.send(req.body);
}

// fetch a users todos
function fetch(req, res, next) {
  // TODO: add fetch todo for a particular user by email
  // response = { todos: [{ todoId: str, email: str, name: str, completed: bool }, ... ] }


  return res.send(req.body);
}

// complete a todo
function complete(req, res, next) {
  // TODO: add functionality to complete a todo by todoId
  // response = { completed: bool, todoId: str }


  return res.send(req.body);
}

// create a user
function update(req, res, next) {
  // TODO: add functionality to update a todo by todoId
  // response = { updated: bool, todoId: str }


  return res.send(req.body);
}

module.exports = router;
