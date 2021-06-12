"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controllers_1 = __importDefault(require("../src/controllers/Controllers"));
require("ts-jest");
describe("test Controllers helper class", () => {
    it("test the strip function", () => {
        let testCases = [
            ['', ''],
            ['a', 'a'],
            ['/b', 'b'],
            ['c/', 'c'],
            ['/d/', 'd'],
            ['///e//', 'e'],
        ];
        testCases.forEach(pair => {
            console.log(pair);
            expect(Controllers_1.default.strip(pair[0])).toBe(pair[1]);
        });
    });
});
//# sourceMappingURL=Controllers.test.js.map