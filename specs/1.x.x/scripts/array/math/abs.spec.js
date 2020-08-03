import {
    abs,
    absAll
} from "../../../../../src/1.x.x/scripts/array/math/abs"

describe("Absolute values for specific range of elements", () => {
    it("should return positive values for positive values", () => {
        expect(abs([1, 2, 3], 0, 1)).toStrictEqual([1, 2, 3]);
    });
    it("should return positive values for the negative values", () => {
        expect(abs([-1, -2, -3], 0, 1)).toStrictEqual([1, 2, -3]);
    });
    it("should return positive values for the negative values and skip values with type is not equal to number", () => {
        expect(abs([-1, -2, -3, "a", "b"], 0, 1)).toStrictEqual([1, 2, -3, "a", "b"]);
    });
    it("should return the same values that are not numbers", () => {
        expect(abs(["a", "b", "c"], 0, 1)).toStrictEqual(["a", "b", "c"]);
    });

    it("should throw an error", () => {

        function passNumber() {
            abs(1, 0, 1)
        }

        function passString() {
            abs("array", 0, 1)
        }

        function passEmptyArray() {
            abs([], 0, 1)
        }

        function passNull() {
            abs(null, 0, 1)
        }

        function passUndefined() {
            abs(undefined, 0, 1)
        }

        function passBigIndex() {
            const array = [-1, -2, -3];
            abs(array, 0, 4); // The last index of array is 2
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
        expect(passEmptyArray).toThrowError("The array is empty");
        expect(passNull).toThrowError("The parameter is null or undefined");
        expect(passUndefined).toThrowError("The parameter is null or undefined");
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });
});

describe("Absolute values for all elements", () => {
    it("should return positive values for positive values", () => {
        expect(absAll([1, 2, 3])).toStrictEqual([1, 2, 3]);
    });
    it("should return positive values for the negative values", () => {
        expect(absAll([-1, -2, -3])).toStrictEqual([1, 2, 3]);
    });
    it("should return positive values for the negative values and skip values with type is not equal to number", () => {
        expect(absAll([-1, -2, -3, "a", "b"])).toStrictEqual([1, 2, 3, "a", "b"]);
    });
    it("should return the same values that are not numbers", () => {
        expect(absAll(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });

    it("should throw an error", () => {

        function passNumber() {
            absAll(1)
        }

        function passString() {
            absAll("array")
        }

        function passEmptyArray() {
            absAll([])
        }

        function passNull() {
            absAll(null)
        }

        function passUndefined() {
            absAll(undefined)
        }

        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
        expect(passEmptyArray).toThrowError("The array is empty");
        expect(passNull).toThrowError("The parameter is null or undefined");
        expect(passUndefined).toThrowError("The parameter is null or undefined");
    });
});