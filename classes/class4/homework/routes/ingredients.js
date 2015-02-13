var routes = {};

var mongoose = require('mongoose');
var Ingredient = require('../models/ingredientModel.js')
var Order = require('../models/orderModel.js')

routes.home = function(req, res){
	Ingredient.find({}).exec(function(err, allingrd) {
		res.render('ingredients',{ingr:allingrd});
	});
}

routes.addIngr = function(req, res){
	var data = req.body;
	ing = new Ingredient({
		name: data.ingredient,
		price: data.price,
		stocked: true
	});
	ing.save(function (err) {
		if (err) {
			console.log('problem saving ingredient', err);
		}
	});
	res.end();
}

routes.outStock = function(req, res){
	var data=req.body;
	var stockUp = false;
	if (data.stocked == true) {
		stockUp = false;
	} else {
		stockUp = true;
	}
	Ingredient.findByIdAndUpdate(data.id,{stocked: stockUp},null, function(err){
		if (err) {
			console.log('problem updating', err)
		}
	});
	res.end();
}

routes.edit = function(req, res){
	var data = req.body;
	Ingredient.findByIdAndUpdate(data.id,{name: data.name, price: data.price},null, function(err){
		if (err) {
			console.log('problem updating', err)
		}
	});
	res.end();
}

module.exports = routes;

