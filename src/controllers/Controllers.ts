import ExercisesController from "./ExercisesController";
import RoutinesController from "./RoutinesController";
import App from '../AppClass';
import ExercisesHistoryController from "./ExercisesHistoryController";

var cors = require('cors')

export type Constructor<T> = new (...args: any[]) => T;

class Action {  
    http_method!: HTTPMethod
    response!: (req: any) => Promise<any>
}

enum HTTPMethod {
    GET, POST
}

class Controller {
    path!: string
    action?: Action 
    children?: Controller[] = []
}

export default abstract class Controllers {

    private static corsOptions = {
        origin: 'http://example.com',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

    private static _all_controllers: Controller = {
        path: '',
        children: [
            {
                path: 'exercise',
                children: [
                    {
                        path: 'all',
                        action: {
                            http_method: HTTPMethod.GET,
                            response: ExercisesController.getAll
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
                            response: ExercisesHistoryController.addSeries
                        }
                    },
                    {
                        path: 'today',
                        action: {
                            http_method: HTTPMethod.GET,
                            response: ExercisesHistoryController.getTodaySeriesCount
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
                            response: RoutinesController.getAll
                        }
                    }
                ]
            }
        ]
    }

    static registerControllers() {
        this.registerControllersRecursive(this._all_controllers, '');
    }

    private static registerControllersRecursive(controller: Controller, currentPath: string) {
        let action = controller.action;
        let new_path = this.strip(currentPath) + '/' + this.strip(controller.path);
        if(action !== null && action !== undefined) {
            this.register('/' + this.strip(new_path), action.http_method, action.response);
        }
        if(controller.children !== null && controller.children !== undefined) {
            controller.children.forEach(child => {
                this.registerControllersRecursive(child, new_path);
            });
        }
    }

    private static register(path: string, httpMethod: HTTPMethod, responseFunction: (req: any) => Promise<any>) {
        if(path === undefined || path === null) {
            throw new Error(`path not set for ${this.constructor.name}`);
        }

        switch (httpMethod) {
            case HTTPMethod.GET:
                App.express().get(path, cors(), async (req: any, res: any) => {
                    res.send(await responseFunction(req));
                });
                break;
            case HTTPMethod.POST:
                App.express().post(path, cors(), async (req: any, res: any) => {
                    res.send(await responseFunction(req));
                });
                break;
            default:
                throw new Error(`HTTP method not set for ${this.constructor.name}`);
        }
        
        console.log(`controller registered with path '${path}'`);
    }

    static strip(str: string): string {
        while(str.length > 0 && str[0] == '/') {
            str = str.substring(1);
        }
        while(str.length > 0 && str[str.length - 1] == '/') {
            str = str.substring(0, str.length - 1);
        }
        return str;
    }

    
}