// Routine
import { Entity, Column, PrimaryColumn } from "./typeormExports";
import DateUtil from '../services/DateUtil'

@Entity()
export class ExerciseHistory {

    constructor(exerciseId: number) {
        this.exerciseId = exerciseId;
        this.setDate(new Date());
    }

    @PrimaryColumn()
    date!: number
    
    @Column()
    exerciseId!: number;

    getDate(): Date {
        return DateUtil.toDate(this.date);
    }

    setDate(date: Date) {
        this.date = DateUtil.toTimeStamp(date);
    }
}