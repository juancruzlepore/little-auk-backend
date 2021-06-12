import { GetSeriesCountToday } from '../persistence/select/GetSeriesCountToday';
import { AddSeries } from '../persistence/insert/AddSeries';
import { GetSeriesCountTodayForExercise } from '../persistence/select/GetSeriesCountTodayForExercise';

export default class ExercisesHistoryController {

    static async addSeries(req: any): Promise<any> {
        await AddSeries.run(req.body.exercise_id);
        return await GetSeriesCountTodayForExercise.run(req.body.exercise_id);
    }

    static async getTodaySeriesCount(req: any): Promise<any> {
        return await GetSeriesCountToday.run();
    }
}