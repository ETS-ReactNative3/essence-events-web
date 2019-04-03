const todoModel = require('../db/todo');
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('./config');
const router = express.Router();

// create a todo
function create(req, res, next) {
  // response = { created: bool, todoId: str }

  console.log('TODO - CREATE');

  jwt.verify(req.body.token, config.secret, (err, decoded) => {

    // if err, send 403
    if (err) return res.status(403).send({created: false, todoId: null});

    // create the tood item
    todoModel.create({
        email: decoded.id,
        name: req.body.name,
        completed: false
      },

      // add callback
      function(err, todo) {
        // if there is an error, throw the error
        if (err) {
          console.error(err);
          return res.status(500).send({created: false, todoId: null});
        }

        // otherwise send the todoId
        res.status(200).send({ created: true, id: todo._id })
      });
  });
}

// fetch a users todos
function fetch(req, res, next) {
  // response = { todos: [{ todoId: str, email: str, name: str, completed: bool }, ... ] }

  console.log('TODO - FETCH');

  jwt.verify(req.body.token, config.secret, (err, decoded) => {

    // if err, send 403
    if (err) {
      console.error(err);
      return res.status(403).send({created: false, todoId: null});
    }

    // find the documents in the todo model
    todoModel.find({
        email: decoded.id
      },

      // add callback
      function(err, todos) {

        // if there is an error, throw the error
        if (err) return res.status(500).send({auth: false});

        let finalTodos = {};

        for (let todo of todos) {
          finalTodos[todo._id] = todo;
        }

        // otherwise send the todoId
        res.status(200).send({ todos: finalTodos, auth: true })
      });
  });
}


// create a user
function update(req, res, next) {
  // response = { updated: bool, todoId: str }

  console.log('TODO - UPDATE');

  jwt.verify(req.body.token, config.secret, (err, decoded) => {

    // if err, send 403
    if (err) return res.status(403).send({created: false, todoId: null});

    // find the documents in the todo model
    todoModel.updateOne({
        email: decoded.id,
      },
      { $set: { name: req.body.name, completed: req.body.completed } }
      ,
      // add callback
      function(err, todos) {

        // if there is an error, throw the error
        if (err) return res.status(500).send({auth: false});

        // otherwise send the todoId
        res.status(200).send({ auth: true })
      });
  });
}

function remove(req, res, next) {
  // response = { updated: bool, todoId: str }

  console.log('TODO - DELETE');

  jwt.verify(req.body.token, config.secret, (err, decoded) => {

    // if err, send 403
    if (err) return res.status(403).send({created: false, todoId: null});

    // find the documents in the todo model
    todoModel.deleteOne({
        email: decoded.id,
        _id: req.body.id
      },
      // add callback
      function(err, todos) {

        // if there is an error, throw the error
        if (err) {
          console.error(err);
          return res.status(500).send({auth: false}); }

        // otherwise send the todoId
        res.status(200).send({ auth: true })
      });
  });
}

router.post('/create', create);
router.post('/fetch', fetch);
router.patch('/update', update);
router.delete('/remove', remove);

module.exports = router;
