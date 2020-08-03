import {
    tan,
    tanRange
} from "../../../../../src/1.x.x/scripts/array/math/tan"

describe("Tangent values for specific range of elements", () => {
    it("should return Sinus for only the two first elements", () => {
        expect(tanRange([90, 180, 3], 0, 1)).toStrictEqual([Math.tan(90), Math.tan(180), 3]);
    });

    it("should return the same values that are not numbers", () => {
        expect(tanRange(["a", "b", "c"], 0, 1)).toStrictEqual(["a", "b", "c"]);
    });

    it("should throw an error", () => {
        function passBigIndex() {
            const array = [-1, -2, -3];
            tanRange(array, 0, 4); // The last index of array is 2
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});

describe("Tangent for all elements", () => {
    it("should return tangent of all elements", () => {
        expect(tan([Math.PI, Math.PI, 0])).toStrictEqual([Math.tan(Math.PI), Math.tan(Math.PI), Math.tan(0)]);
        expect(tan([0, 0, 0])).toStrictEqual([Math.tan(0), Math.tan(0), Math.tan(0)]);
    });
    it("should return the same values that are not numbers", () => {
        expect(tan(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });
});