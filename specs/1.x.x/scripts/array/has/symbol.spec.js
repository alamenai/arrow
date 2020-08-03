import {
    hasAnySymbol,
    hasAtLeastSymbol,
    hasExactSymbol,
    hasOnceSymbol,
    hasOnlySymbol,
    hasPairSymbol,
} from "../../../../../src/1.x.x/scripts/array/has/symbol";

describe("Array has any element with type Symbol", () => {
    it("should return true if the array has any element with type Symbol", () => {
        expect(hasAnySymbol([1, 1])).toBeTruthy();
        expect(hasAnySymbol(["item-1", "item-2"])).toBeTruthy();
        expect(hasAnySymbol([false, true, [1, 2]])).toBeTruthy();
    });
    it("should return true if the array has only undefined elements", () => {
        expect(hasAnySymbol([undefined, undefined])).toBeTruthy();
    });
    it("should return false if the array has only elements with type Symbol", () => {
        expect(hasAnySymbol([
            Symbol(1),
            Symbol("item"),
        ])).toBeFalsy();
    });
});

describe("Array has at least an element with type Symbol", () => {
    it("should return true if all elements have type Symbol", () => {
        expect(hasAtLeastSymbol([
            Symbol(1),
            Symbol("item"),
        ])).toBeTruthy();
    });
    it("should return true if one element has type Symbol", () => {
        expect(hasAtLeastSymbol([
            [1, 2], true, Symbol("item")
        ])).toBeTruthy();
    });
    it("should return false if there's not an element with type Symbol", () => {
        expect(hasAtLeastSymbol([1, 1])).toBeFalsy();
        expect(hasAtLeastSymbol([1, "item"])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasAtLeastSymbol([undefined, undefined])).toBeFalsy();
    });
});

describe("Array has only one element with type Symbol", () => {
    it("should return true if the array has only one element with type Symbol", () => {
        expect(hasOnceSymbol([
            Symbol(1),
        ])).toBeTruthy();
        expect(hasOnceSymbol([
            Symbol(1), 2,
        ])).toBeTruthy();
        expect(hasOnceSymbol([
            Symbol(1), "item",
        ])).toBeTruthy();
    });
    it("should return false if the array has only elements with type Symbol", () => {
        expect(hasOnceSymbol([
            Symbol(1),
            Symbol(2),
        ])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnceSymbol([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not an element with type Symbol", () => {
        expect(hasOnceSymbol(["item", "item-2"])).toBeFalsy();
        expect(hasOnceSymbol([1, 2])).toBeFalsy();
    });
});

describe("Array has only elements with type Symbol", () => {
    it("should return true if the array has only elements with type Symbol", () => {
        expect(hasOnlySymbol([
            Symbol("a"),
            Symbol(1),
            Symbol(true),
        ])).toBeTruthy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnlySymbol([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not an element with type Symbol", () => {
        expect(hasOnlySymbol(["item", "item-2"])).toBeFalsy();
        expect(hasOnlySymbol([1, 2])).toBeFalsy();
    });
});

describe("Array has pair elements with type Symbol", () => {
    it("should return true if the array has two elements with type Symbol", () => {
        expect(hasPairSymbol([
            Symbol("a"),
            Symbol(1),
        ])).toBeTruthy();
    });
    it("should return false if the array has less then elements with type Symbol", () => {
        expect(hasPairSymbol([
            Symbol("a"),
        ])).toBeFalsy();
    });
    it("should return false if the array has more then elements with type Symbol", () => {
        expect(hasPairSymbol([
            Symbol(1),
            Symbol("a"),
            Symbol(true),
        ])).toBeFalsy();
    });
    it("should return false if the array has not an element with type Symbol", () => {
        expect(hasPairSymbol(["item", "item-2"])).toBeFalsy();
    });
});

describe("Array has exact elements with type Symbol", () => {
    it("should return true if the array has two elements with type Symbol", () => {
        expect(hasExactSymbol([
            Symbol(1),
            Symbol("a"),
        ], 2)).toBeTruthy();
    });
    it("should return true if the array has three elements with type Symbol", () => {
        expect(hasExactSymbol([
            Symbol(1),
            Symbol("a"),
            Symbol(true),
        ], 3)).toBeTruthy();
    });
    it("should return true if the array has two elements with type Symbol", () => {
        expect(hasExactSymbol([
            Symbol(1),
            Symbol("a"), 1,
        ], 2)).toBeTruthy();
    });
    it("should return false if the array has one element with type Symbol", () => {
        expect(hasExactSymbol([
            Symbol("a"), 1,
        ], 0)).toBeFalsy();
    });
    it("should return false if the array has two elements with type Symbol", () => {
        expect(hasExactSymbol([
            Symbol(1),
            Symbol("a"), 1,
        ], 3)).toBeFalsy();
    });
    it("should return false if the array has not an element with type Symbol", () => {
        expect(hasExactSymbol(["item", "item-2"], 2)).toBeFalsy();
    });

    it("should throw error if the second parameter is not a number", () => {
        function passNull() {
            hasExactSymbol([1, null], null);
        }

        function passUndefined() {
            hasExactSymbol([1, null], undefined);
        }

        function passString() {
            hasExactSymbol([1, null], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});