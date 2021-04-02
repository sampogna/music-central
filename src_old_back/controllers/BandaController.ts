import ErrorHandler from "../models/ErrorHandler";
import UserBanda from "../entities/UserBanda";

class BandaController {
  defaultMethod() {
    return new UserBanda("teste", "teste@gmail", "123", "jacs");
  }
}

export = new BandaController();
