import {
    zero,
    zeroRange
} from "../../../../../src/1.x.x/scripts/array/math/zero"

describe("Replacing certain values in specific range of elements with zeros", () => {
    it("should return zero (0) for only the two first elements", () => {
        expect(zeroRange([10, 100, 1000], 0, 1)).toStrictEqual([0, 0, 1000]);
    });
    it("should return zero (0) for all elements", () => {
        expect(zeroRange([10, 100, 1000], 0, 2)).toStrictEqual([0, 0, 0]);
    });

    it("should throw an error", () => {
        function passBigIndex() {
            const array = [-1, -2, -3];
            zeroRange(array, 0, 4); // The last index of array is 2
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});

describe("Replacing all elements with zero", () => {
    it("should return 0 for all elements", () => {
        expect(zero([4, 16, 36])).toStrictEqual([0, 0, 0]);
        expect(zero([0, 0, 0])).toStrictEqual([0, 0, 0]);
    });
    it("should return the same values that are not numbers", () => {
        expect(zero(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });
});