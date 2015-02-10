var routes = {};

var mongoose = require('mongoose');
var Ingredient = require('../models/ingredientModel.js')
var Order = require('../models/orderModel.js')

routes.home = function(req, res){
	Ingredient.find({}).exec(function(err, allingrd) {
		res.render('ingredients',allingrd)
	});
}

routes.addIngr = function(req, res){
	data = req.body;
	ing = new Ingredient({
		name: data.ingredient,
		price: data.price
	});
	ing.save(function (err) {
		if (err) console.log('problem saving ingredient', err);
	});
}

module.exports = routes;

