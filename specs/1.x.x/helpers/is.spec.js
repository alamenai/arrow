import {
    isBooleanArray,
    isNumberArray
} from "../../../src/1.x.x/helpers/is"

describe("Checking the elements type", () => {
    it("should return true when all elements have type Boolean", () => {
        expect(isBooleanArray([true, false, true])).toStrictEqual(true);
    });
    it("should return false when all elements have not type Boolean", () => {
        expect(isBooleanArray([true, false, 1])).toStrictEqual(false);
    });
    it("should return true when all elements have type Number", () => {
        expect(isNumberArray([1, 2, 3])).toStrictEqual(true);
    });
    it("should return false when all elements have not type Number", () => {
        expect(isNumberArray([1, 2, "item"])).toStrictEqual(false);
    });
})