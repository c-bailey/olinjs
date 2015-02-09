var routes = {};

var mongoose = require('mongoose');
var Ingredient = require('../models/ingredientModel.js')
var Order = require('../models/orderModel.js')

routes.kitchen = function(req, res){
	Order.find({}).exec(function(err, allorder) {
		res.render('kitchen',{allorder})
	});
}

module.exports = routes;