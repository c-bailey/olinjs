var routes = {};

var mongoose = require('mongoose');
var Ingredient = require('../models/ingredientModel.js')
var Order = require('../models/orderModel.js')

routes.home = function(req, res){
	Order.find({}).exec(function(err, allorder) {
		res.render('kitchen',{order:allorder});
	});
}

routes.done = function(req, res){
	res.end();
}

module.exports = routes;