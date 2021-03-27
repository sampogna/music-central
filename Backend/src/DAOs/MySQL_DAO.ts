import * as mysql from 'mysql2/promise';

export = class DataBaseDAO {
    
    public _conn:any;

    constructor(connection: any) {
        this._conn = connection;
    }

    async ListUsuarios() {

        const result = await this._conn.promise().query('SELECT * from usuarios');
        return result[0];

    };

    async Criar() {

        const result = await this._conn.promise().query('SELECT * from usuarios');
        return result[0];

    };

}
