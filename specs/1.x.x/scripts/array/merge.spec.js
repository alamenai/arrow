import { merge } from "../../../../src/1.x.x/scripts/array/merge"

describe("Merge elements of two arrays", () => {
    it("should return an array with concatenated elements when all the elements are String", () => {
        expect(merge(["a", "b", "c"], ["a"])).toStrictEqual(["aa", "b", "c"]);
        expect(merge(["react", "vue", "angular"], ["wow", "like", "dislike"])).toStrictEqual(["reactwow", "vuelike", "angulardislike"]);
        expect(merge(["react", "vue", "angular", "ember", "preact"], ["wow", "like", "dislike"])).toStrictEqual(["reactwow", "vuelike", "angulardislike", "ember", "preact"]);
    })
    it("should return an array with reduced (sum) elements when all the elements are Number", () => {
        expect(merge([1, 2, 3], [1, 2, 3])).toStrictEqual([2, 4, 6]);
        expect(merge([1, 2, 3, 4, 5], [1, 2, 3])).toStrictEqual([2, 4, 6, 4, 5]);
        expect(merge([1, 2], [1, 2, 3])).toStrictEqual([2, 4, 3]);
    })
    it("should ignore null and undefined values", () => {
        expect(merge([1, 2, 3], [null, undefined, 3])).toStrictEqual([1, 2, 6]);
        expect(merge(["react", "vue", 3], [null, undefined, 3])).toStrictEqual(["react", "vue", 6]);
    })
});

describe("Merge elements of three or more arrays", () => {
    it("should return an array with concatenated elements when all the elements are String", () => {
        expect(merge(["a", "b", "c"], ["a"], ["e", "f"])).toStrictEqual(["aae", "bf", "c"]);
    })
    it("should return an array with reduced (sum) elements when all the elements are Number", () => {
        expect(merge([1, 2], [1, 2, 3], [4, 5])).toStrictEqual([6, 9, 3]);
        expect(merge([1, 2, 3, 4, 5], [1, 2, 3])).toStrictEqual([2, 4, 6, 4, 5]);
        expect(merge([1, 2], [1, 2, 3])).toStrictEqual([2, 4, 3]);
    })
    it("should ignore null and undefined values", () => {
        expect(merge([1, 2, 3], [null, undefined, 3], [null, undefined])).toStrictEqual([1, 2, 6]);
        expect(merge(["react", "vue", 3], [null, undefined, 3], [null, null, null])).toStrictEqual(["react", "vue", 6]);
    })
});