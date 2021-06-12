import { Exercise } from '../entities/Exercise.entity'

export enum ExerciseNames {
    PULL_UP = "pull up",
    PUSH_UP = "push up",
    CHIN_UP = "chin up",
    DIP = "dip",
    CRUNCH = "crunch",
    HLL = "HLL"
}

export class ExerciseProvider {

    static exercises = Object.values(ExerciseNames).map(name => new Exercise(name))

    static getExercises(): Exercise[] {
        return this.exercises;
    }

    static get(name: ExerciseNames): Exercise {
        return this.exercises.filter(e => e.name == name.toString())[0];
    }

    static getId(name: ExerciseNames): number {
        return this.exercises.filter(e => e.name == name.toString())[0].id;
    }
}