import {
    between,
    betweenRange
} from "../../../../src/1.x.x/scripts/array/between"

describe("Check the interval of elements in portion of an array", () => {
    it("should return true", () => {
        expect(betweenRange([1, 2, 3, 4, 5, 6], 0, 3, 1, 7)).toBeTruthy();
    })
    it("should return false", () => {
        expect(betweenRange([1, 2, 3, 4, 5, 6], 0, 2, 1, 2)).toBeFalsy();
    })
});
describe("Check the interval of elements", () => {
    it("should return true", () => {
        expect(between([1, 2, 3, 4, 5, 6], 1, 7)).toBeTruthy();
    })
    it("should return false", () => {
        expect(between([1, 2, 3, 4, 5, 6], 1, 4)).toBeFalsy();
    })
});