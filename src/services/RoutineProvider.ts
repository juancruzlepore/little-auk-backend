import { Routine } from '../entities/Routine.entity'
import { ExerciseNames, ExerciseProvider as EP, ExerciseProvider } from './ExerciseProvider';

export class RoutineProvider {
    private static routineGroups: RoutineGroup[] = [
        {
            id: 0,
            series: [
                {
                    exerciseName: ExerciseNames.PULL_UP,
                    goal: 4
                },
                {
                    exerciseName: ExerciseNames.PUSH_UP,
                    goal: 4
                },
                {
                    exerciseName: ExerciseNames.DIP,
                    goal: 4
                },
            ]
        },
        {
            id: 1,
            series: [
                {
                    exerciseName: ExerciseNames.CRUNCH,
                    goal: 4
                },
            ]
        },
    ]

    static routines(): Routine[] {
        return this.routineGroups.map(
            rg => rg.series.map(
                s => {
                    return new Routine(
                        rg.id,
                        ExerciseProvider.getId(s.exerciseName),
                        s.goal
                    )
                }
            )
        ).reduce((prev, cur) => prev.concat(cur));
    }
}

class Entry {
    exerciseName!: ExerciseNames
    goal!: number
}

class RoutineGroup {
    id!: number
    series!: Entry[]
}