import UserMusico from "../entities/UserMusico";

const base_url:string = "http://localhost:5000/api/musico/";

class MusicoController {
    listar() {
      return new UserMusico("testeInd", "teste@gmail", "123", "jacs");
    }

    adicionar(){

    }

    alterar(){

    }

    excluir(req: Request){
      console.log(req);
      return new Object({result:"Ok"});
    }

  }
  
  export = new MusicoController();