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
exports.GetSeriesCountToday = void 0;
const typeorm_1 = require("typeorm");
const ExerciseHistory_entity_js_1 = require("../../entities/ExerciseHistory.entity.js");
const DateUtil_1 = __importDefault(require("../../services/DateUtil"));
class GetSeriesCountToday {
    static run() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .select("exerciseId, count(*) as count")
                .from(ExerciseHistory_entity_js_1.ExerciseHistory, 'history')
                .where("date >= :firtSecondToday", { "firtSecondToday": DateUtil_1.default.todayFirstSecond() })
                .groupBy("exerciseId")
                .getRawMany();
            console.log(result);
            return result;
        });
    }
}
exports.GetSeriesCountToday = GetSeriesCountToday;
class Record {
}
//# sourceMappingURL=GetSeriesCountToday.js.map