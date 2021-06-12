import { getConnection } from "typeorm";
import { Routine } from '../../entities/Routine.entity';

export class GetAllRoutines {
    static async run(): Promise<Routine[]>{
        let routines: Routine[] = await getConnection()
            .createQueryBuilder(Routine, 'routine')
            .getMany();
        console.log(routines[0].id);
        return routines;
    }
}
