import {
    round,
    roundRange
} from "../../../../../src/1.x.x/scripts/array/math/round"

describe("Rounded values for specific range of elements", () => {
    it("should return positive values for positive values", () => {
        expect(roundRange([1.2, 2.6, 3], 0, 1)).toStrictEqual([1, 3, 3]);
    });
    it("should return positive values for the negative values", () => {
        expect(roundRange([-1.2, -2.6, -3], 0, 1)).toStrictEqual([-1, -3, -3]);
    });
    it("should skip values with type is not equal to number", () => {
        expect(roundRange([-1.2, -2.6, -3, "a", "b"], 0, 1)).toStrictEqual([-1, -3, -3, "a", "b"]);
    });
    it("should return the same values that are not numbers", () => {
        expect(roundRange(["a", "b", "c"], 0, 1)).toStrictEqual(["a", "b", "c"]);
    });
    it("should throw an error", () => {

        function passBigIndex() {
            const array = [-1, -2, -3];
            roundRange(array, 0, 4); // The last index of array is 2
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});

describe("Rounded values for all elements", () => {
    it("should return positive values for positive values", () => {
        expect(round([1.2, 2.8, 3])).toStrictEqual([1, 3, 3]);
    });
    it("should return positive values for the negative values", () => {
        expect(round([-1.2, -2.8, -3])).toStrictEqual([-1, -3, -3]);
    });
    it("should skip values with type is not equal to number", () => {
        expect(round([-1, -2.8, -3.8, "a", "b"])).toStrictEqual([-1, -3, -4, "a", "b"]);
    });
    it("should return the same values that are not numbers", () => {
        expect(round(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });
});