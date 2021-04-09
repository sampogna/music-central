import { NextFunction, Request, Response, Router } from 'express';
import IndustriaController from '../../controllers/IndustriaController';

class MusicoRouter {
  private _router = Router();
  private _controller = IndustriaController;

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
    this._router.get("/", async (req: Request, res: Response, next: NextFunction) => {
      await this._controller.listar(req,res);
      
    });

    this._router.post(
      "/create",
      async (req: Request, res: Response, next: NextFunction) => {
        await this._controller.adicionar(req, res);
      }
    );

    this._router.post(
      "/update",
      async (req: Request, res: Response, next: NextFunction) => {
        await this._controller.alterar(req, res);
      }
    );

    this._router.get(
      "/:userId",
      async (req: Request, res: Response, next: NextFunction) => {
        await this._controller.get(req, res);
      }
    );
    
    this._router.delete(
      "/delete/:userId",
      async (req: Request, res: Response, next: NextFunction) => {
        await this._controller.delete(req, res);
      }
    );

    this._router.post(
      "/password/:userId",
      async (req: Request, res: Response, next: NextFunction) => {
        await this._controller.changePasword(req, res);
      }
    );
  }
}

export = new MusicoRouter().router;