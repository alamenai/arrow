import {
    hasAnyNumber,
    hasAtLeastNumber,
    hasExactNumber,
    hasOnceNumber,
    hasOnlyNumber,
    hasPairNumber
} from "../../../../../src/1.x.x/scripts/array/has/number";

describe("Array has any number value", () => {
    it("should return true if the array has only null values", () => {
        expect(hasAnyNumber([null, null])).toBeTruthy();
    });
    it("should return true if the array has only undefined values", () => {
        expect(hasAnyNumber([undefined, undefined])).toBeTruthy();
    });
    it("should return true if the array has only String values", () => {
        expect(hasAnyNumber(["item-1", "item-2"])).toBeTruthy();
    });
    it("should return false if the array has only one number value", () => {
        expect(hasAnyNumber([1])).toBeFalsy();
    });
    it("should return false if the array has more than one number value", () => {
        expect(hasAnyNumber([1, 5, "item"])).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            hasAnyNumber(0);
        }

        function passString() {
            hasAnyNumber("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            hasAnyNumber(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            hasAnyNumber([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
});

describe("Array has at least a null value", () => {
    it("should return true if one value is number", () => {
        expect(hasAtLeastNumber([1])).toBeTruthy();
    });
    it("should return true if only number values", () => {
        expect(hasAtLeastNumber([1, 2, 3])).toBeTruthy();
    });
    it("should return true if there's at least a number value", () => {
        expect(hasAtLeastNumber([1, "item"])).toBeTruthy();
        expect(hasAtLeastNumber([1, "item", null])).toBeTruthy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(hasAtLeastNumber([undefined, undefined])).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            hasAtLeastNumber(0);
        }

        function passString() {
            hasAtLeastNumber("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            hasAtLeastNumber([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error when the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            hasAtLeastNumber(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
});

describe("Array has only one number value", () => {
    it("should return true if the array has only one number value", () => {
        expect(hasOnceNumber([1])).toBeTruthy();
        expect(hasOnceNumber([null, 1])).toBeTruthy();
        expect(hasOnceNumber([1, "item"])).toBeTruthy();
    });
    it("should return false if the array has only null values", () => {
        expect(hasOnceNumber([1, 2, 3, 4])).toBeFalsy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(hasOnceNumber([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not null value", () => {
        expect(hasOnceNumber(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            hasOnceNumber(0);
        }

        function passString() {
            hasOnceNumber("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            hasOnceNumber([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            hasOnceNumber(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
});

describe("Array has only number values", () => {
    it("should return true if the array has only number values", () => {
        expect(hasOnlyNumber([1])).toBeTruthy();
        expect(hasOnlyNumber([1, 1])).toBeTruthy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(hasOnlyNumber([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not number value", () => {
        expect(hasOnlyNumber(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            hasOnlyNumber(0);
        }

        function passString() {
            hasOnlyNumber("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            hasOnlyNumber([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            hasOnlyNumber(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
});

describe("Array has pair number values", () => {
    it("should return true if the array has two number values", () => {
        expect(hasPairNumber([1, 2])).toBeTruthy();
    });
    it("should return false if the array has only one number values", () => {
        expect(hasPairNumber([1])).toBeFalsy();
    });
    it("should return false if the array has more then two number values", () => {
        expect(hasPairNumber([1, 2, 3])).toBeFalsy();
    });
    it("should return false if the array has not number value", () => {
        expect(hasPairNumber(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            hasPairNumber(0);
        }

        function passString() {
            hasPairNumber("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            hasPairNumber([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            hasPairNumber(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
});

describe("Array has exact number values", () => {
    let numberCount = 1; // Total of numbers the user want to find

    it("should return true if the array has two number values", () => {
        expect(hasExactNumber([2, 1], 2)).toBeTruthy();
    });
    it("should return true if the array has three null values", () => {
        expect(hasExactNumber([1, 2, 3], 3)).toBeTruthy();
    });
    it("should return true if the array has two number values", () => {
        expect(hasExactNumber([null, 2, 1], 2)).toBeTruthy();
    });
    it("should return false if the array has one number value", () => {
        expect(hasExactNumber([null, 1], 0)).toBeFalsy();
    });
    it("should return false if the array has two number values", () => {
        expect(hasExactNumber([null, 2, 1], 3)).toBeFalsy();
    });
    it("should return false if the array has not number value", () => {
        expect(hasExactNumber(["item", "item-2"], 2)).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            hasExactNumber(0, numberCount);
        }

        function passString() {
            hasExactNumber("item", numberCount);
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function passEmptyArray() {
            hasExactNumber([], numberCount);
        }
        expect(passEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            hasExactNumber(undefined || null, numberCount);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
    it("should throw error if the second parameter ( numberCount ) is not a number", () => {
        function passNull() {
            numberCount = null;
            hasExactNumber([1, 2], null);
        }

        function passUndefined() {
            hasExactNumber([1, 2], undefined);
        }

        function passString() {
            hasExactNumber([1, 2], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});