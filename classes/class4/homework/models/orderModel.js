var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
	customer: String,
	ingredients: Array,
	cost: Number
});

module.exports = mongoose.model("Order", orderSchema);