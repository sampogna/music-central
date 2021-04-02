const route_prefix = '/banda/';

module.exports = function(app){

	
    app.get(route_prefix, function(req, res) {
		console.log("app", Object.keys(app));
		app.controllers.BandaController.Teste(app,req, res);
	});


}