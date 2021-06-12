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
exports.UpdateExercises = void 0;
const ExerciseProvider_js_1 = require("../../services/ExerciseProvider.js");
const Exercise_entity_js_1 = require("../../entities/Exercise.entity.js");
const typeorm_1 = require("typeorm");
class UpdateExercises {
    static run() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = typeorm_1.getConnection();
            // const queryRunner = connection.createQueryRunner();
            // let exerciseTable = await queryRunner.getTable("exercise");
            // await queryRunner.dropTable(exerciseTable!);
            yield connection
                .createQueryBuilder()
                .delete()
                .from(Exercise_entity_js_1.Exercise)
                .execute();
            let exercises = ExerciseProvider_js_1.ExerciseProvider.getExercises();
            yield connection.manager.save(exercises);
        });
    }
}
exports.UpdateExercises = UpdateExercises;
//# sourceMappingURL=UpdateExercises.js.map