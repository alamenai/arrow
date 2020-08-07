import {
    switchByIndex,
    switchByValue
} from "../../../../src/1.x.x/scripts/array/switch"

describe("Switch two elements by their indexes", () => {
    it("should return array of switched elements", () => {
        expect(switchByIndex([1, 2, 3, 4, 5, 6], 1, 3)).toStrictEqual([1, 4, 3, 2, 5, 6]);
    });
    it("should throw an error", () => {
        function passBigIndex() {
            const array = [1, 2, 3, 4, 5, 6];
            switchByIndex(array, 4, 6); // The last index of array is 5
        }
        expect(passBigIndex).toThrowError("One or both of the indexes are big then the length of the array");
    });
});
describe("Switch two elements by their values", () => {
    it("should return array of switched elements", () => {
        expect(switchByValue([1, 2, 3, 4, 5, 6], 1, 2)).toStrictEqual([2, 1, 3, 4, 5, 6]);
    });
    it("should throw an error", () => {
        function passBigIndex() {
            const array = [1, 2, 3, 4, 5, 6];
            switchByValue(array, 4, 7); // 7 does not exist in the array
        }
        expect(passBigIndex).toThrowError("One or both of the values do not exist in the array");
    });
});