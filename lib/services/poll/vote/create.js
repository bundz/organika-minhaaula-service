var express = require('express'),
    app = express(),
    Vote = require('../../../models/vote'),
    Poll = require('../../../models/poll');

app.post('/:hash/vote', function (req, res) {
  
  console.log(req.body);
  var vote = new Vote();
  var poll = new Poll();
  
  var createVote = function (poll) {
    
    var comment = req.body.comment ? req.body.comment : "";

    return vote.create(req.body.value, poll._id, comment);
    
  };
  
  var success = function (vote, number) {
    
    res.sendStatus(200);
    
  };
  
  var fail = function (err) {
    res.status(400).send(err);
  };
  

  if (req.body.hasOwnProperty('value')) {
    

    console.log(req.params.hash);


    poll.model.findOne({ hash: req.params.hash })
      .then(createVote, fail)
      .then(success, fail);
    
    
  } else {
    res.status(400).send({error: true, message: "Missing attributes."});
  }
  
});

module.exports = app;