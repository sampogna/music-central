import User from "./User";

export default class UserBanda extends User {
  public Estilo?: string | null = null;
  public Criador?: string | null = null;
  public Integrantes?: Array<string> | null = null;

  constructor(nome: string, email: string, senha: string, login: string) {
    super(nome, email, senha, login);
  }
}
