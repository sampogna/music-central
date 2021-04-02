const route_prefix = '/musico/';

module.exports = function(app){
    app.post(route_prefix, function(req, res) {
		app.controllers.MusicoController.CreateUser(app,req, res);
	});


}