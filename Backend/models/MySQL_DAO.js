function DataBaseDAO(connection) {
  this._conn = connection;
}
DataBaseDAO.prototype.ListUsuarios = function(callback){
	this._conn.query('SELECT * from usuarios',
							callback)
            
};


module.exports= function(){
  return DataBaseDAO;
}
