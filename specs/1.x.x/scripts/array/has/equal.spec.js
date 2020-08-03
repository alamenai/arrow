import {
    equalAll
} from "../../../../../src/1.x.x/scripts/array/has/equal";
describe("Array has equal elements", () => {
    it("should return true if the array has equal boolean value", () => {
        expect(equalAll([true, true])).toBeTruthy();
    });
    it("should return true if the array has equal string values", () => {
        expect(equalAll(["item", "item"])).toBeTruthy();
    });
    it("should return false if the array has equal number values", () => {
        expect(equalAll([1, 1, 1])).toBeTruthy();
    });
    it("should return false if the array has equal null values", () => {
        expect(equalAll([null, null, null])).toBeTruthy();
    });
    it("should return false if the array has equal undefined values", () => {
        expect(equalAll([undefined, undefined, undefined])).toBeTruthy();
    });
});