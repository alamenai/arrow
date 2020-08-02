import {
    hasAnyString,
    hasAtLeastString,
    hasExactString,
    hasOnceString,
    hasOnlyString,
    hasPairString,
} from "../../../../../src/1.x.x/scripts/array/has/string";

function __throwError(func) {
    function passNumber() {
        func.length === 1 ? func(0) : func(0, 1);
    }

    function passString() {
        func.length === 1 ? func("item") : func("item", 1);
    }

    function passEmptyArray() {
        func.length === 1 ? func([]) : func([], 1);
    }

    function passUndefinedOrNull() {
        func.length === 1 ? func(undefined || null) : func(undefined || null, 1);
    }

    expect(passNumber).toThrowError("The parameter should be an array");
    expect(passString).toThrowError("The parameter should be an array");
    expect(passEmptyArray).toThrowError("The array is empty");
    expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
}

describe("Array has any element with type String", () => {
    it("should return true if the array has any element with type String", () => {
        expect(hasAnyString([1, 1])).toBeTruthy();
        expect(hasAnyString([{
            a: 1
        }, {
            b: 2
        }])).toBeTruthy();
        expect(hasAnyString([false, true])).toBeTruthy();
    });
    it("should return true if the array has only undefined elements", () => {
        expect(hasAnyString([undefined, undefined])).toBeTruthy();
    });
    it("should return false if the array has only elements with type String", () => {
        expect(hasAnyString([
            "item-0",
            "item-1",
        ])).toBeFalsy();
    });
    it("should throw an error", () => {
        __throwError(hasAnyString);
    });
});

describe("Array has at least an element with type String", () => {
    it("should return true if all elements have type String", () => {
        expect(hasAtLeastString([
            "item-0",
            "item-1",
            "item-2"
        ])).toBeTruthy();
    });
    it("should return true if one element has type String", () => {
        expect(hasAtLeastString([
            "item", 1, true,
        ])).toBeTruthy();
    });
    it("should return false if there's not an element with type String", () => {
        expect(hasAtLeastString([1, 1])).toBeFalsy();
        expect(hasAtLeastString([1, true])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasAtLeastString([undefined, undefined])).toBeFalsy();
    });
    it("should throw an error", () => {
        __throwError(hasAtLeastString);
    });
});

describe("Array has only one element with type String", () => {
    it("should return true if the array has only one element with type String", () => {
        expect(hasOnceString([
            1, "item",
        ])).toBeTruthy();
        expect(hasOnceString([
            "item", true,
        ])).toBeTruthy();
    });
    it("should return false if the array has only elements with type String", () => {
        expect(hasOnceString([
            "item-0",
            "item-1",
            "item-2"
        ])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnceString([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not an element with type String", () => {
        expect(hasOnceString([1, 2])).toBeFalsy();
        expect(hasOnceString([false, true])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(hasOnceString);
    });
});

describe("Array has only elements with type String", () => {
    it("should return true if the array has only elements with type String", () => {
        expect(hasOnlyString([
            "1",
            "item"
        ])).toBeTruthy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnlyString([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not an element with type String", () => {
        expect(hasOnlyString([1, 2, 3])).toBeFalsy();
        expect(hasOnlyString([1, true, undefined])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(hasOnlyString);
    });
});

describe("Array has pair elements with type String", () => {
    it("should return true if the array has two elements with type String", () => {
        expect(hasPairString([
            "item",
            "item-1",
        ])).toBeTruthy();
    });
    it("should return false if the array has less then elements with type String", () => {
        expect(hasPairString([
            "item",
        ])).toBeFalsy();
    });
    it("should return false if the array has more then elements with type String", () => {
        expect(hasPairString([
            "item",
            "item-1",
            "item-2",
        ])).toBeFalsy();
    });
    it("should return false if the array has not an element with type String", () => {
        expect(hasPairString([1, 2, 3])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(hasPairString);
    });
});

describe("Array has exact elements with type String", () => {
    it("should return true if the array has two elements with type String", () => {
        expect(hasExactString([
            "item-1",
            "item-2",
        ], 2)).toBeTruthy();
    });
    it("should return true if the array has three elements with type String", () => {
        expect(hasExactString([
            "a",
            "b",
            "c",
        ], 3)).toBeTruthy();
    });
    it("should return true if the array has two elements with type String", () => {
        expect(hasExactString([
            "item-1",
            "item-2", 1,
        ], 2)).toBeTruthy();
    });
    it("should return false if the array has one element with type String", () => {
        expect(hasExactString([
            "item", 1,
        ], 0)).toBeFalsy();
    });
    it("should return false if the array has two elements with type String", () => {
        expect(hasExactString([
            "item-1",
            "item-2", 1,
        ], 3)).toBeFalsy();
    });
    it("should return false if the array has not an element with type String", () => {
        expect(hasExactString([1, 2], 2)).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        __throwError(hasExactString);
    });

    it("should throw error if the second parameter is not a number", () => {
        function passNull() {
            hasExactString([1, null], null);
        }

        function passUndefined() {
            hasExactString([1, null], undefined);
        }

        function passString() {
            hasExactString([1, null], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});