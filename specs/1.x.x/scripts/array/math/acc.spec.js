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

    it("should throw an error", () => {

        function passNumber() {
            accAll(1)
        }

        function passString() {
            accAll("array")
        }

        function passEmptyArray() {
            accAll([])
        }

        function passNull() {
            accAll(null)
        }

        function passUndefined() {
            accAll(undefined)
        }

        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
        expect(passEmptyArray).toThrowError("The array is empty");
        expect(passNull).toThrowError("The parameter is null or undefined");
        expect(passUndefined).toThrowError("The parameter is null or undefined");
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
    it("should return the same elements for non boolean values", () => {
        expect(accBoolean([1, 2, 3])).toStrictEqual([1, 2, 3]);
        expect(accBoolean(["a", "b", "c"])).toStrictEqual(["a", "b", "c"]);
    });

    it("should throw an error", () => {

        function passNumber() {
            accBoolean(1)
        }

        function passString() {
            accBoolean("array")
        }

        function passEmptyArray() {
            accBoolean([])
        }

        function passNull() {
            accBoolean(null)
        }

        function passUndefined() {
            accBoolean(undefined)
        }

        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
        expect(passEmptyArray).toThrowError("The array is empty");
        expect(passNull).toThrowError("The parameter is null or undefined");
        expect(passUndefined).toThrowError("The parameter is null or undefined");
    });
});