import {
    uniqueAll
} from "../../../../../src/1.x.x/scripts/array/has/unique";

function __throwError(func) {
    function passNumber() {
        func.length === 1 ? func(0) : func(0, 1);
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

describe("Array has unique elements", () => {
    it("should return true if the array has only one element", () => {
        expect(uniqueAll([1])).toBeTruthy();
        expect(uniqueAll(["item"])).toBeTruthy();
        expect(uniqueAll([true])).toBeTruthy();
    });
    it("should return true if the array has unique boolean elements", () => {
        expect(uniqueAll([true, false])).toBeTruthy();
    });
    it("should return true if the array has unique string elements", () => {
        expect(uniqueAll(["item-0", "item-1"])).toBeTruthy();
    });
    it("should return false if the array has unique number elements", () => {
        expect(uniqueAll([1, 2, 3])).toBeTruthy();
    });
    it("should return false if the array has same boolean elements", () => {
        expect(uniqueAll([false, false])).toBeFalsy();
    });
    it("should return false if the array has same string elements", () => {
        expect(uniqueAll(["item-0", "item-0"])).toBeFalsy();
    });
    it("should return false if the array has same number elements", () => {
        expect(uniqueAll([1, 1, 1])).toBeFalsy();
    });
    it("should return false if the array has some equal elements", () => {
        expect(uniqueAll([1, 1, 2, 2, 3])).toBeFalsy();
    });

    it("should throw an error", () => {
        __throwError(uniqueAll);
    });
});