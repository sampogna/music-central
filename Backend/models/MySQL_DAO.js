function DataBaseDAO(connection) {
  this._conn = connection;
}
DataBaseDAO.prototype.ListUsuarios = function (callback) {
  this._conn.query('SELECT * FROM usuarios',
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

DataBaseDAO.prototype.ListUsuarioPorTipo = function (tipo, callback) {
  this._conn.query('SELECT * FROM usuarios\
                    WHERE Tipo = ?',tipo,
    callback)

};

DataBaseDAO.prototype.GetUserById = function (id, callback) {
  this._conn.query('SELECT * FROM usuarios\
                    WHERE Id = ?',id,
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
