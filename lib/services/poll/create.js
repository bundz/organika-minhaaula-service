var express = require('express'),
    app = express(),
    Poll = require('../../models/poll');


app.post('/', function (req, res) {
  
  var poll = new Poll();
  
  var success = function (poll, number) {
    
    res.sendStatus(200);
    
  };
  
  var fail = function (err) {
    res.status(400).send(err);
  }
  
  if (req.body.name && req.body.hash && req.body.description && req.body.owner) {
    poll.create(req.body.name, req.body.hash, req.body.description, req.body.owner).then(success, fail);
  } else {
    res.status(400).send({error: true, message: "Missing attributes."});
  }
  
});

module.exports = app;