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
var ingredients = require('./routes/ingredients.js');
var kitchen = require('./routes/kitchen.js');
var order = require('./routes/order.js');

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

app.get('/ingredients', ingredients.home);
app.post('/outStock', ingredients.outStock);
app.post('/addIngr', ingredients.addIngr);
app.post('editIngr', ingredients.edit);

app.get('/order', order.home);
app.post('/submitOrder', order.submitOrder);

app.get('/kitchen', kitchen.home);
app.post('/doneOrder', kitchen.doneOrder);

app.listen(3000)