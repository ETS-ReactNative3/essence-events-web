const express = require('express');
const mongoose = require('mongoose');
const os = require('os');
const app = express();

const config = require('./db/config');

mongoose.connect(config.URI, { useNewUrlParser: true });

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
