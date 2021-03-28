import UserMusico from "../entities/UserMusico";
import { NextFunction, Request, Response } from "express";
import axios from "axios";
import ErrorHandler from "../models/ErrorHandler";
import { text } from "body-parser";

const base_url: string = "http://localhost:5000/api/musico/";

class MusicoController {
  listar(req: Request, res: Response) {
    return new UserMusico("testeInd", "teste@gmail", "123", "jacs");
  }

  async adicionar(req: Request, res: Response) {
    try {
      var dataBody = req.body;
      var lstErros = this.verificaDadosObr(
        dataBody.Nome,
        dataBody.Email,
        dataBody.Senha,
        dataBody.ConfSenha,
        dataBody.Login,
        dataBody.DataNascimento
      );
      if(lstErros.length>0){
        var ret = new ErrorHandler();
        ret.mensagens = lstErros;
        ret.codigo = 400;
        ret.retorno = "Campos obrigatórios não preenchidos."
        res.status(ret.codigo).json(ret);
        return;
      }

      const response = await axios.post(base_url + "create", req.body);
      console.log("response axios", response.data);
      res.status(200).json(response.data);
    } catch (exception) {
      process.stderr.write(
        `ERROR received from ${base_url + "create"}: ${exception}\n`
      );
    }
  }

  alterar(req: Request, res: Response) {
    res.json(req.body);
  }

  excluir(req: Request, res: Response) {
    //return new Object({result:"Ok"});
  }

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
}
export = new MusicoController();
