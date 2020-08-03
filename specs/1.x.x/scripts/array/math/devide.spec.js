import {
    devide,
    devideAll
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

        function passNumber() {
            devide(1, 0, 1, 2)
        }

        function passString() {
            devide("array", 0, 1, 2)
        }

        function passEmptyArray() {
            devide([], 0, 1, 2)
        }

        function passNull() {
            devide(null, 0, 1, 2)
        }

        function passUndefined() {
            devide(undefined, 0, 1, 2)
        }

        function passBigIndex() {
            const array = [-1, -2, -3];
            devide(array, 0, 4, 2); // The last index of array is 2
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
        expect(passEmptyArray).toThrowError("The array is empty");
        expect(passNull).toThrowError("The parameter is null or undefined");
        expect(passUndefined).toThrowError("The parameter is null or undefined");
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
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

    it("should throw an error", () => {

        function passNumber() {
            devideAll(1, 2)
        }

        function passString() {
            devideAll("array", 2)
        }

        function passEmptyArray() {
            devideAll([], 2)
        }

        function passNull() {
            devideAll(null, 2)
        }

        function passUndefined() {
            devideAll(undefined, 2)
        }

        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
        expect(passEmptyArray).toThrowError("The array is empty");
        expect(passNull).toThrowError("The parameter is null or undefined");
        expect(passUndefined).toThrowError("The parameter is null or undefined");
    });
});