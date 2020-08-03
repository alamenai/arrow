import {
    uniqueAll
} from "../../../../../src/1.x.x/scripts/array/has/unique";

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

});