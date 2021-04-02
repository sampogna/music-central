import User from "./User";

export default class UserIndustria extends User {
  public TipoIndustria?: string | null = null; //TipoIndustrias
  public Logradouro?: string | null = null;

  constructor(nome: string, email: string, senha: string, login: string) {
    super(nome, email, senha, login);
  }
}
