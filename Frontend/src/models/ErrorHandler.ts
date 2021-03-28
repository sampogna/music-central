export default class ErrorHandler extends Error {
    
  public codigo: number;
  public mensagens: string[];
  public retorno: string;
  constructor() {
    super();
    this.codigo = 0;
    this.mensagens = [];
    this.retorno = "";
    }
  }