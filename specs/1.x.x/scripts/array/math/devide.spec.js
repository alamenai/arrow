import {
    devide,
    devideAll,
    devideSelf
} from "../../../../../src/1.x.x/scripts/array/math/devide"

describe("Devide a range of elements at specific value", () => {
    it("should return positive values for positive elements and positive devider", () => {
        expect(devide([2, 4, 5], 0, 1, 2)).toStrictEqual([1, 2, 5]);
    });
    it("should return negative values for negative elements and positive devider", () => {
        expect(devide([-2, -4, -6], 0, 1, 2)).toStrictEqual([-1, -2, -6]);
    });
    it("should return positive values for negative elements and negative devider", () => {
        expect(devide([-2, -4, -6], 0, 1, -2)).toStrictEqual([1, 2, -6]);
    });
    it("should return positive Infinity values when it devides 0", () => {
        expect(devide([2, 4, 5], 0, 1, 0)).toStrictEqual([Infinity, Infinity, 5]);
    });
    it("should return negative Infinity values when it devides 0", () => {
        expect(devide([-2, -4, 5], 0, 1, 0)).toStrictEqual([-Infinity, -Infinity, 5]);
    });
    it("should return the same elements that are not numbers", () => {
        expect(devide(["a", "b", "c"], 0, 1, 2)).toStrictEqual(["a", "b", "c"]);
    });
    it("should throw an error", () => {
        function passBigIndex() {
            const array = [-1, -2, -3];
            devide(array, 0, 4, 2); // The last index of array is 2
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});

describe("Devide element by the next element", () => {
    it("should return positive value for positive elements and positive devider", () => {
        expect(devideSelf([6, 2, 3])).toStrictEqual(1);
    });
    it("should return negative value for 2n+1 negative elements", () => {
        expect(devideSelf([-6, -2, -3])).toStrictEqual(-1);
    });
    it("should return negative value for 2n+1 negative elements", () => {
        expect(devideSelf([-12, -3, -2, -2])).toStrictEqual(1);
    });
    it("should return NaN value for elements that equal 0 or Infinity", () => {
        expect(devideSelf([0, 0, 0])).toStrictEqual(NaN);
        expect(devideSelf([Infinity, Infinity, Infinity])).toStrictEqual(NaN);
    });

});

describe("Devide all elements at the same value", () => {
    it("should return positive values for positive elements and positive devider", () => {
        expect(devideAll([2, 4, 6], 2)).toStrictEqual([1, 2, 3]);
    });
    it("should return negative values for negative elements and positive devider", () => {
        expect(devideAll([-2, -4, -6], 2)).toStrictEqual([-1, -2, -3]);
    });
    it("should return positive values for negative elements and negative devider", () => {
        expect(devideAll([-2, -4, -6], 2)).toStrictEqual([-1, -2, -3]);
    });
    it("should return positive Infinity elements when it devides 0", () => {
        expect(devideAll([2, 4, 5], 0)).toStrictEqual([Infinity, Infinity, Infinity]);
    });
    it("should return negative Infinity elements when it devides 0", () => {
        expect(devideAll([-2, -4, -5], 0)).toStrictEqual([-Infinity, -Infinity, -Infinity]);
    });
    it("should return the same values that are not numbers", () => {
        expect(devideAll(["a", "b", "c"], 2)).toStrictEqual(["a", "b", "c"]);
    });
});