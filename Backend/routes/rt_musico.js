const route_prefix = '/musico/';

module.exports = function(app){
    app.get(route_prefix, function(req, res) {
		app.controllers.MusicoController.Teste(app,req, res);
	});


}