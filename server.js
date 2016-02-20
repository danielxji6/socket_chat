// require express and other modules
var express = require('express');
var app = express();
var htpp = require ('http').Server(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// app.set('view engine', 'hbs');

// connect to mongodb
// mongoose.connect('mongodb://localhost/socket_chat');

// require Post and User models
// var User = require('./models/user');

// HOMEPAGE ROUTE

app.get('/', function (req, res) {
  // console.log(req.user);
  res.render('index.html');
});


// listen on port 3000
app.listen(3000, function() {
  console.log('server started, port:3000');
});
