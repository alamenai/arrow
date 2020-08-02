import {
    hasAnyNull,
    hasAtLeastNull,
    hasExactNull,
    hasOnceNull,
    hasOnlyNull,
    hasPairNull,
} from "../../../../../src/1.x.x/scripts/array/has/null";

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

describe("Array has any null element", () => {
    it("should return true if the array has any null element", () => {
        expect(hasAnyNull([1, 1])).toBeTruthy();
        expect(hasAnyNull(["item-1", "item-2"])).toBeTruthy();
    });
    it("should return true if the array has only undefined elements", () => {
        expect(hasAnyNull([undefined, undefined])).toBeTruthy();
    });
    it("should return false if the array has only null elements", () => {
        expect(hasAnyNull([null, null])).toBeFalsy();
    });
    it("should throw an error", () => {
        __throwError(hasAnyNull);
    });
});

describe("Array has at least a null element", () => {
    it("should return true if all elements are null", () => {
        expect(hasAtLeastNull([null, null])).toBeTruthy();
    });
    it("should return true if one element is null", () => {
        expect(hasAtLeastNull([null, 1])).toBeTruthy();
    });
    it("should return false if there's not a null element", () => {
        expect(hasAtLeastNull([1, 1])).toBeFalsy();
        expect(hasAtLeastNull([1, "item"])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasAtLeastNull([undefined, undefined])).toBeFalsy();
    });

    it("should throw an error", () => {
        __throwError(hasAtLeastNull);
    });
});

describe("Array has only one null element", () => {
    it("should return true if the array has only one null element", () => {
        expect(hasOnceNull([null])).toBeTruthy();
        expect(hasOnceNull([null, 1])).toBeTruthy();
        expect(hasOnceNull([null, "item"])).toBeTruthy();
    });
    it("should return false if the array has only null elements", () => {
        expect(hasOnceNull([null, null])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnceNull([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not null element", () => {
        expect(hasOnceNull(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(hasOnceNull);
    });
});

describe("Array has only null elements", () => {
    it("should return true if the array has only null elements", () => {
        expect(hasOnlyNull([null])).toBeTruthy();
        expect(hasOnlyNull([null, null])).toBeTruthy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnlyNull([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not null element", () => {
        expect(hasOnlyNull(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(hasOnlyNull);
    });
});

describe("Array has pair null elements", () => {
    it("should return true if the array has two null elements", () => {
        expect(hasPairNull([null, null])).toBeTruthy();
    });
    it("should return false if the array has more then two null elements", () => {
        expect(hasPairNull([null])).toBeFalsy();
    });
    it("should return false if the array has more then two null elements", () => {
        expect(hasPairNull([null, null, null])).toBeFalsy();
    });
    it("should return false if the array has not null element", () => {
        expect(hasPairNull(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(hasPairNull);
    });
});

describe("Array has exact null elements", () => {
    it("should return true if the array has two number elements", () => {
        expect(hasExactNull([null, null], 2)).toBeTruthy();
    });
    it("should return true if the array has three null elements", () => {
        expect(hasExactNull([null, null, null], 3)).toBeTruthy();
    });
    it("should return true if the array has two null elements", () => {
        expect(hasExactNull([null, null, 1], 2)).toBeTruthy();
    });
    it("should return false if the array has one null element", () => {
        expect(hasExactNull([null, 1], 0)).toBeFalsy();
    });
    it("should return false if the array has two null elements", () => {
        expect(hasExactNull([null, null, 1], 3)).toBeFalsy();
    });
    it("should return false if the array has not null element", () => {
        expect(hasExactNull(["item", "item-2"], 2)).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        __throwError(hasExactNull);
    });

    it("should throw error if the second parameter is not a number", () => {
        function passNull() {
            hasExactNull([1, null], null);
        }

        function passUndefined() {
            hasExactNull([1, null], undefined);
        }

        function passString() {
            hasExactNull([1, null], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});