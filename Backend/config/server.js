var bodyParser = require('body-parser');
var consign = require('consign');
var express = require('express');
var cors = require('cors');


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.locals.tiposUsuarios = {
    "Musico": "'MUSICO'",
    "Banda": "'BANDA'",
    "Industria": "'INDUSTRIA'"
};
app.locals.tiposIndustrias = {
    "Gravadora": "'GRAVADORA'",
    "Produtor": "'PRODUTOR'",
    "Holding": "'HOLDING'",
    "Local": "'LOCAL'",
    "Estudio": "'ESTUDIO'"
}

consign()
    .include('routes')
    .include('controllers')
    .include('models')
    .then('config/db.js')
    .into(app);

module.exports = app;