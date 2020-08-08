import {
    howManyObject,
    howManyArray,
    howManyBoolean,
    howManyInfinity,
    howManyPair,
    howManyNull,
    howManyNumber,
    howManyOdd,
    howManyString
} from "../../../../src/1.x.x/scripts/array/occurrence"

describe("Count element with type number in an array", () => {
    it("should return 1 ", () => {
        expect(howManyNumber([1, "ala", null, undefined])).toStrictEqual(1);
    })
    it("should return 0", () => {
        expect(howManyNumber(["a", "b", "c"])).toStrictEqual(0);
    })
});
describe("Count elements with type string in an array", () => {
    it("should return 1 ", () => {
        expect(howManyString([1, "ala", null, undefined])).toStrictEqual(1);
    })
    it("should return 0", () => {
        expect(howManyString([3, 2, 1])).toStrictEqual(0);
    })
});
describe("Count elements with type object in an array", () => {
    it("should return 1 ", () => {
        expect(howManyObject([1, { name: "ala" }, null, undefined])).toStrictEqual(1);
    })
    it("should return 0", () => {
        expect(howManyObject([3, 2, 1])).toStrictEqual(0);
    })
});
describe("Count elements with type boolean in an array", () => {
    it("should return 1 ", () => {
        expect(howManyBoolean([1, true, null, undefined])).toStrictEqual(1);
    })
    it("should return 0", () => {
        expect(howManyBoolean([3, 2, 1])).toStrictEqual(0);
    })
});
describe("Count elements with type array in an array", () => {
    it("should return 1 ", () => {
        expect(howManyArray([1, [1, 2], null, undefined])).toStrictEqual(1);
    })
    it("should return 0", () => {
        expect(howManyArray([3, 2, 1])).toStrictEqual(0);
    })
});
describe("Count elements with Infinity value in an array", () => {
    it("should return 1 ", () => {
        expect(howManyInfinity([1, Infinity, null, undefined])).toStrictEqual(1);
    })
    it("should return 0", () => {
        expect(howManyInfinity([3, 2, 1])).toStrictEqual(0);
    })
});
describe("Count elements with null value in an array", () => {
    it("should return 1 ", () => {
        expect(howManyNull([1, Infinity, null, undefined])).toStrictEqual(1);
    })
    it("should return 0", () => {
        expect(howManyNull([3, 2, 1])).toStrictEqual(0);
    })
});
describe("Count elements with odd value in an array", () => {
    it("should return 1 ", () => {
        expect(howManyOdd([1, 3, null, undefined])).toStrictEqual(2);
    })
    it("should return 0", () => {
        expect(howManyOdd([2, 4, 4])).toStrictEqual(0);
    })
});
describe("Count elements with pair value in an array", () => {
    it("should return 1 ", () => {
        expect(howManyPair([2, 4, null, undefined])).toStrictEqual(2);
    })
    it("should return 0", () => {
        expect(howManyPair([1, 3, 7])).toStrictEqual(0);
    })
});