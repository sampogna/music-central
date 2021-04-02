import User from "./User";

export default class UserMusico extends User {
    public Estilos: Array<string> | null = null;
    public Instrumentos: Array<string> | null = null;

  constructor(nome: string, email: string, senha: string, login: string) {
    super(nome, email, senha, login);
  }
}
