const route_prefix = '/api/musico/';
const _controller = require("../controllers/MusicoController")

module.exports = function(app){

	app.get(route_prefix+"list", function(req, res) {
		_controller.ListUsers(app,req, res);
	});

	app.post(route_prefix+"create", function(req, res) {
		_controller.CreateUser(app,req, res);
	});

	app.post(route_prefix+"update", function(req, res) {
		_controller.UpdateUser(app,req, res);
	});

	app.delete(route_prefix+"delete", function(req, res) {
		_controller.DeleteUser(app,req, res);
	});


}