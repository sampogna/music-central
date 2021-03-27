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
      res.status(200).json(this._controller.defaultMethod());
    });
    this._router.get('/list', async (req: Request, res: Response, next: NextFunction) => {
      var teste = await this._controller.list();
      console.log("TESTE", teste);
      res.status(200).json(teste);
    });
  }
}

export = new MusicoRouter().router;