import { Main } from '../src/passwordChecker.js';

describe("A suite of test for the passwordChecker", function() {
    let main;
    beforeEach(() => {
        main = new Main();
    });

    it("should return true for a string with at least eight characters", function() {
        expect(main.checkPassword("12345678")).toBe(true);
        expect(main.checkPassword("abcdefgh")).toBe(true);
        expect(main.checkPassword("a1b2c3d4")).toBe(true);
    });

    it("should return false for a string with less than eight characters", function() {
        expect(main.checkPassword("1234567")).toBe(false);
        expect(main.checkPassword("azer")).toBe(false);
        expect(main.checkPassword("a1b2c3")).toBe(false);
    });


});