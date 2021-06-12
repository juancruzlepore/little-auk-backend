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
exports.AddSeries = void 0;
const typeorm_1 = require("typeorm");
const ExerciseHistory_entity_1 = require("../../entities/ExerciseHistory.entity");
class AddSeries {
    static run(exerciseId) {
        return __awaiter(this, void 0, void 0, function* () {
            let new_series = new ExerciseHistory_entity_1.ExerciseHistory(exerciseId);
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .insert()
                .into(ExerciseHistory_entity_1.ExerciseHistory)
                .values([
                new_series
            ])
                .execute();
        });
    }
}
exports.AddSeries = AddSeries;
//# sourceMappingURL=AddSeries.js.map