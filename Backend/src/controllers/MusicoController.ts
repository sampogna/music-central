import UserMusico from "../entities/UserMusico";

class MusicoController {
    defaultMethod() {
      return new UserMusico("testeInd", "teste@gmail", "123", "jacs");
    }
  }
  
  export = new MusicoController();