import { isLeap } from "../04-leap-year";

describe("Test leap year conditions for isLeap()", () => {
    it('year not divisible by 4 in common year', () => {
        expect(isLeap(2015)).toBeFalsy();
    });

    it('year divisible by 2, not divisible by 4 in common year', () => {
        expect(isLeap(1970)).toBeFalsy();
    });

    it('year divisible by 4, not divisible by 100 in leap year', () => {
        expect(isLeap(1996)).toBeTruthy();
    });

    it('year divisible by 4 and 5 is still a leap year', () => {
        expect(isLeap(1960)).toBeTruthy();
    });

    it('year divisible by 100, not divisible by 400 in common year', () => {
        expect(isLeap(2100)).toBeFalsy();
    });

    it('year divisible by 100 but not by 3 is still not a leap year', () => {
        expect(isLeap(1900)).toBeFalsy();
    });

    it('year divisible by 400 in leap year', () => {
        expect(isLeap(2000)).toBeTruthy();
    });

    it('year divisible by 400 but not by 125 is still a leap year', () => {
        expect(isLeap(2400)).toBeTruthy();
    });

    it('year divisible by 200, not divisible by 400 in common year', () => {
        expect(isLeap(1800)).toBeFalsy();
    });

    it('year divisible by 200 but not by 125 is still not a leap year', () => {
        expect(isLeap(1700)).toBeFalsy();
    });

    it('year divisible by 125 but not by 100 is still not a leap year', () => {
        expect(isLeap(1750)).toBeFalsy();
    });

});