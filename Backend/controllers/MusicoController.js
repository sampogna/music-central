function MusicoController() {
}

var UserMapper = require('../util/mapper');

MusicoController.prototype.Create = function (app, request, response) {

  var data = request.body;
  var map = new UserMapper(app, data);
  var isValid = map.verifyFields();
  if(!isValid.Success) return response.status(200).json({errors: isValid.Errors});
  var musico = map.UserToMusico(data);

  var connection = app.config.db();
  var clientMySql = new app.models.MySQL_DAO(connection);
  clientMySql.CreateUsuario(musico, function (error, result) {
    if (!error) {
      if (result.affectedRows > 0) {
        response.status(200).json({result: "Músico criado com sucesso!"});
      } else {
        response.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      console.log("error Musico Create", error);
      var res = new Object();
      res.error = error;
      response.status(400).json(res);
    }
  });

}

MusicoController.prototype.List = function (app, request, response) {

  var connection = app.config.db();
  var clientMySql = new app.models.MySQL_DAO(connection);
  clientMySql.ListUsuarioPorTipo(app.locals.tiposUsuarios.Musico, function (error, result) {
    if (!error) {
      if (result.length > 0) {
        var mapper = new UserMapper(app, null);
        response.status(200).json(result.map(v=> v = mapper.convertBack(v)));
      } else {
        response.status(500).json({ error: "Não há usuários nessa categoria" });
      }
    } else {
      var res = new Object();
      res.error = error;
      response.status(400).json(res);
    }
  });

}

MusicoController.prototype.Update = function (app, request, response) {

  var data = request.body;
  data.Tipo = app.locals.tiposUsuarios.Musico;
  var map = new UserMapper(app, data);
  var isValid = map.verifyFields();
  if(!isValid.Success) response.status(200).json({errors: isValid.Errors});
  var musico = map.UserToMusico(data);

  //
  var connection = app.config.db();
  var clientMySql = new app.models.MySQL_DAO(connection);
  //


  clientMySql.GetUserById(musico.Id, function (error, result) {
    if (!error) {
      if (result.length == 1) {
        var user = result[0];
        user = map.convertBack(user);
        user = map.convertAsInserting(user);
        var check = map.verifyFieldsUpdate(user,musico);
        if(check.Success){
          var dataUpdated = map.checkUpdateDiff(user,musico);
          if(Object.keys(dataUpdated).length >0)
          {
            clientMySql.UpdateUsuario(dataUpdated, musico.Id, function (error, result) {
              if (!error) {
                if (result.affectedRows > 0) {
                  response.status(200).json({result: "Músico atualizado com sucesso!"});
                } else {
                  response.status(500).json({ error: "Internal Server Error" });
                }
              } else {
                var res = new Object();
                res.error = error;
                response.status(400).json(res);
              }
            });
          }
          else
          {
            response.status(500).json({ error: "Nenhum dado atualizado" });
          }

          

        }
       
      } else {
        response.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      var res = new Object();
      res.error = error;
      response.status(400).json(res);
    }
  });

}

MusicoController.prototype.Delete = function (app, request, response) {
  var userId = request.params.userId;
  var connection = app.config.db();
  var clientMySql = new app.models.MySQL_DAO(connection);
  clientMySql.DeleteUsuario(userId, function (error, result) {
    if (!error) {
      if (result.affectedRows > 0) {
        response.status(200).json({result: "Músico excluído com sucesso!"});
      } else {
        response.status(500).json({ error: "Usuário não encontrado." });
      }
    } else {
      var res = new Object();
      res.error = error;
      response.status(400).json(res);
    }
  });

}

MusicoController.prototype.Get = function (app, request, response) {
  var userId = request.params.userId;
  var connection = app.config.db();
  var clientMySql = new app.models.MySQL_DAO(connection);
  clientMySql.GetUserById(userId, function (error, result) {
    if (!error) {
      if (result.length > 0) {
        var mapper = new UserMapper(app, null);
        response.status(200).json(mapper.convertBack(result[0]));
      } else {
        response.status(500).json({ error: "Usuário não encontrado." });
      }
    } else {
      var res = new Object();
      res.error = error;
      response.status(400).json(res);
    }
  });

}


module.exports = new MusicoController();

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