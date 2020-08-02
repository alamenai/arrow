import ArrayNull from "../../../../../src/1.x.x/scripts/array/has/null";

function __throwError(func) {

    function passNumber() {
        func.length === 1 ? func(0) : func(0, 1)
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

describe("Array has any null value", () => {
    it("should return true if the array has any null value", () => {
        expect(ArrayNull.hasAnyNull([1, 1])).toBeTruthy();
        expect(ArrayNull.hasAnyNull(["item-1", "item-2"])).toBeTruthy();
    });
    it("should return true if the array has only undefined values", () => {
        expect(ArrayNull.hasAnyNull([undefined, undefined])).toBeTruthy();
    });
    it("should return false if the array has only null values", () => {
        expect(ArrayNull.hasAnyNull([null, null])).toBeFalsy();
    });
    it("should throw an error", () => {
        __throwError(ArrayNull.hasAnyNull);
    });
});

describe("Array has at least a null value", () => {
    it("should return true if all values are null", () => {
        expect(ArrayNull.hasAtLeastNull([null, null])).toBeTruthy();
    });
    it("should return true if one value is null", () => {
        expect(ArrayNull.hasAtLeastNull([null, 1])).toBeTruthy();
    });
    it("should return false if there's not a null value", () => {
        expect(ArrayNull.hasAtLeastNull([1, 1])).toBeFalsy();
        expect(ArrayNull.hasAtLeastNull([1, "item"])).toBeFalsy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(ArrayNull.hasAtLeastNull([undefined, undefined])).toBeFalsy();
    });

    it("should throw an error", () => {
        __throwError(ArrayNull.hasAtLeastNull);
    });
});

describe("Array has only one null value", () => {
    it("should return true if the array has only one null value", () => {
        expect(ArrayNull.hasOnceNull([null])).toBeTruthy();
        expect(ArrayNull.hasOnceNull([null, 1])).toBeTruthy();
        expect(ArrayNull.hasOnceNull([null, "item"])).toBeTruthy();
    });
    it("should return false if the array has only null values", () => {
        expect(ArrayNull.hasOnceNull([null, null])).toBeFalsy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(ArrayNull.hasOnceNull([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not null value", () => {
        expect(ArrayNull.hasOnceNull(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(ArrayNull.hasOnceNull);
    });
});

describe("Array has only null values", () => {
    it("should return true if the array has only null values", () => {
        expect(ArrayNull.hasOnlyNull([null])).toBeTruthy();
        expect(ArrayNull.hasOnlyNull([null, null])).toBeTruthy();
        expect(ArrayNull.hasOnlyNull([null, null, null])).toBeTruthy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(ArrayNull.hasOnlyNull([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not null value", () => {
        expect(ArrayNull.hasOnlyNull(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(ArrayNull.hasOnlyNull)
    });


});

describe("Array has pair null values", () => {
    it("should return true if the array has two null values", () => {
        expect(ArrayNull.hasPairNull([null, null])).toBeTruthy();
    });
    it("should return false if the array has more then two null values", () => {
        expect(ArrayNull.hasPairNull([null])).toBeFalsy();
    });
    it("should return false if the array has more then two null values", () => {
        expect(ArrayNull.hasPairNull([null, null, null])).toBeFalsy();
    });
    it("should return false if the array has not null value", () => {
        expect(ArrayNull.hasPairNull(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error", () => {
        __throwError(ArrayNull.hasPairNull);
    });
});

describe("Array has exact null values", () => {
    let numberCount = 1; // Total of numbers the user want to find

    it("should return true if the array has two number values", () => {
        expect(ArrayNull.hasExactNull([null, null], 2)).toBeTruthy();
    });
    it("should return true if the array has three null values", () => {
        expect(ArrayNull.hasExactNull([null, null, null], 3)).toBeTruthy();
    });
    it("should return true if the array has two null values", () => {
        expect(ArrayNull.hasExactNull([null, null, 1], 2)).toBeTruthy();
    });
    it("should return false if the array has one null value", () => {
        expect(ArrayNull.hasExactNull([null, 1], 0)).toBeFalsy();
    });
    it("should return false if the array has two null values", () => {
        expect(ArrayNull.hasExactNull([null, null, 1], 3)).toBeFalsy();
    });
    it("should return false if the array has not null value", () => {
        expect(ArrayNull.hasExactNull(["item", "item-2"], 2)).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        __throwError(ArrayNull.hasExactNull);
    });

    it("should throw error if the second parameter ( numberCount ) is not a number", () => {
        function passNull() {
            numberCount = null;
            ArrayNull.hasExactNull([1, null], null);
        }

        function passUndefined() {
            ArrayNull.hasExactNull([1, null], undefined);
        }

        function passString() {
            ArrayNull.hasExactNull([1, null], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});