import {
    sin,
    sinRange
} from "../../../../../src/1.x.x/scripts/array/math/sin"

describe("Sinus values for specific range of elements", () => {
    it("should return Sinus for only the two first elements", () => {
        expect(sinRange([90, 180, 3], 0, 1)).toStrictEqual([Math.sin(90), Math.sin(180), 3]);
    });

    it("should return the same values that are not numbers", () => {
        expect(sinRange(["a", "b", "c"], 0, 1)).toStrictEqual(["a", "b", "c"]);
    });

    it("should throw an error", () => {
        function passBigIndex() {
            const array = [-1, -2, -3];
            sinRange(array, 0, 4); // The last index of array is 2
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});

describe("Sinus for all elements", () => {
    it("should return Sinus of all elements", () => {
        expect(sin([Math.PI, Math.PI, 0])).toStrictEqual([Math.sin(Math.PI), Math.sin(Math.PI), Math.sin(0)]);
        expect(sin([0, 0, 0])).toStrictEqual([Math.sin(0), Math.sin(0), Math.sin(0)]);
    });
    it("should return the same values that are not numbers", () => {
        expect(sin(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });
});