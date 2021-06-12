import express from 'express';
import timeout from 'connect-timeout'; 

var cors = require('cors')

export default class App {
  private _app: express.Express;
  private static _instance: App;

  private constructor(ex: express.Express) {

    this._app = ex;
    this._app.options('*', cors()) 
    this._app.use(timeout("10000"));
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
  }

  public static initialize(ex: express.Express) {
    App._instance = new App(ex);
  }

  public static express(): express.Express {
    return App._instance._app;
  }
}

