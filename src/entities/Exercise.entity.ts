// Exercise
import { Entity, Column, PrimaryColumn } from "./typeormExports";

@Entity()
export class Exercise {

    private static last_id = 0;
    
    constructor(name: string) {
        this.name = name;
        this.id = Exercise.last_id++;
    }

    @PrimaryColumn()
    id!: number;

    @Column()
    name!: string;
}
