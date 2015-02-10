var routes = {};

var mongoose = require('mongoose');
var Ingredient = require('../models/ingredientModel.js')
var Order = require('../models/orderModel.js')

routes.home = function(req, res){
	Order.find({}).exec(function(err, allorder) {
		res.render('kitchen',{order:allorder});
	});
}

routes.doneOrder = function(req, res){
	data = req.body;
	console.log(data);
	Order.findByIdAndRemove(data.id, null, function(err){
		if (err) {
			console.log('error removing order', err);
		}
	});
	res.end();
}

module.exports = routes;