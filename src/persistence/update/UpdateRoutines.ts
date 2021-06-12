import { RoutineProvider } from '../../services/RoutineProvider';
import {Routine} from '../../entities/Routine.entity.js'
import { getConnection } from "typeorm";

export class UpdateRoutines {
    static async run(){
        let connection = getConnection();
        await connection
            .createQueryBuilder()
            .delete()
            .from(Routine)
            .execute();
        let routines = RoutineProvider.routines();
        await connection.manager.save(routines);
    }
}
