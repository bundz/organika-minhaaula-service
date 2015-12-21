require('../db/schemas');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, admin, player");
  res.header("Acess-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS");
  next();
});


app.use(bodyParser.json());

app.use('/poll', require("./services/poll/create"));

//app.post('/poll', require("./services/poll/create"));
//app.push('/poll/:id', require("./lib/poll/update"));
//app.delete('/poll/:id', require("./lib/poll/delete"));
app.use('/poll', require("./services/poll/get"));
//
//
app.use('/poll', require("./services/poll/vote/create"));
app.use('/poll', require("./services/poll/vote/get"));
//app.push('/poll/:id/vote/:id', require("./lib/poll/vote/update"));


module.exports = app;
