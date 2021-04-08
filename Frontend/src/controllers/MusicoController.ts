import UserMusico from "../entities/UserMusico";
import { NextFunction, Request, Response } from "express";
import axios from "axios";
import ErrorHandler from "../models/ErrorHandler";
import { text } from "body-parser";
import TiposUsuario from "../models/TiposUsuarios";

const base_url: string = "http://localhost:3100/api/musico/";

class MusicoController {
  async listar(req: Request, res: Response) {

    try {
      const response = await axios.get(base_url + "list");
      res.render("pages/musico", {data:response.data});
    } catch (exception) {
      res.render("pages/musico", {data:null});
      process.stderr.write(
        `ERROR received from ${base_url + "list"}: ${exception}\n`
      );
    }
  }

  async adicionar(req: Request, res: Response) {
    try {
      var dataBody = req.body;
      dataBody.Tipo = TiposUsuario.Musico;
      dataBody.DataNascimento = this.formatDate(dataBody.DataNascimento);
      const response = await axios.post(base_url + "create", req.body);
      console.log("response axios", response.data);
      res.status(response.status).json(response.data);
    } catch (exception) {
      res.status(500).json({retorno: "Algo inesperado aconteceu", mensagens: ["Internal Server Error"]});
      process.stderr.write(
        `ERROR received from ${base_url + "create"}: ${exception}\n`
      );
    }
  }

  async alterar(req: Request, res: Response) {
    try {
      console.log("req.body", req.body);
      const response = await axios.post(base_url + "update", req.body);
      console.log("response axios", response.data);
      res.status(response.status).json(response.data);
    } catch (exception) {
      res.status(500).json({retorno: "Algo inesperado aconteceu", mensagens: ["Internal Server Error"]});
      process.stderr.write(
        `ERROR received from ${base_url + "alterar"}: ${exception}\n`
      );
    }
  }

  async changePasword(req: Request, res: Response) {
    try {
      var userId = req.params.userId;
      console.log("req.body", req.body);
      const response = await axios.post(base_url + "password/"+userId, req.body);
      console.log("response axios", response.data);
      res.status(response.status).json(response.data);
    } catch (exception) {
      res.status(500).json({retorno: "Algo inesperado aconteceu", mensagens: ["Internal Server Error"]});
      process.stderr.write(
        `ERROR received from ${base_url + "alterar"}: ${exception}\n`
      );
    }
  }

  async delete(req: Request, res: Response) {
    try {
      var userId = req.params.userId;
      const response = await axios.delete(base_url + "delete/"+userId);
      console.log("response axios", response.data);
      res.status(response.status).json(response.data);
    } catch (exception) {
      res.status(500).json({retorno: "Algo inesperado aconteceu", mensagens: ["Internal Server Error"]});
      process.stderr.write(
        `ERROR received from ${base_url + "delete"}: ${exception}\n`
      );
    }
  }

  async get(req: Request, res: Response) {
    try {
      var userId = req.params.userId;
      const response = await axios.get(base_url +userId);
      console.log("response axios", response.data);
      res.status(200).json(response.data);
    } catch (exception) {
      res.status(500).json({retorno: "Algo inesperado aconteceu", mensagens: ["Internal Server Error"]});
      process.stderr.write(
        `ERROR received from ${base_url + "get"}: ${exception}\n`
      );
    }
  }

  

  //////////////////////////////////////////////////////
  checkEmptyString(str: string) {
    if (str == null || str.length == 0) return true;
    const emptyStringRegex = /^\s+$/;
    var isEmptyString = emptyStringRegex.test(str);
    return isEmptyString;
  }

  verificaDadosObr(
    Nome: string,
    Email: string,
    Senha: string,
    ConfSenha: string,
    Login: string,
    DataNascimento: string
  ) {
    var lstErros = [];
    if (this.checkEmptyString(Nome))
      lstErros.push("'Nome' é obrigatório e deve ser preenchido.");
    if (this.checkEmptyString(Email))
      lstErros.push("'Email' é obrigatório e deve ser preenchido.");
    if (this.checkEmptyString(Senha))
      lstErros.push("'Senha' é obrigatório e deve ser preenchido.");
    if (this.checkEmptyString(ConfSenha))
      lstErros.push(
        "'Confirmação de senha' é obrigatório e deve ser preenchido."
      );
    if (this.checkEmptyString(Login))
      lstErros.push("'Nome de usuário' é obrigatório e deve ser preenchido.");
    if (this.checkEmptyString(DataNascimento))
      lstErros.push(
        "'Data de Nascimento' é obrigatório e deve ser preenchido."
      );
    if (Senha != ConfSenha)
      lstErros.push("'Senhas' e 'Confirmação de senha' são diferentes.");
    return lstErros;
  }

  formatDate(str:string){
    var lst = str.split("-");
    var y,m,d;
    y=lst[0];
    m=lst[1];
    d=lst[2];
    return [d,m,y].join("-");

}
}
export = new MusicoController();
