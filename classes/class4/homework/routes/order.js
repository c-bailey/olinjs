var routes = {};

routes.orderGET = function(req, res) {
  console.log(req.query);
  res.end(".");
};

routes.orderPOST = function(req, res) {
  console.log(req.body);
  res.end(".");
};

module.exports = routes;