import {ExerciseHistory} from '../src/entities/ExerciseHistory.entity'
import 'ts-jest'

describe("test ExerciseHistory entity", () => {
    it("set and get date are consistent", () => {
        let now = new Date();
        let eh = new ExerciseHistory(1);
        eh.setDate(now);
        expect(eh.getDate().toString()).toBe(now.toString());
        let otherDate = new Date();
        otherDate.setMinutes(19);
        eh.setDate(otherDate);
        console.log(eh.getDate().toString());
        expect(eh.getDate().toString()).toBe(otherDate.toString());
    });
    
});