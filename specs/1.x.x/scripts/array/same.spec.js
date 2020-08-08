import {
    same
} from "../../../../src/1.x.x/scripts/array/same"

describe("Find same elements between many arrays", () => {
    it("should return an array with the common elements between arrays ", () => {
        expect(same([1, 2], [1, 2, 3], [1, 2, 3, 4])).toStrictEqual([1, 2]);
        expect(same(["a", "b"], ["b", "a"], ["a", "b", "c"])).toStrictEqual(["b", "a"]);
        expect(same([null], [undefined, null], [undefined, null, undefined])).toStrictEqual([null]);
    })
    it("should return an empty array ", () => {
        expect(same([1, 2], [3, 4], [5, 6])).toStrictEqual([]);
    })
});