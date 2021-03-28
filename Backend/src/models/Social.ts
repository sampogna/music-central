export default class Social {
    private Id?: number | null = null;
    public Usuario: number;
    public Nome: string;
    public Link: string;
  
    constructor(user: number, nome: string, link: string) {
      this.Nome = nome;
      this.Usuario = user;
      this.Link = link;
    }
  }
  