import {
    multiplyRange,
    multiply,
    multiplySelf
} from "../../../../../src/1.x.x/scripts/array/math/multiply"

describe("Multiply a range of elements with specific value", () => {
    it("should return positive values for positive elements and positive multiplier", () => {
        expect(multiplyRange([2, 4, 5], 0, 1, 2)).toStrictEqual([4, 8, 5]);
    });
    it("should return negative values for negative elements and positive multiplier", () => {
        expect(multiplyRange([-2, -4, -6], 0, 1, 2)).toStrictEqual([-4, -8, -6]);
    });
    it("should return positive values for negative elements and negative multiplier", () => {
        expect(multiplyRange([-2, -4, -6], 0, 1, -2)).toStrictEqual([4, 8, -6]);
    });
    it("should return zero value when it multiplies zero (0)", () => {
        expect(multiplyRange([2, 4, 5], 0, 1, 0)).toStrictEqual([0, 0, 5]);
    });
    it("should return the same elements that are not numbers", () => {
        expect(multiplyRange(["a", "b", "c"], 0, 1, 2)).toStrictEqual(["a", "b", "c"]);
    });
    it("should throw an error", () => {
        function passBigIndex() {
            const array = [-1, -2, -3];
            multiplyRange(array, 0, 4, 2); // The last index of array is 2
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});

describe("Multiply element by the next element", () => {
    it("should return positive value for positive elements", () => {
        expect(multiplySelf([6, 2, 3])).toStrictEqual(36);
    });
    it("should return negative value for 2n+1 negative elements", () => {
        expect(multiplySelf([-6, -2, -3])).toStrictEqual(-36);
    });
    it("should return negative value for 2n negative elements", () => {
        expect(multiplySelf([-12, -3, -1, -1])).toStrictEqual(36);
    });
    it("should return zero (0) value for elements that equal 0", () => {
        expect(multiplySelf([0, 0, 0])).toStrictEqual(0);
    });

});

describe("Multiply all elements at the same value", () => {
    it("should return positive values for positive elements and positive multiplier", () => {
        expect(multiply([2, 4, 6], 2)).toStrictEqual([4, 8, 12]);
    });
    it("should return negative values for negative elements and positive multiplier", () => {
        expect(multiply([-2, -4, -6], 2)).toStrictEqual([-4, -8, -12]);
    });
    it("should return positive values for negative elements and negative multiplier", () => {
        expect(multiply([-2, -4, -6], -2)).toStrictEqual([4, 8, 12]);
    });
    it("should return negative zero (0) elements when it multiplies 0", () => {
        expect(multiply([-2, -4, -5], 0)).toStrictEqual([-0, -0, -0]);
    });
    it("should return the same values that are not numbers", () => {
        expect(multiply(["a", "b", "c"], 2)).toStrictEqual(["a", "b", "c"]);
    });
});