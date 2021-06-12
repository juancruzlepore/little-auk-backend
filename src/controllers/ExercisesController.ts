import {GetAllExercises} from '../persistence/select/GetAllExercises'

export default class ExercisesController {

    static async getAll(req: any): Promise<string> {
        return JSON.stringify(await GetAllExercises.run());
    }
}