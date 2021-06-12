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
Object.defineProperty(exports, "__esModule", { value: true });
const GetSeriesCountToday_1 = require("../persistence/select/GetSeriesCountToday");
const AddSeries_1 = require("../persistence/insert/AddSeries");
const GetSeriesCountTodayForExercise_1 = require("../persistence/select/GetSeriesCountTodayForExercise");
class ExercisesHistoryController {
    static addSeries(req) {
        return __awaiter(this, void 0, void 0, function* () {
            yield AddSeries_1.AddSeries.run(req.body.exercise_id);
            return yield GetSeriesCountTodayForExercise_1.GetSeriesCountTodayForExercise.run(req.body.exercise_id);
        });
    }
    static getTodaySeriesCount(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield GetSeriesCountToday_1.GetSeriesCountToday.run();
        });
    }
}
exports.default = ExercisesHistoryController;
//# sourceMappingURL=ExercisesHistoryController.js.map