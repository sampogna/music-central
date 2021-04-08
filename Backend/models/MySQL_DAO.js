function DataBaseDAO(connection) {
  this._conn = connection;
}
DataBaseDAO.prototype.ListUsuarios = function (callback) {
  this._conn.query('SELECT * FROM usuarios where Ativo = 0',
    callback)

};


DataBaseDAO.prototype.CreateUsuario = function (data, callback) {
  delete data.Id;
  var keys = Object.keys(data);
  var names = keys.join(",");
  var values = [];
  keys.forEach(key => {
    values.push(data[key]);
  });
  this._conn.query('INSERT INTO usuarios('+names+')\
                    values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',values,
    callback)

};

DataBaseDAO.prototype.UpdateUsuario = function (data, id, callback) {
  delete data.Id;
  var strSet = "";
  var keys = Object.keys(data);
  keys.forEach(key => {
    if(strSet != ""){
      strSet+=",";
    }
    strSet+= `${key} = '${data[key]}' `;

    
  });

  this._conn.query('UPDATE usuarios\
                    SET '+ strSet+' WHERE id = ?',id,
    callback)

};

DataBaseDAO.prototype.DeleteUsuario = function (id, callback) {
  this._conn.query('UPDATE usuarios\
                  SET Ativo = 0 \
                  WHERE id = ? AND Ativo = 1',id,
    callback)

};

DataBaseDAO.prototype.UpdateSenhaUsuario = function (id, novaSenha, oldeSenha, callback) {
  this._conn.query('UPDATE usuarios\
                  SET Senha = ? \
                  WHERE id = ? AND Senha = ?',[novaSenha,id,oldeSenha],
    callback)

};

DataBaseDAO.prototype.ListUsuarioPorTipo = function (tipo, callback) {
  this._conn.query('SELECT * FROM usuarios\
                    WHERE Tipo = ? and Ativo = 1',tipo,
    callback)

};

DataBaseDAO.prototype.GetUserById = function (id, callback) {
  this._conn.query('SELECT * FROM usuarios\
                    WHERE Id = ? and Ativo = 1',id,
    callback)

};

DataBaseDAO.prototype.CheckUserExists = function (login, email, callback) {
  var opcs = ['%'+login+'%', '%'+email+'%'];
  
  this._conn.query('SELECT * FROM usuarios\
                    WHERE Login LIKE ? OR Email LIKE ? ',opcs,
    callback)

};

module.exports = function () {
  return DataBaseDAO;
}
