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

    it("should return true for a string with at least one special character", function() {
        expect(main.specialCharacter("$")).toBe(true);
        expect(main.specialCharacter("#")).toBe(true);
        expect(main.specialCharacter("aa@ani")).toBe(true);
    });

    it("should return false for a string without a special character", function() {
        expect(main.specialCharacter("")).toBe(false);
        expect(main.specialCharacter("12345678")).toBe(false);
        expect(main.specialCharacter("abcdefgh")).toBe(false);
    });

    it("should return true for a string with at least one number", function() {
        expect(main.atLeastOneNumber("a1")).toBe(true);
        expect(main.atLeastOneNumber("1")).toBe(true);
        expect(main.atLeastOneNumber("a1b2c3d4")).toBe(true);
    });

    it("should return false for a string without a number", function() {
        expect(main.atLeastOneNumber("")).toBe(false);
        expect(main.atLeastOneNumber("abcdefgh")).toBe(false);
        expect(main.atLeastOneNumber("a")).toBe(false);
    });

    it("should return true if no IPL", function() {
        expect(main.noIPL("")).toBe(true);
        expect(main.noIPL("12345678")).toBe(true);
        expect(main.noIPL("abcdefgh")).toBe(true);
    });

    it("should return false if IPL", function() {
        expect(main.noIPL("ipl")).toBe(false);
        expect(main.noIPL("IPL")).toBe(false);
        expect(main.noIPL("ahyeiplk;")).toBe(false);
    });

});