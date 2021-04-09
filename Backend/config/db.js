const mysql = require('mysql2');

const cfg = {
  host: 'localhost',
  user: 'dev',
  database: 'music_central2',
  password: '0000'
}

var connMysql = function(){
  if(!connMysql.instance){
      console.log("Criando conexao com MusicCloud");
      connMysql.instance = mysql.createConnection({
        host: cfg.host,
        user: cfg.user,
        database: cfg.database,
        password: cfg.password
      });
      console.log("MusicCloud Conectado!! Config: ",cfg);
  }

  return connMysql.instance;
}

module.exports = function(){
  return connMysql;
}