import {
    extractNumber,
    extractArray,
    extractByOddIndex,
    extractByPaiIndex,
    extractNull,
    extractObject,
    extractOdd,
    extractPair,
    extractString,
    extractSymbol
} from "../../../../src/1.x.x/scripts/array/extract"

describe("Extract certain elements based on their types", () => {
    it("should return an array of null elements", () => {
        expect(extractNull(["react", undefined, null, "angular"])).toStrictEqual([null]);
        expect(extractNull([1, 2, undefined])).toStrictEqual([]);
        expect(extractNull(["ember", null, undefined])).toStrictEqual([null]);
    })
    it("should return an array of numbers", () => {
        expect(extractNumber(["react", 1, 2, "angular"])).toStrictEqual([1, 2]);
        expect(extractNumber([1, 2, 3])).toStrictEqual([1, 2, 3]);
        expect(extractNumber([1, 2, undefined])).toStrictEqual([1, 2]);
        expect(extractNumber(["ember", null, undefined])).toStrictEqual([]);
    })
    it("should return an array of strings", () => {
        expect(extractString(["react", 1, 2, "angular"])).toStrictEqual(["react", "angular"]);
        expect(extractString(["react", "vue", "ember"])).toStrictEqual(["react", "vue", "ember"]);
        expect(extractString(["a", "b", undefined])).toStrictEqual(["a", "b"]);
        expect(extractString([null, 1, undefined])).toStrictEqual([]);
    })
    it("should return an array of objects", () => {
        expect(extractObject([{ lng: "fr" }, { lng: "en" }, 2, "angular"])).toStrictEqual([{ lng: "fr" }, { lng: "en" }]);
        expect(extractObject([{ lng: "fr" }, { lng: "en" }])).toStrictEqual([{ lng: "fr" }, { lng: "en" }]);
        expect(extractObject([{ lng: "fr" }, [1, 2, 3]])).toStrictEqual([{ lng: "fr" }]);
        expect(extractObject([{ lng: "fr" }, { lng: "en" }, undefined])).toStrictEqual([{ lng: "fr" }, { lng: "en" }]);
        expect(extractObject([null, "react", undefined])).toStrictEqual([]);
    })
    it("should return an array of arrays", () => {
        expect(extractArray([[1, 2, 3], "react", "angular"])).toStrictEqual([[1, 2, 3]]);
        expect(extractArray([[1, 2, 3], undefined])).toStrictEqual([[1, 2, 3]]);
    })
    it("should return an array of elements that have odd indexes", () => {
        expect(extractByOddIndex(["react", "vue", "angular", "ember"])).toStrictEqual(["vue", "ember"]);
        expect(extractByOddIndex([[1, 2, 3], undefined])).toStrictEqual([undefined]);
    })
    it("should return an array of elements that have pair indexes", () => {
        expect(extractByPaiIndex(["react", "vue", "angular", "ember"])).toStrictEqual(["react", "angular"]);
        expect(extractByPaiIndex([[1, 2, 3], undefined])).toStrictEqual([[1, 2, 3]]);
    })
    it("should return an array of odd elements", () => {
        expect(extractOdd(["react", "vue", "angular"])).toStrictEqual([]);
        expect(extractOdd([[1, 2, 3], undefined])).toStrictEqual([]);
        expect(extractOdd([3, 5, 7, undefined])).toStrictEqual([3, 5, 7]);
    })
    it("should return an array of pair elements", () => {
        expect(extractPair([1, 2, 4, 6, 9])).toStrictEqual([2, 4, 6]);
        expect(extractPair(["react", undefined])).toStrictEqual([]);
        expect(extractPair([2, 6, 8, undefined])).toStrictEqual([2, 6, 8]);
    })
    it("should return an array of elements with type Symbol", () => {
        const vue = Symbol("vue")
        const react = Symbol("react")
        expect(extractSymbol([1, 2, 4, vue, react])).toStrictEqual([vue, react]);
        expect(extractSymbol(["react", undefined])).toStrictEqual([]);
        expect(extractSymbol([2, 6, 8, undefined])).toStrictEqual([]);
    })
});