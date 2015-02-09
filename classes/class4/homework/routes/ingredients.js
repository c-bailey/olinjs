var routes = {};

var mongoose = require('mongoose');
var Ingredient = require('../models/ingredientModel.js')
var Order = require('../models/orderModel.js')

routes.ingredient = function(req, res){
	Ingredient.find({}).exec(function(err, allingrd) {
		res.render('ingredients',{allingrd})
	});
}

module.exports = routes;

