const route_prefix = '/api/banda/';
const _controller = require("../controllers/BandaController")

module.exports = function(app){
	app.post(route_prefix+"create", function(req, res) {
		_controller.Create(app,req, res);
	});

	app.post(route_prefix+"update", function(req, res) {
		_controller.Update(app,req, res);
	});

	app.post(route_prefix+"password/:userId", function(req, res) {
		_controller.ChangePassword(app,req, res);
	});

	//////////////////////////////////////////////////////

	app.get(route_prefix+"list", function(req, res) {
		_controller.List(app,req, res);
	});
	app.get(route_prefix+":userId", function(req, res) {
		_controller.Get(app,req, res);
	});


	//////////////////////////////////////////////////////
	

	app.delete(route_prefix+"delete/:userId", function(req, res) {
		_controller.Delete(app,req, res);
	});


}