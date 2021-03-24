import { NextFunction, Request, Response, Router } from 'express';
import MusicoController from '../../controllers/MusicoController';

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
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.render("pages/musico");
    });
  }
}

export = new MusicoRouter().router;