import { Router } from 'express';
import BandaRouter from './Banda/BandaRouter';
import MusicoRouter from './Musico/MusicoRouter';
import IndustriaRouter from './Industria/IndustriaRouter';

class MasterRouter {
  private _router = Router();
  private _subrouterBanda = BandaRouter;
  private _subrouterMusico = MusicoRouter;
  private _subrouterIndustria = IndustriaRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/banda', this._subrouterBanda);
    this._router.use('/musico', this._subrouterMusico);
    this._router.use('/industria', this._subrouterIndustria);
  }
}

export = new MasterRouter().router;