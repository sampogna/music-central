import Endereco from '../models/Endereco';
import Social from '../models/Social';

export default class User {
  private Id?: number | null = null;
  public Nome: string;
  public Email: string;
  public Senha: string;
  public Login: string;
  public Descricao?: string | null = null;
  public Telefone?: string | null = null;
  public DataNascimento?: Date | null = null; //DateTime?;
  
  public Status?: string | null = null; 
  public Tipo?: string | null = null; 

  public Endereco?: Endereco | null = null;
  public RedesSociais?: Array<Social> | null = null; 

  constructor(nome: string, email: string, senha: string, login: string) {
    this.Nome = nome;
    this.Email = email;
    this.Senha = senha;
    this.Login = login;
  }
}
