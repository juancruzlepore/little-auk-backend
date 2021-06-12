"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutineProvider = void 0;
const Routine_entity_1 = require("../entities/Routine.entity");
const ExerciseProvider_1 = require("./ExerciseProvider");
class RoutineProvider {
    static routines() {
        return this.routineGroups.map(rg => rg.series.map(s => {
            return new Routine_entity_1.Routine(rg.id, ExerciseProvider_1.ExerciseProvider.getId(s.exerciseName), s.goal);
        })).reduce((prev, cur) => prev.concat(cur));
    }
}
exports.RoutineProvider = RoutineProvider;
RoutineProvider.routineGroups = [
    {
        id: 0,
        series: [
            {
                exerciseName: ExerciseProvider_1.ExerciseNames.PULL_UP,
                goal: 4
            },
            {
                exerciseName: ExerciseProvider_1.ExerciseNames.PUSH_UP,
                goal: 4
            },
            {
                exerciseName: ExerciseProvider_1.ExerciseNames.DIP,
                goal: 4
            },
        ]
    },
    {
        id: 1,
        series: [
            {
                exerciseName: ExerciseProvider_1.ExerciseNames.CRUNCH,
                goal: 4
            },
        ]
    },
];
class Entry {
}
class RoutineGroup {
}
//# sourceMappingURL=RoutineProvider.js.map