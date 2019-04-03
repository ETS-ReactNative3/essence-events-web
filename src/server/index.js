const express = require('express');
const mongoose = require('mongoose');
const os = require('os');
const config = require('./config');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

const calendarRouter = require('./api/calendar');
const orderRouter = require('./api/order');
const todoRouter = require('./api/todo');
const userRouter = require('./api/user');

mongoose.connect(config.URI, { useNewUrlParser: true, useCreateIndex: true });

app.use(express.static('dist'));

app.use('/api/user', userRouter);
app.use('/api/todo', todoRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/order', orderRouter);

app.use('/*', (req, res) => { res.sendFile(path.join(__dirname, '../../dist/index.html'))});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
