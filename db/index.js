var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/minhaaula');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoose;