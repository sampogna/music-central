var UserMapper = require('../util/mapper');

module.exports.CreateUser = function (app, request, response) {

  var data = request.body;
  var map = new UserMapper(app);
  var isValid = map.verifyFields(data);
  if(!isValid.Success) response.status(200).json({errors: isValid.Errors});
  var musico = map.UserToMusico(data);
  var banda = map.UserToBanda(data);
  var industria = map.UserToIndustria(data);
  response.status(200).json({"musico":musico, "banda":banda, "industria":industria});
  

  // var connection = app.config.db();
  // var clientMySql = new app.models.MySQL_DAO(connection);
  // clientMySql.ListUsuarios(function (error, result) {
  //   if (!error) {
  //     if (result.length > 0) {
  //       response.status(200).json(result);
  //     } else {
  //       response.status(500).json({ error: "Internal Server Error" });
  //     }
  //   } else {
  //     var res = new Object();
  //     res.error = error;
  //     response.status(400).json(res);
  //   }
  // });

}

/*
MODELO?

connection.beginTransaction(function(err) {
  if (err) { throw err; }
  connection.query('INSERT INTO posts SET title=?', title, function (error, results, fields) {
    if (error) {
      return connection.rollback(function() {
        throw error;
      });
    }

    var log = 'Post ' + results.insertId + ' added';

    connection.query('INSERT INTO log SET data=?', log, function (error, results, fields) {
      if (error) {
        return connection.rollback(function() {
          throw error;
        });
      }
      connection.commit(function(err) {
        if (err) {
          return connection.rollback(function() {
            throw err;
          });
        }
        console.log('success!');
      });
    });
  });
});
*/