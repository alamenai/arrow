import { toUpperCase } from "../../../../src/1.x.x/scripts/array/uppercase"

describe("Convert all elements of an array to uppercase", () => {
    it("should return the same array when all the elements are uppercase", () => {
        expect(toUpperCase(["react", "vue", "ember", "angular"])).toStrictEqual(["REACT", "VUE", "EMBER", "ANGULAR"]);
    })
    it("should ignore null and undefined values", () => {
        expect(toUpperCase([null, "react", undefined, "vue"])).toStrictEqual([null, "REACT", undefined, "VUE"]);
        expect(toUpperCase([null, null])).toStrictEqual([null, null]);
        expect(toUpperCase([null, undefined, "react"])).toStrictEqual([null, undefined, "REACT"]);
    })
    it("should convert lowercase elements into uppercase elements", () => {
        expect(toUpperCase(["react", "angular", "vue"])).toStrictEqual(["REACT", "ANGULAR", "VUE"]);
        expect(toUpperCase(["ReACT", "AnGULaR", "Vue"])).toStrictEqual(["REACT", "ANGULAR", "VUE"]);
    })
});