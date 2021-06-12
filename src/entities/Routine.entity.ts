// Routine
import { Entity, Column, PrimaryColumn } from "./typeormExports";

@Entity()
export class Routine {

    @PrimaryColumn()
    id!: number;

    @PrimaryColumn()
    exerciseId!: number;

    @Column()
    goal!: number;

    constructor(id: number, exerciseId: number, goal: number) {
        this.id = id;
        this.exerciseId = exerciseId;
        this.goal = goal;
    }
}