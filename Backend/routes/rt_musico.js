const route_prefix = '/api/musico/';
const _controller = require("../controllers/MusicoController")

module.exports = function(app){

	app.post(route_prefix+"create", function(req, res) {
		_controller.Create(app,req, res);
	});

	app.get(route_prefix+"list", function(req, res) {
		_controller.List(app,req, res);
	});

	
	app.post(route_prefix+"update", function(req, res) {
		_controller.Update(app,req, res);
	});

	app.delete(route_prefix+"delete/:userId", function(req, res) {
		_controller.Delete(app,req, res);
	});


}