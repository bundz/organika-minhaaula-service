var mongoose = require('../index'),
    vote = require('./vote'),
    poll = require('./poll');

var Schema = mongoose.Schema;

mongoose.model('Vote', vote);
mongoose.model('Poll', poll);