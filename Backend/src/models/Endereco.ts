

export default class Endereco {
    private Id?: number | null = null;
    public Usuario: number;
    public UF: string;
    public Estado: string;
    public Cidade: string;
  
  
    constructor(user: number, uf: string, estado: string, cidade: string) {
      this.Usuario = user;
      this.UF = uf;
      this.Estado = estado;
      this.Cidade = cidade;
    }
  }
  