"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExercisesController_1 = __importDefault(require("./ExercisesController"));
const RoutinesController_1 = __importDefault(require("./RoutinesController"));
const AppClass_1 = __importDefault(require("../AppClass"));
const ExercisesHistoryController_1 = __importDefault(require("./ExercisesHistoryController"));
var cors = require('cors');
class Action {
}
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod[HTTPMethod["GET"] = 0] = "GET";
    HTTPMethod[HTTPMethod["POST"] = 1] = "POST";
})(HTTPMethod || (HTTPMethod = {}));
class Controller {
    constructor() {
        this.children = [];
    }
}
class Controllers {
    static registerControllers() {
        this.registerControllersRecursive(this._all_controllers, '');
    }
    static registerControllersRecursive(controller, currentPath) {
        let action = controller.action;
        let new_path = this.strip(currentPath) + '/' + this.strip(controller.path);
        if (action !== null && action !== undefined) {
            this.register('/' + this.strip(new_path), action.http_method, action.response);
        }
        if (controller.children !== null && controller.children !== undefined) {
            controller.children.forEach(child => {
                this.registerControllersRecursive(child, new_path);
            });
        }
    }
    static register(path, httpMethod, responseFunction) {
        if (path === undefined || path === null) {
            throw new Error(`path not set for ${this.constructor.name}`);
        }
        switch (httpMethod) {
            case HTTPMethod.GET:
                AppClass_1.default.express().get(path, cors(), (req, res) => __awaiter(this, void 0, void 0, function* () {
                    res.send(yield responseFunction(req));
                }));
                break;
            case HTTPMethod.POST:
                AppClass_1.default.express().post(path, cors(), (req, res) => __awaiter(this, void 0, void 0, function* () {
                    res.send(yield responseFunction(req));
                }));
                break;
            default:
                throw new Error(`HTTP method not set for ${this.constructor.name}`);
        }
        console.log(`controller registered with path '${path}'`);
    }
    static strip(str) {
        while (str.length > 0 && str[0] == '/') {
            str = str.substring(1);
        }
        while (str.length > 0 && str[str.length - 1] == '/') {
            str = str.substring(0, str.length - 1);
        }
        return str;
    }
}
exports.default = Controllers;
Controllers.corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
Controllers._all_controllers = {
    path: '',
    children: [
        {
            path: 'exercise',
            children: [
                {
                    path: 'all',
                    action: {
                        http_method: HTTPMethod.GET,
                        response: ExercisesController_1.default.getAll
                    }
                }
            ]
        },
        {
            path: 'history',
            children: [
                {
                    path: 'add',
                    action: {
                        http_method: HTTPMethod.POST,
                        response: ExercisesHistoryController_1.default.addSeries
                    }
                },
                {
                    path: 'today',
                    action: {
                        http_method: HTTPMethod.GET,
                        response: ExercisesHistoryController_1.default.getTodaySeriesCount
                    }
                },
            ]
        },
        {
            path: 'routine',
            children: [
                {
                    path: 'all',
                    action: {
                        http_method: HTTPMethod.GET,
                        response: RoutinesController_1.default.getAll
                    }
                }
            ]
        }
    ]
};
//# sourceMappingURL=Controllers.js.map