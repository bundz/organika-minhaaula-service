var mongoose = require('../../db');

var Poll = function () {
  
  this.model = mongoose.model('Poll', this.schema);
  
};

Poll.prototype.create = function (name, hash) {
  
  var poll = new this.model({ name: name, hash: hash });
  
  return poll.save();
  
};

module.exports = Poll;