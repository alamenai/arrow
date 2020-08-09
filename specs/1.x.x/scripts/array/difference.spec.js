import {
    difference
} from "../../../../src/1.x.x/scripts/array/difference"

describe("Find different elements between many arrays", () => {
    it("should return an array with the common elements between arrays ", () => {
        expect(difference([1, 2], [1, 2, 3], [1, 2, 3, 4])).toStrictEqual([3, 4]);
        expect(difference(["a", "b"], ["b", "a"], ["a", "b", "c"])).toStrictEqual(["c"]);
        expect(difference([null], [undefined, null], [undefined, null, "Ala"])).toStrictEqual([undefined, "Ala"]);
    })
    it("should return an empty array ", () => {
        expect(difference([1, 2], [1, 2], [1, 2])).toStrictEqual([]);
    })

    it("should return the original array ", () => {
        expect(difference([1, 2])).toStrictEqual([1, 2]);
    })
});