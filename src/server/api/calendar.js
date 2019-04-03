const mongoose = require('mongoose');
const calendarModel = require('../db/calendar');
const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('./config');
const router = express.Router();


function create(req, res, next) {

  console.log('CALENDAR - CREATE');

  jwt.verify(req.body.token, config.secret, (err, decoded) => {

    if (err) return res.status(403).send({ auth: false });

    // add event to calendar
    calendarModel.create({
      email: decoded.id,
      name: req.body.name,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      description: req.body.description
    },

      // call back  function
      function (err, event) {

        if (err) {
          return res.status(500).send({ created: false, message: err });
        }

        res.status(200).send({ created: true, id: event._id });
      });
  });
}

function fetch(req, res, next) {

  console.log('CALENDAR - FETCH');

  jwt.verify(req.body.token, config.secret, (err, decoded) => {

    if (err) return res.status(403).send({ auth: false });

    // add event to calendar
    calendarModel.find({
        email: decoded.id
      },

      // call back  function
      function (err, event) {

        if (err) {
          return res.status(500).send({ created: false, message: err });
        }

        res.status(200).send({ created: true, events: event });
      });

  });
}

function remove(req, res, next) {

  console.log('TODO - DELETE');

  jwt.verify(req.body.token, config.secret, (err, decoded) => {

    if (err) return res.status(403).send({ auth: false });

    calendarModel.deleteOne({

    },
      function (err, event) {

      if (err) res.status(500).send({ created: false, message: err })

        res.status(200).send({ removed: true })

      }
    )


  });
}

router.post('/create', create);
router.post('/fetch', fetch);
router.delete('/remove', remove);

module.exports = router;
