import {
    replace,
    replaceMany
} from "../../../../src/1.x.x/scripts/array/replace"

describe("Replace element with other element in an array", () => {
    it("should replace ala with Jhon ", () => {
        expect(replace([1, "ala", null, undefined], "ala", "Jhon")).toStrictEqual([1, "Jhon", null, undefined]);
    })
    it("should return the original array", () => {
        expect(replace([1, "ala", null, undefined], "Klark", "Jhon")).toStrictEqual([1, "ala", null, undefined]);
    })
});

describe("Replace many elements with other elements in an array", () => {
    it("should replace null and undefined with Jhon and Clark ", () => {
        expect(replaceMany(["Emma", "Ala", null, undefined], [null, undefined], ["Jhon", "Clark"])).toStrictEqual(["Emma", "Ala", "Jhon", "Clark"]);
    })
    it("should return the original array", () => {
        expect(replaceMany(["Emma", "Ala", null, undefined], [1, 2], ["Jhon", "Clark"])).toStrictEqual(["Emma", "Ala", null, undefined]);
    })
});