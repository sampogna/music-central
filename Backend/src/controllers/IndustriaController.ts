import ErrorHandler from "../models/ErrorHandler";
import UserIndustria from "../entities/UserIndustria";

class IndustriaController {
    defaultMethod() {
      return new UserIndustria("testeInd", "teste@gmail", "123", "jacs");
    }
  }
  
  export = new IndustriaController();