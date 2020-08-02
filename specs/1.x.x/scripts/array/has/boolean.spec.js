import ArrayBoolean from "../../../../../src/1.x.x/scripts/array/has/boolean";

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

describe("Array has any boolean value", () => {
    it("should return true if the array has any boolean value", () => {
        expect(ArrayBoolean.hasAnyBoolean([1, 1])).toBeTruthy();
        expect(ArrayBoolean.hasAnyBoolean(["item-1", "item-2"])).toBeTruthy();
    });
    it("should return true if the array has only undefined values", () => {
        expect(ArrayBoolean.hasAnyBoolean([undefined, undefined])).toBeTruthy();
    });
    it("should return false if the array has only boolean values", () => {
        expect(ArrayBoolean.hasAnyBoolean([false, true])).toBeFalsy();
    });
    it("should throw an error", () => {
        __throwError(ArrayBoolean.hasAnyBoolean);
    });
});

describe("Array has at least a boolean value", () => {
    it("should return true if all values are boolean", () => {
        expect(ArrayBoolean.hasAtLeastBoolean([false, true])).toBeTruthy();
    });
    it("should return true if one value is boolean", () => {
        expect(ArrayBoolean.hasAtLeastBoolean([true, 1])).toBeTruthy();
    });
    it("should return false if there's not a boolean value", () => {
        expect(ArrayBoolean.hasAtLeastBoolean([1, 1])).toBeFalsy();
        expect(ArrayBoolean.hasAtLeastBoolean([1, "item"])).toBeFalsy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(ArrayBoolean.hasAtLeastBoolean([undefined, undefined])).toBeFalsy();
    });

    it("should throw an error", () => {
        __throwError(ArrayBoolean.hasAtLeastBoolean);
    });
});

describe("Array has only one boolean value", () => {
    it("should return true if the array has only one boolean value", () => {
        expect(ArrayBoolean.hasOnceBoolean([true])).toBeTruthy();
        expect(ArrayBoolean.hasOnceBoolean([false, 1])).toBeTruthy();
        expect(ArrayBoolean.hasOnceBoolean([true, "item"])).toBeTruthy();
    });
    it("should return false if the array has only boolean values", () => {
        expect(ArrayBoolean.hasOnceBoolean([true, false])).toBeFalsy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(ArrayBoolean.hasOnceBoolean([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not boolean value", () => {
        expect(ArrayBoolean.hasOnceBoolean(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(ArrayBoolean.hasOnceBoolean);
    });
});

describe("Array has only boolean values", () => {
    it("should return true if the array has only boolean values", () => {
        expect(ArrayBoolean.hasOnlyBoolean([true])).toBeTruthy();
        expect(ArrayBoolean.hasOnlyBoolean([false, true])).toBeTruthy();
        expect(ArrayBoolean.hasOnlyBoolean([false, false, true])).toBeTruthy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(ArrayBoolean.hasOnlyBoolean([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not boolean value", () => {
        expect(ArrayBoolean.hasOnlyBoolean(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(ArrayBoolean.hasOnlyBoolean);
    });
});

describe("Array has pair boolean values", () => {
    it("should return true if the array has two boolean values", () => {
        expect(ArrayBoolean.hasPairBoolean([false, true])).toBeTruthy();
    });
    it("should return false if the array has less then two boolean values", () => {
        expect(ArrayBoolean.hasPairBoolean([false])).toBeFalsy();
    });
    it("should return false if the array has more then two boolean values", () => {
        expect(ArrayBoolean.hasPairBoolean([false, true, false])).toBeFalsy();
    });
    it("should return false if the array has not boolean value", () => {
        expect(ArrayBoolean.hasPairBoolean(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(ArrayBoolean.hasPairBoolean);
    });
});

describe("Array has exact boolean values", () => {
    let numberCount = 1; // Total of numbers the user want to find

    it("should return true if the array has two boolean values", () => {
        expect(ArrayBoolean.hasExactBoolean([false, true], 2)).toBeTruthy();
    });
    it("should return true if the array has three boolean values", () => {
        expect(ArrayBoolean.hasExactBoolean([true, false, true], 3)).toBeTruthy();
    });
    it("should return true if the array has two boolean values", () => {
        expect(ArrayBoolean.hasExactBoolean([true, false, 1], 2)).toBeTruthy();
    });
    it("should return false if the array has one boolean value", () => {
        expect(ArrayBoolean.hasExactBoolean([true, 1], 0)).toBeFalsy();
    });
    it("should return false if the array has two boolean values", () => {
        expect(ArrayBoolean.hasExactBoolean([false, true, 1], 3)).toBeFalsy();
    });
    it("should return false if the array has not a boolean value", () => {
        expect(ArrayBoolean.hasExactBoolean(["item", "item-2"], 2)).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        __throwError(ArrayBoolean.hasExactBoolean);
    });

    it("should throw error if the second parameter ( numberCount ) is not a number", () => {
        function passNull() {
            numberCount = null;
            ArrayBoolean.hasExactBoolean([1, null], null);
        }

        function passUndefined() {
            ArrayBoolean.hasExactBoolean([1, null], undefined);
        }

        function passString() {
            ArrayBoolean.hasExactBoolean([1, null], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});