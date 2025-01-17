import { Main } from '../src/passwordChecker.js';

describe("A suite of test for the passwordChecker", function() {
    let main;
    beforeEach(() => {
        main = new Main();
    });

    it("should return true for a string with at least 8 characters", function() {
        expect(main.atLeastEight("12345678")).toBe(true);
        expect(main.atLeastEight("abcdefgh")).toBe(true);
        expect(main.atLeastEight("a1b2c3d4")).toBe(true);
    });

    it("should return false for a string with less than 8 characters", function() {
        expect(main.atLeastEight("1234567")).toBe(false);
        expect(main.atLeastEight("azer")).toBe(false);
        expect(main.atLeastEight("a1b2c3")).toBe(false);
    });


});