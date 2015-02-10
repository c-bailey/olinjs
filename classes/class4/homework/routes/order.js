var routes = {};

var mongoose = require('mongoose');
var Ingredient = require('../models/ingredientModel.js')
var Order = require('../models/orderModel.js')

routes.home = function(req, res){
	Ingredient.find({}).exec(function(err, allingrd) {
		res.render('order',{ingrds:allingrd});
	});
}

routes.submitOrder = function(req, res){
	var data=req.body;
	var chosenIngr=[];
	for (key in data) {
		if (data[key] == 'on') {
			chosenIngr.push(key);
		}
	};
	console.log(chosenIngr);
	ord = new Order({
		customer: data.name,
		ingredients: chosenIngr,
		cost: 0
	})
	ord.save(function (err) {
		if (err) {
			console.log('problem saving order', err);
		}
	});
	res.render('')
}

module.exports = routes;