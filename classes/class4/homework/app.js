var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var ingredients = require('./routes/ingredients.js');
var kitchen = require('./routes/kitchen.js');
var order = require('./routes/order.js');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.home);

app.get('/ingredients', ingredients.ingredientsGET);
app.post('/ingredients', ingredients.ingredientsPOST);

app.get('/order', order.orderGET);
app.post('/order', order.orderPOST);

app.get('/kitchen', kitchen.kitchenGET);
app.post('/kitchen', kitchen.kitchenPOST);

app.listen(3000)