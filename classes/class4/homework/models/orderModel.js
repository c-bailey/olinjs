var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
	customer = String,
	ingredients = [Object],
	cost = Number
});

module.exports = mongoose.model("Order", orderSchema);