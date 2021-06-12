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
exports.GetSeriesCountTodayForExercise = void 0;
const typeorm_1 = require("typeorm");
const ExerciseHistory_entity_js_1 = require("../../entities/ExerciseHistory.entity.js");
const DateUtil_1 = __importDefault(require("../../services/DateUtil"));
class newCountType {
}
class GetSeriesCountTodayForExercise {
    static run(exerciseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let new_count = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .select("COUNT(*)")
                .from(ExerciseHistory_entity_js_1.ExerciseHistory, 'history')
                .where("exerciseId = :exerciseId", { exerciseId })
                .andWhere("date >= :firtSecondToday", { "firtSecondToday": DateUtil_1.default.todayFirstSecond() })
                .getCount();
            return { "new_count": new_count };
        });
    }
}
exports.GetSeriesCountTodayForExercise = GetSeriesCountTodayForExercise;
//# sourceMappingURL=GetSeriesCountTodayForExercise.js.map