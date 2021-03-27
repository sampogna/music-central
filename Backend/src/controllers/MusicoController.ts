import UserMusico from "../entities/UserMusico";
import ErrorHandler from "../models/ErrorHandler";
import db from "../config/db";
import MySQL_DAO from "../DAOs/MySQL_DAO";

class MusicoController {
    async defaultMethod() {
     
      
      return new UserMusico("testeInd", "teste@gmail", "123", "jacs");
    };

    async list() {
      var DB = new db();
      var connection = await DB.connect();
	    var clientMySql = new MySQL_DAO(connection);

      var res = await clientMySql.ListUsuarios();
      return res;
    }

  }
  
  export = new MusicoController();