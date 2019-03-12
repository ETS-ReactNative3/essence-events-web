const express = require('express');
const mongoose = require('mongoose');
const os = require('os');
const config = require('./config');

const app = express();

mongoose.connect(config.URI, { useNewUrlParser: true });

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
