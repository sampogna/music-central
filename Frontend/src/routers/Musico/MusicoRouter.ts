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
    this._router.post('/create', (req: Request, res: Response, next: NextFunction) => {
      console.log("req.body", req.);
      res.json(this._controller.excluir(req.body));
    });
  }
}

export = new MusicoRouter().router;