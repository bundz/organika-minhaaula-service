var express = require('express'),
    app = express(),
    Poll = require('../../models/poll');


app.get('/:hash', function (req, res) {
  
  var poll = new Poll();
  
  var success = function (poll) {

    res.send(poll);
    
  };
  
  var fail = function (err) {
    res.status(400).send(err);
  }
    poll.get(req.params.hash).then(success, fail);
    
});

module.exports = app;