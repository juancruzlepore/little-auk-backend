import Controllers from '../src/controllers/Controllers'
import 'ts-jest'

describe("test Controllers helper class", () => {
    it("test the strip function", () => {
        let testCases = [
            ['', ''],
            ['a', 'a'],
            ['/b', 'b'],
            ['c/', 'c'],
            ['/d/', 'd'],
            ['///e//', 'e'],
        ]

        testCases.forEach(pair => {
            console.log(pair);
            expect(Controllers.strip(pair[0])).toBe(pair[1]);
        });
    });
});