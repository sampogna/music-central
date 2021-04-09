import {Request, Response } from "express";
import axios from "axios";

const base_url: string = "http://localhost:3100/api/industria/";

class IndustriaController {
  async listar(req: Request, res: Response) {

    try {
      const response = await axios.get(base_url + "list");
      res.render("pages/industria", {data:response.data});
    } catch (exception) {
      res.render("pages/industria", {data:null});
      process.stderr.write(
        `ERROR received from ${base_url + "list"}: ${exception}\n`
      );
    }
  }

  async adicionar(req: Request, res: Response) {
    try {
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
  }
  
  export = new IndustriaController();