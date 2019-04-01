const mongoose = require('mongoose');
const todoModel = require('../db/todo');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

// create a todo
function create(req, res, next) {
  // TODO: add complete todo functionality by todoId
  // response = { created: bool, todoId: str }
  todoModel.create({
    email: req.body.email,
    name: req.body.name,
    completed: false
  },
  function(err, todo) {
    if (err) return res.status(500).send("There was an error when creating the list.");
    res.status(200).send({ created: true })
  });

}

// fetch a users todos
function fetch(req, res, next) {
  // TODO: add fetch todo for a particular user by email
  // response = { todos: [{ todoId: str, email: str, name: str, completed: bool }, ... ] }
  todoModel.findOne({ email: req.body.email }, function(err, todo) {
    if (err) return res.status(500).send('Server Error.');
    if (!todo) return res.status(404).send('No item found.');
    res.status(200).send(todo.name)
  });
}


// create a user
function update(req, res, next) {
  // TODO: add functionality to update a todo by todoId
  // response = { updated: bool, todoId: str }
  todoModel.findOne({ _id: req.body.id }, function(err, todo) {
    if (err) return res.status(500).send('Server Error.');
    if (!todo) return res.status(404).send('No item found.');
    todo.completed = req.body.completed;
    res.status(200).send({ updated: true });
  });

}

module.exports = router;
