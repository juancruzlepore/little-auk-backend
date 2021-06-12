import { ExerciseProvider } from '../../services/ExerciseProvider.js';
import {Exercise} from '../../entities/Exercise.entity.js'
import { getConnection } from "typeorm";

export class UpdateExercises {
    static async run(){
        const connection = getConnection();
        // const queryRunner = connection.createQueryRunner();

        // let exerciseTable = await queryRunner.getTable("exercise");
        // await queryRunner.dropTable(exerciseTable!);
        await connection
            .createQueryBuilder()
            .delete()
            .from(Exercise)
            .execute();
        let exercises = ExerciseProvider.getExercises();
        await connection.manager.save(exercises);
    }
}
