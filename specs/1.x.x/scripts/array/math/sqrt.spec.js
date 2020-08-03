import {
    sqrt,
    sqrtRange
} from "../../../../../src/1.x.x/scripts/array/math/sqrt"

describe("Racine values for specific range of elements", () => {
    it("should return Racine for only the two first elements", () => {
        expect(sqrtRange([10, 100, 1000], 0, 1)).toStrictEqual([Math.sqrt(10), Math.sqrt(100), 1000]);
    });
    it("should return NaN for negative elements", () => {
        expect(sqrtRange([-10, -100, -1000], 0, 1)).toStrictEqual([NaN, NaN, -1000]);
    });

    it("should return the same values that are not numbers", () => {
        expect(sqrtRange(["a", "b", "c"], 0, 1)).toStrictEqual(["a", "b", "c"]);
    });

    it("should throw an error", () => {
        function passBigIndex() {
            const array = [-1, -2, -3];
            sqrtRange(array, 0, 4); // The last index of array is 2
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});

describe("Racine of all elements", () => {
    it("should return the racine of all elements", () => {
        expect(sqrt([4, 16, 36])).toStrictEqual([Math.sqrt(4), Math.sqrt(16), Math.sqrt(36)]);
        expect(sqrt([0, 0, 0])).toStrictEqual([Math.sqrt(0), Math.sqrt(0), Math.sqrt(0)]);
    });
    it("should return the same values that are not numbers", () => {
        expect(sqrt(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });
});