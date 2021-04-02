const route_prefix = '/industria/';

module.exports = function(app){


    app.get(route_prefix, function(req, res) {
		app.controllers.IndustriaController.Teste(app,req, res);
	});


}