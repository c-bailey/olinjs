var mongoose = require('mongoose');

var ingredientSchema = mongoose.Schema({
	name: String,
	price: Number,
	stocked: Boolean
});

module.exports = mongoose.model("Ingredient", ingredientSchema);