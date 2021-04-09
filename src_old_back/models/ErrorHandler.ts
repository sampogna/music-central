export default class ErrorHandler extends Error {
    
  public statusCode: number;
  public message: string;
  public retorno: string;
  constructor() {
    super();
    this.statusCode = 0;
    this.message = "";
    this.retorno = "";
    }
  }