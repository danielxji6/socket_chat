// require express and other modules
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// app.set('view engine', 'hbs');

// connect to mongodb
// mongoose.connect('mongodb://localhost/socket_chat');

// require Post and User models
// var User = require('./models/user');

// HOMEPAGE ROUTE

app.get('/', function (req, res) {
  // console.log(req.user);
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user up');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


// listen on port 3000
http.listen(3000, function() {
  console.log('server started, port:3000');
});
