import * as mysql from "mysql2/promise";
import Endereco from "../models/Endereco";
import Social from "../models/Social";

export = class DataBaseDAO {
  public _conn: any;

  constructor(connection: any) {
    this._conn = connection;
  }

  async ListUsuarios() {
    const result = await this._conn.promise().query("SELECT * from usuarios");
    return result[0];
  }

  async GetUsuario(id:number) {
    const result = await this._conn.promise().query("SELECT * from usuarios where id = ?", id);
    return result[0];
  }

  async CriarUsuario(Nome:string, Email:string, Senha:string, Login:string, Descricao:string, DataNascimento:string, Status:string, Tipo:string) {
    const result = await this._conn.promise().query("INSERT INTO usuarios \
    (Nome, Email, Senha, Login, Descricao, DataNascimento, Status, Tipo) \
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [Nome, Email, Senha, Login, Descricao, DataNascimento, Status, Tipo]
    );
    return result[0];
  }
  async SetEndereco(endereco:Endereco) {
    const result = await this._conn.promise().query("INSERT INTO usuarios_endereco \
    (UsuarioId, UF, Estado, Cidade) \
    VALUES (?, ?, ?, ?)",
    [endereco.Usuario, endereco.UF, endereco.Estado, endereco.Cidade]
    );
    return result[0];
  }

  async GetEndereco(userId:number) {
    const result = await this._conn.promise().query("select * from usuarios_endereco \
    where UsuarioId = ?",
    [userId]
    );
    return result[0];
  }

  async UpdateEndereco(userId:number, endereco:Endereco) {
    const result = await this._conn.promise().query("update usuarios_endereco \
    SET UF = ?, Estado = ?, Cidade = ?\
    where UsuarioId = ? and Id = ?",
    [endereco.UF, endereco.Estado, endereco.Cidade, userId, endereco.Id]
    );
    return result[0];
  }

  async SetSocial(social:Social) {
    const result = await this._conn.promise().query("INSERT INTO usuarios_social \
    (UsuarioId, Nome, Link) \
    VALUES (?, ?, ?, ?)",
    [social.Usuario, social.Nome, social.Link]
    );
    return result[0];
  }

  async GetUsuarioByEmailOrUser(email:string, login:string) {
    var teste = ['%'+login+'%', '%'+email+'%'];
    
    const result = await this._conn.promise().query("select * from usuarios \
    where Login like ? OR Email like ?",
    teste
    );
    return result[0];
  }




};
