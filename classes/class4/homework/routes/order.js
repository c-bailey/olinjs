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
	console.log(data)
	var chosenIngr=[];
	for (key in data) {
		if (data[key] == 'on') {
			Ingredient.findById(key,function(err,found){
				if (err) {
					console.log('could not find');
				} else {
					chosenIngr.push(found.name);
				}
			});
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
	res.end();
}

module.exports = routes;