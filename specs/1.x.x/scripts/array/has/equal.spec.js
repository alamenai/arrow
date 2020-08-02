import ArrayEqual from "../../../../../src/1.x.x/scripts/array/has/equal";

function __throwError(func) {

    function passNumber() {
        func.length === 1 ? func(0) : func(0, 1)
    }

    function passString() {
        func.length === 1 ? func("item") : func("item", 1);
    }

    function passEmptyArray() {
        func.length === 1 ? func([]) : func([], 1);
    }

    function passUndefinedOrNull() {
        func.length === 1 ? func(undefined || null) : func(undefined || null, 1);
    }

    expect(passNumber).toThrowError("The parameter should be an array");
    expect(passString).toThrowError("The parameter should be an array");
    expect(passEmptyArray).toThrowError("The array is empty");
    expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");

}

describe("Array has equal elements", () => {
    it("should return true if the array has equal boolean value", () => {
        expect(ArrayEqual.equalAll([true, true])).toBeTruthy();
    });
    it("should return true if the array has equal string values", () => {
        expect(ArrayEqual.equalAll(['item', 'item'])).toBeTruthy();
    });
    it("should return false if the array has equal number values", () => {
        expect(ArrayEqual.equalAll([1, 1, 1])).toBeTruthy();
    });
    it("should return false if the array has equal null values", () => {
        expect(ArrayEqual.equalAll([null, null, null])).toBeTruthy();
    });
    it("should return false if the array has equal undefined values", () => {
        expect(ArrayEqual.equalAll([undefined, undefined, undefined])).toBeTruthy();
    });
    it("should throw an error", () => {
        __throwError(ArrayEqual.equalAll);
    });
});