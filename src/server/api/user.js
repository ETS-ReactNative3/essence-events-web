const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('./config');
const userModel = require('../db/user');

// log in a user
function login(req, res, next) {

  // find the user by email
  userModel.findOne({ email: req.body.email }, function (err, user) {

    // check for issues
    if (err) return res.status(500).send({ auth: false, token: null, message: 'There was an internal server error.' });
    if (!user) return res.status(403).send({ auth: false, token: null, message: 'No account with this email was found.' });

    // determine if the password is valid
    var passwordIsValid = bcrypt.compareSync(req.body.password, user._doc.password );

    // if the password is wrong, send a 401
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null, message: 'The provided password is incorrect.' });

    // get a token based on the users email
    var token = jwt.sign({ id: user._doc.email }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    // send a 200 status with the token
    res.status(200).send({ auth: true, token: token });
  });
}

// create a user
function create(req, res, next) {
  // TODO: add user create account functionality
  // response = { created: bool, authToken: str }

  // hash the password given by the user
  bcrypt.hash(req.body.password, 10, function(err, hash) {

    // if an error occurred, send a 500
    if (err) return res.status(500).send({auth: false, message: "There was an error when registering the user."});

    // create the user model with the password
    let user = new userModel({
        name : req.body.name,
        email : req.body.email,
        password: hash
      });

    user.save(function (err, user) {

      // if there is an error, send a 500
      if (err) return res.status(500).send( {auth: false, message: "There was an error when registering the user."});


      // create a token
      let token = jwt.sign({ id: user._doc.email }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });

      // send a 200 with an auth token if everything was successful
      res.status(200).send({ auth: true, token: token });
    });
  }); 
}


function changePassword(req, res, next) {

  console.log('USER - CHANGE PASSWORD');

  jwt.verify(req.body.token, config.secret, (err, decoded) => {

    // if err, send 403
    if (err) return res.status(403).send({created: false});

    userModel.updateOne({ email: decoded.id }, { $set: {password: bcrypt.hashSync(req.body.password, 10) } },
      function (err, update) {

      if (err) return res.status(500).send({ created: false, message: err });

      res.status(200).send({ changed: true });

    });


  });
}

function changeName(req, res, next) {

  console.log("USER - CHANGE NAME");

  jwt.verify(req.body.token, config.secret, (err, decoded) => {

    // if err, send 403
    if (err) return res.status(403).send({created: false});

    userModel.updateOne({ email: decoded.id }, {$set: { name: req.body.name } },
      function (err, name) {
        if (err) return  res.status(500).send({ created: false, message: err });

        res.status(200).send({ changed: true });
      })
  });
}

function fetch(req, res, next) {

  console.log("USER - FETCH");

  jwt.verify(req.body.token, config.secret, (err, decoded) => {

    // if err, send 403
    if (err) return res.status(403).send({created: false});

    userModel.findOne({ email: decoded.id },
      function (err, name) {
        if (err) return res.status(500).send({ created: false, message: err });
        res.status(200).send({ found: true, name: name.name });
      })
  });

}


router.post('/create', create);
router.post('/login', login);
router.post('/password', changePassword);
router.post('/name', changeName);
router.post('/fetch', fetch);

module.exports = router;
