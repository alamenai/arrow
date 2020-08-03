import {
    powRange,
    pow
} from "../../../../../src/1.x.x/scripts/array/math/pow"

describe("Powered values for specific range in array", () => {
    it("should return positive values for positive values", () => {
        expect(powRange([1, 2, 3], 0, 1, 2)).toStrictEqual([1, 4, 3]);
    });
    it("should return positive values for the negative values", () => {
        expect(powRange([-1, -2, -3], 0, 1, 2)).toStrictEqual([1, 4, -3]);
    });
    it("should skip values with type is not equal to number", () => {
        expect(powRange([-1, -2, -3, "a", "b"], 0, 2, 2)).toStrictEqual([1, 4, 9, "a", "b"]);
    });
    it("should return the same values that are not numbers", () => {
        expect(powRange(["a", "b", "c"], 0, 2, 2)).toStrictEqual(["a", "b", "c"]);
    });
    it("should throw an error", () => {

        function passBigIndex() {
            const array = [-1, -2, -3];
            powRange(array, 0, 4, 2); // The last index of array is 2
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });

});

describe("Powered values for all elements of an array", () => {
    it("should return positive values for positive values", () => {
        expect(pow([1, 2, 3], 2)).toStrictEqual([1, 4, 9]);
    });
    it("should return positive values for the negative values", () => {
        expect(pow([-1, -2, -3], 2)).toStrictEqual([1, 4, 9]);
    });
    it("should skip values with type is not equal to number", () => {
        expect(pow([-1, -2, -3, "a", "b"], 2)).toStrictEqual([1, 4, 9, "a", "b"]);
    });
    it("should return the same values that are not numbers", () => {
        expect(pow(["a", "b", "c"], 2)).toStrictEqual(["a", "b", "c"]);
    });
});