import { getConnection } from "typeorm";
import { ExerciseHistory } from '../../entities/ExerciseHistory.entity.js';
import DateUtil from '../../services/DateUtil'

class newCountType {
    new_count!: number
}

export class GetSeriesCountTodayForExercise {
    static async run(exerciseId: number): Promise<newCountType>{
        
        let new_count = await getConnection()
            .createQueryBuilder()
            .select("COUNT(*)")
            .from(ExerciseHistory, 'history')
            .where("exerciseId = :exerciseId", {exerciseId})
            .andWhere("date >= :firtSecondToday", {"firtSecondToday": DateUtil.todayFirstSecond()})
            .getCount();
        return {"new_count": new_count};
    }
}
