import {
    hasAnyArray,
    hasAtLeastArray,
    hasExactArray,
    hasOnceArray,
    hasOnlyArray,
    hasPairArray,
} from "../../../../../src/1.x.x/scripts/array/has/array";


describe("Array has any element with type Array", () => {
    it("should return true if the array has any element with type Array", () => {
        expect(hasAnyArray([1, 1])).toBeTruthy();
        expect(hasAnyArray(["item-1", "item-2"])).toBeTruthy();
        expect(hasAnyArray([false, true])).toBeTruthy();
    });
    it("should return true if the array has only undefined values", () => {
        expect(hasAnyArray([undefined, undefined])).toBeTruthy();
    });
    it("should return false if the array has only elements with type Array", () => {
        expect(hasAnyArray([
            [1, 2],
            ["item-0", "item-1"],
        ])).toBeFalsy();
    });
});

describe("Array has at least an element with type Array", () => {
    it("should return true if all elements have type Array", () => {
        expect(hasAtLeastArray([
            [1, 2],
            ["item-0", "item-1"],
        ])).toBeTruthy();
    });
    it("should return true if one element has type Array", () => {
        expect(hasAtLeastArray([
            [1, 2], true,
        ])).toBeTruthy();
    });
    it("should return false if there's not an element with type Array", () => {
        expect(hasAtLeastArray([1, 1])).toBeFalsy();
        expect(hasAtLeastArray([1, "item"])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasAtLeastArray([undefined, undefined])).toBeFalsy();
    });
});

describe("Array has only one element with type Array", () => {
    it("should return true if the array has only one element with type Array", () => {
        expect(hasOnceArray([
            [1, 2],
        ])).toBeTruthy();
        expect(hasOnceArray([
            [1, 2], 1,
        ])).toBeTruthy();
        expect(hasOnceArray([
            [1, 2], "item",
        ])).toBeTruthy();
    });
    it("should return false if the array has only elements with type Array", () => {
        expect(hasOnceArray([
            [1, 2],
            [3, 4],
        ])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnceArray([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not an element with type Array", () => {
        expect(hasOnceArray(["item", "item-2"])).toBeFalsy();
        expect(hasOnceArray([1, 2])).toBeFalsy();
    });
});

describe("Array has only elements with type Array", () => {
    it("should return true if the array has only elements with type Array", () => {
        expect(hasOnlyArray([
            [1],
            [2, 3],
            ["item"],
        ])).toBeTruthy();
        expect(hasOnlyArray([
            [undefined],
            [undefined],
        ])).toBeTruthy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnlyArray([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not an element with type Array", () => {
        expect(hasOnlyArray(["item", "item-2"])).toBeFalsy();
        expect(hasOnlyArray([1, 2])).toBeFalsy();
    });
});

describe("Array has pair elements with type Array", () => {
    it("should return true if the array has two elements with type Array", () => {
        expect(hasPairArray([
            [1, 2],
            [1, 3],
        ])).toBeTruthy();
    });
    it("should return false if the array has less then elements with type Array", () => {
        expect(hasPairArray([
            [1, 2],
        ])).toBeFalsy();
    });
    it("should return false if the array has more then elements with type Array", () => {
        expect(hasPairArray([
            [1, 2],
            [3, 4],
            [5, 6],
        ])).toBeFalsy();
    });
    it("should return false if the array has not an element with type Array", () => {
        expect(hasPairArray(["item", "item-2"])).toBeFalsy();
    });
});

describe("Array has exact elements with type Array", () => {
    it("should return true if the array has two elements with type Array", () => {
        expect(hasExactArray([
            [1, 2],
            [3, 4],
        ], 2)).toBeTruthy();
    });
    it("should return true if the array has three elements with type Array", () => {
        expect(hasExactArray([
            [1, 2],
            [true, false],
            ["item", "item-1"],
        ], 3)).toBeTruthy();
    });
    it("should return true if the array has two elements with type Array", () => {
        expect(hasExactArray([
            [1, 2],
            [3, 4], 1,
        ], 2)).toBeTruthy();
    });
    it("should return false if the array has one element with type Array", () => {
        expect(hasExactArray([
            [1, 2], 1,
        ], 0)).toBeFalsy();
    });
    it("should return false if the array has two elements with type Array", () => {
        expect(hasExactArray([
            [1, 2],
            [3, 4], 1,
        ], 3)).toBeFalsy();
    });
    it("should return false if the array has not an element with type Array", () => {
        expect(hasExactArray(["item", "item-2"], 2)).toBeFalsy();
    });

    it("should throw error if the second parameter is not a number", () => {
        function passNull() {
            hasExactArray([1, null], null);
        }

        function passUndefined() {
            hasExactArray([1, null], undefined);
        }

        function passString() {
            hasExactArray([1, null], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});