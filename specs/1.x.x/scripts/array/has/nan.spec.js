import {
    hasAnyNaN,
    hasAtLeastNaN,
    hasExactNaN,
    hasOnceNaN,
    hasOnlyNaN,
    hasPairNaN,
} from "../../../../../src/1.x.x/scripts/array/has/nan";

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

describe("Array has any NaN element", () => {
    it("should return true if the array has any NaN element", () => {
        expect(hasAnyNaN([1, 1])).toBeTruthy();
        expect(hasAnyNaN(["item-1", "item-2"])).toBeTruthy();
    });
    it("should return true if the array has only undefined elements", () => {
        expect(hasAnyNaN([undefined, undefined])).toBeTruthy();
    });
    it("should return false if the array has only NaN elements", () => {
        expect(hasAnyNaN([NaN, NaN])).toBeFalsy();
    });
    it("should throw an error", () => {
        __throwError(hasAnyNaN);
    });
});

describe("Array has at least a NaN element", () => {
    it("should return true if all elements are NaN", () => {
        expect(hasAtLeastNaN([NaN, NaN, NaN])).toBeTruthy();
    });
    it("should return true if one element is NaN", () => {
        expect(hasAtLeastNaN([null, NaN])).toBeTruthy();
        expect(hasAtLeastNaN([1, 2, NaN])).toBeTruthy();
    });
    it("should return false if there's not a null element", () => {
        expect(hasAtLeastNaN([1, 1])).toBeFalsy();
        expect(hasAtLeastNaN([1, "item"])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasAtLeastNaN([undefined, undefined])).toBeFalsy();
    });

    it("should throw an error", () => {
        __throwError(hasAtLeastNaN);
    });
});

describe("Array has only one NaN element", () => {
    it("should return true if the array has only one NaN element", () => {
        expect(hasOnceNaN([NaN])).toBeTruthy();
        expect(hasOnceNaN([NaN, 1])).toBeTruthy();
        expect(hasOnceNaN([NaN, "item"])).toBeTruthy();
    });
    it("should return false if the array has only NaN elements", () => {
        expect(hasOnceNaN([NaN, NaN])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnceNaN([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not NaN element", () => {
        expect(hasOnceNaN(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(hasOnceNaN);
    });
});

describe("Array has only NaN elements", () => {
    it("should return true if the array has only NaN elements", () => {
        expect(hasOnlyNaN([NaN])).toBeTruthy();
        expect(hasOnlyNaN([NaN, NaN])).toBeTruthy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnlyNaN([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not NaN element", () => {
        expect(hasOnlyNaN(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(hasOnlyNaN);
    });
});

describe("Array has pair NaN elements", () => {
    it("should return true if the array has two NaN elements", () => {
        expect(hasPairNaN([NaN, NaN])).toBeTruthy();
    });
    it("should return false if the array has more then two NaN elements", () => {
        expect(hasPairNaN([NaN])).toBeFalsy();
    });
    it("should return false if the array has more then two NaN elements", () => {
        expect(hasPairNaN([NaN, NaN, NaN])).toBeFalsy();
    });
    it("should return false if the array has not NaN element", () => {
        expect(hasPairNaN(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(hasPairNaN);
    });
});

describe("Array has exact NaN elements", () => {
    it("should return true if the array has two NaN elements", () => {
        expect(hasExactNaN([NaN, NaN], 2)).toBeTruthy();
    });
    it("should return true if the array has three NaN elements", () => {
        expect(hasExactNaN([NaN, NaN, NaN], 3)).toBeTruthy();
    });
    it("should return true if the array has two NaN elements", () => {
        expect(hasExactNaN([NaN, NaN, 1], 2)).toBeTruthy();
    });
    it("should return false if the array has one NaN element", () => {
        expect(hasExactNaN([NaN, 1], 0)).toBeFalsy();
    });
    it("should return false if the array has two NaN elements", () => {
        expect(hasExactNaN([NaN, NaN, 1], 3)).toBeFalsy();
    });
    it("should return false if the array has not NaN element", () => {
        expect(hasExactNaN(["item", "item-2"], 2)).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        __throwError(hasExactNaN);
    });

    it("should throw error if the second parameter is not a number", () => {
        function passNull() {
            hasExactNaN([1, null], null);
        }

        function passUndefined() {
            hasExactNaN([1, null], undefined);
        }

        function passString() {
            hasExactNaN([1, null], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});