//module requires
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//local requires
var index = require('./routes/index');

var app = express();

//connect to database
var mongoURI = process.env.MONGOURI || "mongodb://localhost/test";
mongoose.connect(mongoURI);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//all pages
app.get('/', index.home);
app.get('/logIn', index.logIn);
app.post('/logUser', index.logUser);
app.post('/logOut', index.logOut);
app.post('/addTwot', index.addTwot);
app.post('/delTwot', index.delTwot);

app.listen(3000)