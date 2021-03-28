import { NextFunction, Request, Response, Router } from "express";
import MusicoController from "../../controllers/MusicoController";

class MusicoRouter {
  private _router = Router();
  private _controller = MusicoController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    this._router.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.render("pages/musico");
    });

    this._router.post(
      "/create",
      async (req: Request, res: Response, next: NextFunction) => {
        await this._controller.adicionar(req, res);
      }
    );
  }
}

export = new MusicoRouter().router;
