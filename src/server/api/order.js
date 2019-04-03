const orderModel = require('../db/order');
const express = require('express');
const router = express.Router();
const config = require('./config');
const jwt = require('jsonwebtoken');


function create(req, res, next) {
  console.log('ORDER - CREATE');

  jwt.verify(req.body.token, config.secret, (err, decoded) => {

    if (err) return res.status(403).send({ auth: false });

    orderModel.create({ items: req.body.items, email: decoded.id },

      // callback function
      function (err, todo) {
        if (err) {
          console.error(err);
          res.status(500).send({ created: false });
        }

        res.status(200).send({ created: true });

    });

  });

}


function fetch(req, res, next) {

}


function complete(req, res, next) {

}


function update(req, res, next) {

}

router.post('/create', create);

module.exports = router;
