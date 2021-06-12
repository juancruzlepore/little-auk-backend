"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseProvider = exports.ExerciseNames = void 0;
const Exercise_entity_1 = require("../entities/Exercise.entity");
var ExerciseNames;
(function (ExerciseNames) {
    ExerciseNames["PULL_UP"] = "pull up";
    ExerciseNames["PUSH_UP"] = "push up";
    ExerciseNames["CHIN_UP"] = "chin up";
    ExerciseNames["DIP"] = "dip";
    ExerciseNames["CRUNCH"] = "crunch";
    ExerciseNames["HLL"] = "HLL";
})(ExerciseNames = exports.ExerciseNames || (exports.ExerciseNames = {}));
class ExerciseProvider {
    static getExercises() {
        return this.exercises;
    }
    static get(name) {
        return this.exercises.filter(e => e.name == name.toString())[0];
    }
    static getId(name) {
        return this.exercises.filter(e => e.name == name.toString())[0].id;
    }
}
exports.ExerciseProvider = ExerciseProvider;
ExerciseProvider.exercises = Object.values(ExerciseNames).map(name => new Exercise_entity_1.Exercise(name));
//# sourceMappingURL=ExerciseProvider.js.map