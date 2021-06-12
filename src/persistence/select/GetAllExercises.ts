import {Exercise} from '../../entities/Exercise.entity'
import { getConnection } from "typeorm";

export class GetAllExercises {
    static async run(): Promise<Exercise[]>{
        let exercises: Exercise[] = await getConnection()
            .createQueryBuilder(Exercise, 'exercise')
            .getMany();
        return exercises;
    }
}
