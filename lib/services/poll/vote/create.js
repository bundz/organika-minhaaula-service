var Vote = require('../../../models/vote'),
    Poll = require('../../../models/poll');

var service = function (req, res) {
  
  var vote = new Vote();
  var poll = new Poll();
  
  var createVote = function (poll) {
    
    return vote.create(req.body.value, poll._id);
    
  };
  
  var success = function (vote, number) {
    
    res.sendStatus(200);
    
  };
  
  var fail = function (err) {
    res.status(400).send(err);
  }
  
  if (req.body.hasOwnProperty('value')) {
    
    console.log('aki');
    
    poll.model.findOne({ hash: req.params.hash })
      .then(createVote, fail)
      .then(success, fail);
    
    
  } else {
    res.status(400).send({error: true, message: "Missing attributes."});
  }
  
};

module.exports = service;