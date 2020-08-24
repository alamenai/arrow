/**
 * Make sure to open an issue if you find a bug ( Not grammar error ) in this test
 * Make sure to open an issue before you create pull request for additional test
*/

import average from "../../../../../src/1.x.x/scripts/array/math/average"

describe("Calculate the average of an array", () => {
    it("should return positive value for positive elements", () => {
        expect(average([1, 2, 3])).toStrictEqual((1 + 2 + 3) / 3);
    });
    it("should return Infinity when an element is equal to Infinity", () => {
        expect(average([1, 2, Infinity])).toStrictEqual((1 + 2 + Infinity) / 3);
    });
    it("should return Infinity when all elements are equal to Infinity", () => {
        expect(average([Infinity, Infinity, Infinity])).toStrictEqual((Infinity + Infinity + Infinity) / 3);
    });
    it("should return negative value for negative elements", () => {
        expect(average([-1, -2, -3])).toStrictEqual((-1 + (-2) + (-3)) / 3);
    });
    it("should make cohersion for numbers-like strings", () => {
        expect(average(["1", "2", "3"])).toStrictEqual((1 + 2 + 3) / 3);
    });
    it("should return NaN value for NaN elements", () => {
        expect(average([NaN, NaN, NaN])).toStrictEqual((NaN + NaN + NaN) / 3);
    });

    it("should throw an error when the elements have type of string or undefined", () => {

        function hasStringType() {
            const arr = ["a", "b", "c"]
            average(arr)
        }
        function hasUndefined() {
            const arr = [undefined, undefined, undefined]
            average(arr)
        }
        expect(hasStringType).toThrowError("The elements of an array should have a Number type");
        expect(hasUndefined).toThrowError("The elements of an array should have a Number type");
    });

});