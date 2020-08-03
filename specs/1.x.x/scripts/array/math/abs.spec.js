import {
    absRange,
    abs
} from "../../../../../src/1.x.x/scripts/array/math/abs"

import "../../../helpers/check.spec"

describe("Absolute values for specific range of elements", () => {
    it("should return positive values for positive values", () => {
        expect(absRange([1, 2, 3], 0, 1)).toStrictEqual([1, 2, 3]);
    });
    it("should return positive values for the negative values", () => {
        expect(absRange([-1, -2, -3], 0, 1)).toStrictEqual([1, 2, -3]);
    });
    it("should return positive values for the negative values and skip values with type is not equal to number", () => {
        expect(absRange([-1, -2, -3, "a", "b"], 0, 1)).toStrictEqual([1, 2, -3, "a", "b"]);
    });
    it("should return the same values that are not numbers", () => {
        expect(absRange(["a", "b", "c"], 0, 1)).toStrictEqual(["a", "b", "c"]);
    });
    it("should throw an error", () => {

        function passBigIndex() {
            const array = [-1, -2, -3];
            absRange(array, 0, 4); // The last index of array is 2
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });

});

describe("Absolute values for all elements", () => {
    it("should return positive values for positive values", () => {
        expect(abs([1, 2, 3])).toStrictEqual([1, 2, 3]);
    });
    it("should return positive values for the negative values", () => {
        expect(abs([-1, -2, -3])).toStrictEqual([1, 2, 3]);
    });
    it("should return positive values for the negative values and skip values with type is not equal to number", () => {
        expect(abs([-1, -2, -3, "a", "b"])).toStrictEqual([1, 2, 3, "a", "b"]);
    });
    it("should return the same values that are not numbers", () => {
        expect(abs(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });
});