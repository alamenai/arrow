import ArrayNull from "../../../../../src/1.x.x/scripts/array/has/null";

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
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNull.hasAnyNull(0);
        }
        function passString() {
            ArrayNull.hasAnyNull("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNull.hasAnyNull(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            ArrayNull.hasAnyNull([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
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
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNull.hasAtLeastNull(0);
        }
        function passString() {
            ArrayNull.hasAtLeastNull("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            ArrayNull.hasAtLeastNull([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error when the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNull.hasAtLeastNull(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
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
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNull.hasOnceNull(0);
        }
        function passString() {
            ArrayNull.hasOnceNull("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            ArrayNull.hasOnceNull([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNull.hasOnceNull(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
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
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNull.hasOnlyNull(0);
        }
        function passString() {
            ArrayNull.hasOnlyNull("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            ArrayNull.hasOnlyNull([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNull.hasOnlyNull(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
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
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNull.hasPairNull(0);
        }
        function passString() {
            ArrayNull.hasPairNull("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            ArrayNull.hasPairNull([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNull.hasPairNull(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
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
    it("should return false if the array has not number value", () => {
        expect(ArrayNull.hasExactNull(["item", "item-2"], 2)).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNull.hasExactNull(0, numberCount);
        }
        function passString() {
            ArrayNull.hasExactNull("item", numberCount);
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function passEmptyArray() {
            ArrayNull.hasExactNull([], numberCount);
        }
        expect(passEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNull.hasExactNull(undefined || null, numberCount);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
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