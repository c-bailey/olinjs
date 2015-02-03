var routes = {};

routes.kitchenGET = function(req, res) {
  console.log(req.query);
  res.end(".");
};

routes.kitchenPOST = function(req, res) {
  console.log(req.body);
  res.end(".");
};

module.exports = routes;