var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/sg');

mongoose.Promise = Promise;

module.exports.Exercise = require("./exercise")