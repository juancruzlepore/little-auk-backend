import { getConnection } from "typeorm";
import { ExerciseHistory } from '../../entities/ExerciseHistory.entity.js';
import DateUtil from '../../services/DateUtil'

export class GetSeriesCountToday {
    
    static async run(): Promise<Record[]>{
        
        let result: Record[] = await getConnection()
            .createQueryBuilder()
            .select("exerciseId, count(*) as count")
            .from(ExerciseHistory, 'history')
            .where("date >= :firtSecondToday", {"firtSecondToday": DateUtil.todayFirstSecond()})
            .groupBy("exerciseId")
            .getRawMany();
        console.log(result);
        return result;
    }
}

class Record {
    exerciseId!: number
    count!: number
}
