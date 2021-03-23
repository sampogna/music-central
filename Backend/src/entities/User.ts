export default class User {
  private Id?: number | null = null;
  public Nome: string;
  public Email: string;
  public Senha: string;
  public Login: string;
  public Descricao?: string | null = null;
  public Telefone?: string | null = null;
  public DataNascimento?: Date | null = null; //DateTime?;
  public Status?: string | null = null; //TipoStatus;
  public Tipo?: string | null = null; //TipoUsuario;
  public Cidade?: string | null = null;
  public UF?: string | null = null;
  public RedesSociais?: string | null = null; //List<Social>

  constructor(nome: string, email: string, senha: string, login: string) {
    this.Nome = nome;
    this.Email = email;
    this.Senha = senha;
    this.Login = login;
  }
}
