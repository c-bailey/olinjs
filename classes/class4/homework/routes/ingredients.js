var routes = {};

routes.ingredientsGET = function(req, res) {
  console.log(req.query);
  res.end(".");
};

routes.ingredientsPOST = function(req, res) {
  console.log(req.body);
  res.end(".");
};

module.exports = routes;