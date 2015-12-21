var express = require('express'),
    app = express(),
    Vote = require('../../../models/vote'),
    Poll = require('../../../models/poll');

app.get('/:hash/vote', function (req, res) {
  
  var vote = new Vote();
  var poll = new Poll();

  var result;
  
  var getVotes = function (poll) {
    
  	result = poll;

  	console.log(poll);

    return vote.model.find({pollId: poll._id});
    
  };
  
  var success = function (votes, number) {
    
  	result.votes = votes;

    res.send(votes);
    
  };
  
  var fail = function (err) {
    res.status(400).send(err);
  };
  



  poll.model.findOne({ hash: req.params.hash })
     .then(getVotes, fail)
     .then(success, fail);
    
  
});

module.exports = app;