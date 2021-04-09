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
    //Remover
    this._router.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.defaultMethod());
    });

    this._router.get(
      "/list",
      async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json(await this._controller.list(req, res));
      }
    );

    this._router.post(
      "/create",
      async (req: Request, res: Response, next: NextFunction) => {
        console.log("req.body router", req.body);
        res.status(200).json(await this._controller.create(req, res));
      }
    );
  }
}

export = new MusicoRouter().router;
