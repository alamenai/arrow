import {
    isBooleanArray,
    isNumberArray,
    isArray
} from "../../../src/1.x.x/helpers/is"

describe("Checking the elements type", () => {
    it("should return true when all elements have type Boolean", () => {
        expect(isBooleanArray([true, false, true])).toStrictEqual(true);
    });
    it("should return false when all elements have not type Boolean", () => {
        expect(isBooleanArray([true, false, 1])).toStrictEqual(false);
    });
    it("should return true when all elements have type Number", () => {
        expect(isNumberArray([1, 2, 3])).toStrictEqual(true);
    });
    it("should return false when all elements have not type Number", () => {
        expect(isNumberArray([1, 2, "item"])).toStrictEqual(false);
    });
})
describe("Checking the parameter if it's an array", () => {
    it("should throw an error", () => {
        throwError()
    })
});

function throwError() {
    function passNumber() {
        isArray(1)
    }

    function passString() {
        isArray("array")
    }

    function passEmptyArray() {
        isArray([])
    }

    function passNull() {
        isArray(null)
    }

    function passUndefined() {
        isArray(undefined)
    }

    expect(passNumber).toThrowError("The parameter should be an array");
    expect(passString).toThrowError("The parameter should be an array");
    expect(passEmptyArray).toThrowError("The array is empty");
    expect(passNull).toThrowError("The parameter is null or undefined");
    expect(passUndefined).toThrowError("The parameter is null or undefined");

}