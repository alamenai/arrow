import { toLowerCase } from "../../../../src/1.x.x/scripts/array/lowercase"

describe("Convert all elements of an array to lowercase", () => {
    it("should return the same array when all the elements are lowercase", () => {
        expect(toLowerCase(["react", "vue", "ember", "angular"])).toStrictEqual(["react", "vue", "ember", "angular"]);
    })
    it("should ignore null and undefined values", () => {
        expect(toLowerCase([null, "react", undefined, "Vue"])).toStrictEqual([null, "react", undefined, "vue"]);
        expect(toLowerCase([null, null])).toStrictEqual([null, null]);
        expect(toLowerCase([null, undefined, "REACT"])).toStrictEqual([null, undefined, "react"]);
    })
    it("should convert uppercase elements into lowercase elements", () => {
        expect(toLowerCase(["REACT", "ANGULAR", "VUE"])).toStrictEqual(["react", "angular", "vue"]);
        expect(toLowerCase(["ReACT", "AnGULaR", "Vue"])).toStrictEqual(["react", "angular", "vue"]);
    })
});