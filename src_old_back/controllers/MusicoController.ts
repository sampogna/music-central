import UserMusico from "../entities/UserMusico";
import ErrorHandler from "../models/ErrorHandler";
import db from "../config/db";
import MySQL_DAO from "../DAOs/MySQL_DAO";
import { NextFunction, Request, Response } from "express";
import Endereco from "../models/Endereco";
import Social from "../models/Social";
var md5 = require('md5.js');

/* 
PATTERN
var DB = new db();
var connection = await DB.connect();
var clientMySql = new MySQL_DAO(connection);
var ret = await clientMySql.ListUsuarios();
res.status(200).json(ret);
*/

class MusicoController {
  //Remover
  async defaultMethod() {
    return new UserMusico("testeInd", "teste@gmail", "123", "jacs");
  }

  async list(req: Request, res: Response) {
    var DB = new db();
    var connection = await DB.connect();
    var clientMySql = new MySQL_DAO(connection);
    var ret = await clientMySql.ListUsuarios();
    res.status(200).json(ret);
  }

  async create(req: Request, res: Response) {
    var data = req.body;

    var DB = new db();
    var connection = await DB.connect();
    var clientMySql = new MySQL_DAO(connection);
    var getUser = await clientMySql.GetUsuarioByEmailOrUser(data.Email, data.Login);    

    var teste = "";
    if(getUser.length == 0){
      var md5Pass = new md5().update(data.Senha).digest('hex');
      var ret = await clientMySql.CriarUsuario(data.Nome, data.Email, md5Pass, data.Login, data.Descricao, data.DataNascimento, data.Status, data.Tipo);
      var createid = ret.insertId;
      if(data.Endereco){
        var enderecoObj:Endereco = new Endereco(createid,data.Endereco.UF,data.Endereco.Estado, data.Endereco.Cidade);
        var retEndereco = await clientMySql.SetEndereco(enderecoObj);
      }
      if(data.RedesSociais)
      {
        
        data.RedesSociais.forEach(async (social:any) => {
          var temp:Social = new Social(createid, social.nome, social.link);
          var retsocial = await clientMySql.SetSocial(temp);
        });
        
      }
      res.status(200).json({ result: "Ok" });
    }
    else
    {
      var errorRet = new ErrorHandler();
      errorRet.message = "Email ou nome de usuário já existente";
      res.status(400).json(errorRet);
    }  
  }
}

export = new MusicoController();
