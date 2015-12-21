var mongoose = require('../../db');

var Poll = function () {
  
  this.model = mongoose.model('Poll', this.schema);
  
};

Poll.prototype.create = function (name, hash, description, owner) {
  
  var poll = new this.model({ name: name, hash: hash, description: description, owner: owner });
  
  return poll.save();
  
};

Poll.prototype.get = function (hash) {
  
  return this.model.findOne({hash: hash});
  
};


module.exports = Poll;