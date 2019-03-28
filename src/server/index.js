const express = require('express');
const mongoose = require('mongoose');
const os = require('os');
const config = require('./config');
const path = require('path');

const app = express();

const calendarRouter = require('./api/calendar');
const cartRouter = require('./api/cart');
const marketplaceRouter = require('./api/marketplace');
const todoRouter = require('./api/todo');
const userRouter = require('./api/user');

mongoose.connect(config.URI, { useNewUrlParser: true, useCreateIndex: true });

app.use(express.static('dist'));

app.use('/api/user', userRouter);

app.use('/*', (req, res) => { res.sendFile(path.join(__dirname, '../../dist/index.html'))});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
