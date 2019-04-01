var express = require('express');
var app = express();
var db = require('./db');
var fs = require('fs');
var path = require("path");

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

var UserController = require('./user/UserController');
app.use('/users', UserController);

var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

app.use('/*', (req, res) => { res.sendFile(path.join(__dirname, '../../../dist/index.html'))});

/*app.get('/home', function(req, res) {
	res.render(path.join(__dirname, '../../client/index.js'));
});*/

module.exports = app;