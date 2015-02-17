var routes = {};

var mongoose = require('mongoose');
var Twot = require('../models/twotModel.js')
var User = require('../models/userModel.js')

routes.home = function(req, res){
	Twot.find({}).exec(function(err, alltwot) {
		User.find({}).exec(function(err, allusers) {
			var qu = User.where({logged: true});
			qu.findOne(function (err, mU) {
				if (err) return handleError(err);
				if (!mU) {
					res.render('home',{mainUser:'Anonymous',twot:alltwot,logVal:'Log In',user:allusers});
				} else {
					res.render('home',{mainUser:mU,twot:alltwot,logVal:'Log Out',user:allusers});
				}
			});
		});
	});
}

routes.logIn = function(req, res){
	res.render('login');
}

routes.logOut = function(req, res){
	var query = User.where({logged: true});
	query.findOne(function (err, user) {
		if (err) return handleError(err);
		if (user) {
			user.logged = false;
		}
	});
	res.render('login');
}

routes.addTwot = function(req, res){
	var data = req.body;
	var query = User.where({logged: true});
	query.findOne(function (err, us) {
		if (err) return handleError(err);
		if (us) {
			twit = new Twot({
				message: data.message,
				author: us.username
			});
			twit.save(function (err) {
				if (err) {
					console.log('problem saving twot', err);
				}
			});
		}
	});
	
	res.end();
}

routes.logUser = function(req, res){
	var data = req.body;
	var query  = User.where({ username: data.username});
	query.findOne(function (err, user) {
		if (err) return handleError(err);
		if (user) {
		  user.logged = true;
		} else {
			us = new User({
			username: data.username,
			logged: true
		});
		us.save(function (err) {
			if (err) {
				console.log('problem saving new user', err);
			}
		});
		}
	});
}


module.exports = routes;

