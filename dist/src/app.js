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
const express_1 = __importDefault(require("express"));
const AppClass_js_1 = __importDefault(require("./AppClass.js"));
const Controllers_js_1 = __importDefault(require("./controllers/Controllers.js"));
const ExercisesHistoryController_1 = __importDefault(require("./controllers/ExercisesHistoryController"));
const UpdateExercises_1 = require("./persistence/update/UpdateExercises");
const typeorm_1 = require("typeorm");
const UpdateRoutines_js_1 = require("./persistence/update/UpdateRoutines.js");
const module2 = require('module');
const fs = require('fs');
module2.Module._extensions['.js'] = function (module, filename) {
    const contents = fs.readFileSync(filename, 'utf8');
    module._compile(require('fs').readFileSync(filename, 'utf8'), filename);
};
function whenSuccess() {
    // GetSeriesCountToday.run().then(result => {});
    ExercisesHistoryController_1.default.getTodaySeriesCount({}).then(result => {
        UpdateExercises_1.UpdateExercises.run().then(() => {
            UpdateRoutines_js_1.UpdateRoutines.run().then();
        });
    });
}
function connect() {
    typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
        console.log('connection succeeded');
        whenSuccess();
    })).catch(error => {
        if (error.name == 'AlreadyHasActiveConnectionError') {
            console.log('there is already an active connection');
            whenSuccess();
        }
        else {
            console.log('connection attempt failed');
            console.log(error.name);
            connect();
        }
    });
}
connect();
const app = express_1.default();
const port = 3000;
AppClass_js_1.default.initialize(app);
Controllers_js_1.default.registerControllers();
AppClass_js_1.default.express().listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map