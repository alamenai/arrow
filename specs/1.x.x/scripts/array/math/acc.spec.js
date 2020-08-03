import {
    accAll,
    accBoolean
} from "../../../../../src/1.x.x/scripts/array/math/acc"

describe("Accumulate all elements", () => {
    it("should return +6", () => {
        expect(accAll([1, 2, 3])).toStrictEqual(6);
    });
    it("should return -6", () => {
        expect(accAll([-1, -2, -3])).toStrictEqual(-6);
    });
    it("should concat all strings in one string", () => {
        expect(accAll(["a", "b", "c"])).toStrictEqual("abc");
    });
    it("should return the result of && between boolean elements", () => {
        expect(accAll([true, false, true])).toStrictEqual(2);
    });

});


describe("Accumulate boolean elements", () => {
    it("should return true", () => {
        expect(accBoolean([true, true, true])).toStrictEqual(true);
    });
    it("should return false", () => {
        expect(accBoolean([false, false, false])).toStrictEqual(false);
    });
    it("should return false", () => {
        expect(accBoolean([false, true, false])).toStrictEqual(false);
    });

});