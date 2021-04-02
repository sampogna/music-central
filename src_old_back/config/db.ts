
import mysql from 'mysql2';

export = class DB {
  public async connect() {
    var connection =  await mysql.createConnection({
        host: 'localhost',
        user: 'dev',
        database: 'music_central',
        password: '0000'
      });
    return connection;

  };

}