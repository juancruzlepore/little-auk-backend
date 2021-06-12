"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_timeout_1 = __importDefault(require("connect-timeout"));
var cors = require('cors');
class App {
    constructor(ex) {
        this._app = ex;
        this._app.options('*', cors());
        this._app.use(connect_timeout_1.default("10000"));
        this._app.use(express_1.default.json());
        this._app.use(express_1.default.urlencoded({ extended: true }));
    }
    static initialize(ex) {
        App._instance = new App(ex);
    }
    static express() {
        return App._instance._app;
    }
}
exports.default = App;
//# sourceMappingURL=AppClass.js.map