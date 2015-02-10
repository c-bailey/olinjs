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
	data = req.body;
	ing = new Ingredient({
		name: data.ingredient,
		price: data.price
	});
	ing.save(function (err) {
		if (err) {
			console.log('problem saving ingredient', err);
		}
	});
	res.end();
}

routes.outStock = function(req, res){
	console.log(req);
	data=req.body;
	console.log(data);
	//Ingredient.findOne({})
	res.end();
}

module.exports = routes;

