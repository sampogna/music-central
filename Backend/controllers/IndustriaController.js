var MD5 = require('md5.js')

function IndustriaController() {
}

var UserMapper = require('../util/mapper');

IndustriaController.prototype.Create = function (app, request, response) {

  var data = request.body;
  console.log("data", data)
  var map = new UserMapper(app, data);
  var isValid = map.verifyFields();
  if(!isValid.Success) return response.status(201).json({errors: isValid.Errors});
  var industria = map.UserToIndustria(data);

  industria.Senha = new MD5().update(industria.Senha).digest('hex');
  var connection = app.config.db();
  var clientMySql = new app.models.MySQL_DAO(connection);
  clientMySql.CreateUsuario(industria, function (error, result) {
    if (!error) {
      if (result.affectedRows > 0) {
        response.status(200).json({result: "Indústria criada com sucesso!"});
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

IndustriaController.prototype.List = function (app, request, response) {

  var connection = app.config.db();
  var clientMySql = new app.models.MySQL_DAO(connection);
  clientMySql.ListUsuarioPorTipo(app.locals.tiposUsuarios.Industria, function (error, result) {
    if (!error) {
      if (result.length > 0) {
        var mapper = new UserMapper(app, null);
        response.status(200).json(result);
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

IndustriaController.prototype.Update = function (app, request, response) {
  try{
      var data = request.body;
      data.Tipo = app.locals.tiposUsuarios.Musico;
      console.log(data);
      var map = new UserMapper(app, data);
      var isValid = map.verifyFields();
      if(!isValid.Success) return response.status(200).json({errors: isValid.Errors});

      //
      var connection = app.config.db();
      var clientMySql = new app.models.MySQL_DAO(connection);
      //

      clientMySql.GetUserById(data.Id, function (error, result) {
        if (!error) {
          if (result.length == 1) {
            var user = result[0];
            var updateObj = map.teste3(user, data);
            if(Object.keys(updateObj).length>0)
            {
              clientMySql.UpdateUsuario(updateObj, user.Id, function (error, result) {
                if (!error) {
                  if (result.affectedRows > 0) {
                    response.status(200).json({result: "Indústria atualizada com sucesso!"});
                  } else {
                    response.status(500).json({ error: "Internal Server Error" });
                  }
                } else {
                  var res = new Object();
                  res.error = error;
                  console.log(error);
                  response.status(400).json(res);
                }
              });

            }
            else {
              response.status(201).json({ result: "Não há nada a ser atualizado. Dados completamente iguais." });
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
    catch(e){
      console.log(e);
    }
      

  }

IndustriaController.prototype.ChangePassword = function (app, request, response) {
  var userId = request.params.userId;
  var newPass = request.body.newPass;
  var newPassConfirm = request.body.newPassConfirm;
  if(newPass != newPassConfirm) return response.status(201).json({errors: "Senhas e Confirmação de Senha não coincidem."});
  var oldPass = request.body.oldPass;
  var oldPassMD5 = new MD5().update(oldPass).digest('hex');
  

  var connection = app.config.db();
  var clientMySql = new app.models.MySQL_DAO(connection);
  clientMySql.GetUserById(userId, function (error, result) {
    if (!error) {
      if (result.length == 1) {
        var actual = result[0].Senha;
        if(actual != oldPassMD5) return response.status(201).json({errors: "Senhas atual incorreta."});
        var newPassMD5 = new MD5().update(newPass).digest('hex');
        clientMySql.UpdateSenhaUsuario(userId, newPassMD5,oldPassMD5,  function (error, result) {
          if (!error) {
            if (result.affectedRows == 1) {
              response.status(200).json({result:"Senha do usuário alterada com sucesso!!"});
            } else {
              response.status(500).json({ error: "Usuário não encontrado." });
            }
          } else {
            var res = new Object();
            res.error = error;
            console.log(error);
            response.status(400).json(res);
          }
        });
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

IndustriaController.prototype.Delete = function (app, request, response) {
  var userId = request.params.userId;
  var connection = app.config.db();
  var clientMySql = new app.models.MySQL_DAO(connection);
  clientMySql.DeleteUsuario(userId, app.locals.tiposUsuarios.Industria, function (error, result) {
    if (!error) {
      if (result.affectedRows == 1) {
        response.status(200).json({result:"Usuário excluído com sucesso!"});
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

IndustriaController.prototype.Get = function (app, request, response) {
  var userId = request.params.userId;
  var connection = app.config.db();
  var clientMySql = new app.models.MySQL_DAO(connection);
  clientMySql.GetUserById(userId, function (error, result) {
    if (!error) {
      if (result.length > 0) {
            console.log(result[0]);
            var mapper = new UserMapper(app, null);
            result[0].Endereco = result[0].Endereco !=null? mapper.fromBlob(result[0].Endereco) : null;
            console.log(result[0]);
            response.status(200).json(result[0]);
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


module.exports = new IndustriaController();