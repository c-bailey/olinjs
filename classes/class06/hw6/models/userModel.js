var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
	twots: Array
});

module.exports = mongoose.model("User", userSchema);