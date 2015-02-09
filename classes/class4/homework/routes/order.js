var routes = {};

var mongoose = require('mongoose');
var Ingredient = require('../models/ingredientModel.js')
var Order = require('../models/orderModel.js')

routes.order = function(req, res){
	Ingredient.find({}).exec(function(err, allingrd) {
		res.render('order',{allingrd})
	});
}

module.exports = routes;