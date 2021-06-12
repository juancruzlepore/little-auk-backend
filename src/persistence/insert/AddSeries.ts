import { getConnection } from "typeorm";
import { ExerciseHistory } from '../../entities/ExerciseHistory.entity';

export class AddSeries {
    static async run(exerciseId: number): Promise<void>{
        let new_series = new ExerciseHistory(exerciseId);
        
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(ExerciseHistory)
            .values([
                new_series
            ])
            .execute();
    }
}
