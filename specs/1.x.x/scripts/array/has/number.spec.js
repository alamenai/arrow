import ArrayNumber from "../../../../../src/1.x.x/scripts/array/has/number";

describe("Array has any number value", () => {
    it("should return true if the array has only null values", () => {
        expect(ArrayNumber.hasAnyNumber([null, null])).toBeTruthy();
    });
    it("should return true if the array has only undefined values", () => {
        expect(ArrayNumber.hasAnyNumber([undefined, undefined])).toBeTruthy();
    });
    it("should return true if the array has only String values", () => {
        expect(ArrayNumber.hasAnyNumber(["item-1", "item-2"])).toBeTruthy();
    });
    it("should return false if the array has only one number value", () => {
        expect(ArrayNumber.hasAnyNumber([1])).toBeFalsy();
    });
    it("should return false if the array has more than one number value", () => {
        expect(ArrayNumber.hasAnyNumber([1, 5, "item"])).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNumber.hasAnyNumber(0);
        }

        function passString() {
            ArrayNumber.hasAnyNumber("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNumber.hasAnyNumber(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            ArrayNumber.hasAnyNumber([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
});

describe("Array has at least a null value", () => {
    it("should return true if one value is number", () => {
        expect(ArrayNumber.hasAtLeastNumber([1])).toBeTruthy();
    });
    it("should return true if only number values", () => {
        expect(ArrayNumber.hasAtLeastNumber([1, 2, 3])).toBeTruthy();
    });
    it("should return true if there's at least a number value", () => {
        expect(ArrayNumber.hasAtLeastNumber([1, "item"])).toBeTruthy();
        expect(ArrayNumber.hasAtLeastNumber([1, "item", null])).toBeTruthy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(ArrayNumber.hasAtLeastNumber([undefined, undefined])).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNumber.hasAtLeastNumber(0);
        }

        function passString() {
            ArrayNumber.hasAtLeastNumber("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            ArrayNumber.hasAtLeastNumber([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error when the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNumber.hasAtLeastNumber(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
});

describe("Array has only one number value", () => {
    it("should return true if the array has only one number value", () => {
        expect(ArrayNumber.hasOnceNumber([1])).toBeTruthy();
        expect(ArrayNumber.hasOnceNumber([null, 1])).toBeTruthy();
        expect(ArrayNumber.hasOnceNumber([1, "item"])).toBeTruthy();
    });
    it("should return false if the array has only null values", () => {
        expect(ArrayNumber.hasOnceNumber([1, 2, 3, 4])).toBeFalsy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(ArrayNumber.hasOnceNumber([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not null value", () => {
        expect(ArrayNumber.hasOnceNumber(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNumber.hasOnceNumber(0);
        }

        function passString() {
            ArrayNumber.hasOnceNumber("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            ArrayNumber.hasOnceNumber([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNumber.hasOnceNumber(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
});

describe("Array has only number values", () => {
    it("should return true if the array has only number values", () => {
        expect(ArrayNumber.hasOnlyNumber([1])).toBeTruthy();
        expect(ArrayNumber.hasOnlyNumber([1, 1])).toBeTruthy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(ArrayNumber.hasOnlyNumber([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not number value", () => {
        expect(ArrayNumber.hasOnlyNumber(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNumber.hasOnlyNumber(0);
        }

        function passString() {
            ArrayNumber.hasOnlyNumber("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            ArrayNumber.hasOnlyNumber([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNumber.hasOnlyNumber(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
});

describe("Array has pair number values", () => {
    it("should return true if the array has two number values", () => {
        expect(ArrayNumber.hasPairNumber([1, 2])).toBeTruthy();
    });
    it("should return false if the array has only one number values", () => {
        expect(ArrayNumber.hasPairNumber([1])).toBeFalsy();
    });
    it("should return false if the array has more then two number values", () => {
        expect(ArrayNumber.hasPairNumber([1, 2, 3])).toBeFalsy();
    });
    it("should return false if the array has not number value", () => {
        expect(ArrayNumber.hasPairNumber(["item", "item-2"])).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNumber.hasPairNumber(0);
        }

        function passString() {
            ArrayNumber.hasPairNumber("item");
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function pasEmptyArray() {
            ArrayNumber.hasPairNumber([]);
        }
        expect(pasEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNumber.hasPairNumber(undefined || null);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
});

describe("Array has exact number values", () => {
    let numberCount = 1; // Total of numbers the user want to find

    it("should return true if the array has two number values", () => {
        expect(ArrayNumber.hasExactNumber([2, 1], 2)).toBeTruthy();
    });
    it("should return true if the array has three null values", () => {
        expect(ArrayNumber.hasExactNumber([1, 2, 3], 3)).toBeTruthy();
    });
    it("should return true if the array has two number values", () => {
        expect(ArrayNumber.hasExactNumber([null, 2, 1], 2)).toBeTruthy();
    });
    it("should return false if the array has one number value", () => {
        expect(ArrayNumber.hasExactNumber([null, 1], 0)).toBeFalsy();
    });
    it("should return false if the array has two number values", () => {
        expect(ArrayNumber.hasExactNumber([null, 2, 1], 3)).toBeFalsy();
    });
    it("should return false if the array has not number value", () => {
        expect(ArrayNumber.hasExactNumber(["item", "item-2"], 2)).toBeFalsy();
    });
    it("should throw error if the parameter is not an array", () => {
        function passNumber() {
            ArrayNumber.hasExactNumber(0, numberCount);
        }

        function passString() {
            ArrayNumber.hasExactNumber("item", numberCount);
        }
        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
    });
    it("should throw error if the array is empty", () => {
        function passEmptyArray() {
            ArrayNumber.hasExactNumber([], numberCount);
        }
        expect(passEmptyArray).toThrowError("The array is empty");
    });
    it("should throw error if the parameter is undefined or null", () => {
        function passUndefinedOrNull() {
            ArrayNumber.hasExactNumber(undefined || null, numberCount);
        }
        expect(passUndefinedOrNull).toThrowError("The parameter is null or undefined");
    });
    it("should throw error if the second parameter ( numberCount ) is not a number", () => {
        function passNull() {
            numberCount = null;
            ArrayNumber.hasExactNumber([1, 2], null);
        }

        function passUndefined() {
            ArrayNumber.hasExactNumber([1, 2], undefined);
        }

        function passString() {
            ArrayNumber.hasExactNumber([1, 2], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});