import {
    sign,
    signRange
} from "../../../../../src/1.x.x/scripts/array/math/sign"

describe("Replacing certain values in specific range of elements with their signs", () => {
    it("should return postive sign (+) for only the two first elements", () => {
        expect(signRange([10, 100, 1000], 0, 1)).toStrictEqual(["+", "+", 1000]);
    });
    it("should return negative sign (+) for only the two first elements", () => {
        expect(signRange([-10, -100, 1000], 0, 1)).toStrictEqual(["-", "-", 1000]);
    });

    it("should throw an error", () => {
        function passBigIndex() {
            const array = [-1, -2, -3];
            signRange(array, 0, 4); // The last index of array is 2
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});

describe("Replacing all elements with their sign", () => {
    it("should return positive sign for all elements", () => {
        expect(sign([4, 16, 36])).toStrictEqual(["+", "+", "+"]);
    });
    it("should return negative sign for all elements", () => {
        expect(sign([-4, -16, -36])).toStrictEqual(["-", "-", "-"]);
    });
    it("should return the same values that are not numbers", () => {
        expect(sign(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });
});