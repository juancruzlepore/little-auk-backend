import {GetAllRoutines} from '../persistence/select/GetAllRoutines'

export default class RoutinesController {

    static async getAll(req: any): Promise<string> {
        return JSON.stringify(await GetAllRoutines.run());
    }
}