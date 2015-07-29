var mongoose = require('../../db');

var Vote = function () {
  
  this.model = mongoose.model('Vote');
  
};

Vote.prototype.create = function (value, pollId) {
  
  var vote = new this.model({ value: value, pollId: pollId });
  
  return vote.save();
  
};

Vote.prototype.update = function (id, comment) {
  
  var vote = new this.model({ value: value, pollId: pollId });
  
  return vote.update({ _id: id }, 
                    { comment: comment });
  
};

module.exports = Vote;