export default class Social {
    private Id?: number | null = null;
    public Usuario: number;
    public Nome: string;
    public Link: string;
  
    constructor(nome: string, user: number, link: string) {
      this.Nome = nome;
      this.Usuario = user;
      this.Link = link;
    }
  }
  