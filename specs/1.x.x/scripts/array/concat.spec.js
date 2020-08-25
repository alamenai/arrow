import { concat } from "../../../../src/1.x.x/scripts/array/concat"

describe("Concat a value to elements of array", () => {
    it("should return an array with the elements concatenated with the value", () => {
        expect(concat([1, 2, 3, 4, 5], 2)).toStrictEqual([12, 22, 32, 42, 52]);
        expect(concat(["1", "2", "3", "4", "5"], 2)).toStrictEqual([12, 22, 32, 42, 52]);
        expect(concat(["a", "b", "c", "d", "e"], "g")).toStrictEqual(["ag", "bg", "cg", "dg", "eg"]);
    })
    it("should ignore null and undefined values", () => {
        expect(concat([null, "1", undefined, 6, "Hi"], "a")).toStrictEqual([null, "1a", undefined, "6a", "Hia"]);
        expect(concat([null, null], "a")).toStrictEqual([null, null]);
    })
    it("should throw an error when the value is null or undefined", () => {

        const passNull = () => {
            const arr = ["a", "b", "c"]
            const value = null
            concat(arr, value)
        }
        const passUndefined = () => {
            const arr = [undefined, undefined, undefined]
            const value = undefined
            concat(arr, value)
        }

        expect(passNull).toThrowError("null or undefined values are not accepted for the concatenation")
        expect(passUndefined).toThrowError("null or undefined values are not accepted for the concatenation");
    });
});