"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExerciseHistory_entity_1 = require("../src/entities/ExerciseHistory.entity");
require("ts-jest");
describe("test ExerciseHistory entity", () => {
    it("set and get date are consistent", () => {
        let now = new Date();
        let eh = new ExerciseHistory_entity_1.ExerciseHistory(1);
        eh.setDate(now);
        expect(eh.getDate().toString()).toBe(now.toString());
        let otherDate = new Date();
        otherDate.setMinutes(19);
        eh.setDate(otherDate);
        console.log(eh.getDate().toString());
        expect(eh.getDate().toString()).toBe(otherDate.toString());
    });
});
//# sourceMappingURL=ExerciseHistory.entity.test.js.map