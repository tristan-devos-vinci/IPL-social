import { Main } from '../src/passwordChecker';

describe("A suite of test for the passwordChecker", function() {
    let main;
    beforeEach(() => {
        main = new Main();
    });

    it("should return true for a string with at least eight characters", function() {
        expect(main.atLeastEight("12345678")).toBe(true);
        expect(main.atLeastEight("abcdefgh")).toBe(true);
        expect(main.atLeastEight("a1b2c3d4")).toBe(true);
    });


});