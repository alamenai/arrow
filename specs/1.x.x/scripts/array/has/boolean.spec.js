import {
    hasAnyBoolean,
    hasAtLeastBoolean,
    hasExactBoolean,
    hasOnceBoolean,
    hasOnlyBoolean,
    hasPairBoolean,
} from "../../../../../src/1.x.x/scripts/array/has/boolean";

describe("Array has any boolean value", () => {
    it("should return true if the array has any boolean value", () => {
        expect(hasAnyBoolean([1, 1])).toBeTruthy();
        expect(hasAnyBoolean(["item-1", "item-2"])).toBeTruthy();
    });
    it("should return true if the array has only undefined values", () => {
        expect(hasAnyBoolean([undefined, undefined])).toBeTruthy();
    });
    it("should return false if the array has only boolean values", () => {
        expect(hasAnyBoolean([false, true])).toBeFalsy();
    });
});

describe("Array has at least a boolean value", () => {
    it("should return true if all values are boolean", () => {
        expect(hasAtLeastBoolean([false, true])).toBeTruthy();
    });
    it("should return true if one value is boolean", () => {
        expect(hasAtLeastBoolean([true, 1])).toBeTruthy();
    });
    it("should return false if there's not a boolean value", () => {
        expect(hasAtLeastBoolean([1, 1])).toBeFalsy();
        expect(hasAtLeastBoolean([1, "item"])).toBeFalsy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(hasAtLeastBoolean([undefined, undefined])).toBeFalsy();
    });
});

describe("Array has only one boolean value", () => {
    it("should return true if the array has only one boolean value", () => {
        expect(hasOnceBoolean([true])).toBeTruthy();
        expect(hasOnceBoolean([false, 1])).toBeTruthy();
        expect(hasOnceBoolean([true, "item"])).toBeTruthy();
    });
    it("should return false if the array has only boolean values", () => {
        expect(hasOnceBoolean([true, false])).toBeFalsy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(hasOnceBoolean([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not boolean value", () => {
        expect(hasOnceBoolean(["item", "item-2"])).toBeFalsy();
    });
});

describe("Array has only boolean values", () => {
    it("should return true if the array has only boolean values", () => {
        expect(hasOnlyBoolean([true])).toBeTruthy();
        expect(hasOnlyBoolean([false, true])).toBeTruthy();
        expect(hasOnlyBoolean([false, false, true])).toBeTruthy();
    });
    it("should return false if the array has only undefined values", () => {
        expect(hasOnlyBoolean([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not boolean value", () => {
        expect(hasOnlyBoolean(["item", "item-2"])).toBeFalsy();
    });
});

describe("Array has pair boolean values", () => {
    it("should return true if the array has two boolean values", () => {
        expect(hasPairBoolean([false, true])).toBeTruthy();
    });
    it("should return false if the array has less then two boolean values", () => {
        expect(hasPairBoolean([false])).toBeFalsy();
    });
    it("should return false if the array has more then two boolean values", () => {
        expect(hasPairBoolean([false, true, false])).toBeFalsy();
    });
    it("should return false if the array has not boolean value", () => {
        expect(hasPairBoolean(["item", "item-2"])).toBeFalsy();
    });
});

describe("Array has exact boolean values", () => {

    it("should return true if the array has two boolean values", () => {
        expect(hasExactBoolean([false, true], 2)).toBeTruthy();
    });
    it("should return true if the array has three boolean values", () => {
        expect(hasExactBoolean([true, false, true], 3)).toBeTruthy();
    });
    it("should return true if the array has two boolean values", () => {
        expect(hasExactBoolean([true, false, 1], 2)).toBeTruthy();
    });
    it("should return false if the array has one boolean value", () => {
        expect(hasExactBoolean([true, 1], 0)).toBeFalsy();
    });
    it("should return false if the array has two boolean values", () => {
        expect(hasExactBoolean([false, true, 1], 3)).toBeFalsy();
    });
    it("should return false if the array has not a boolean value", () => {
        expect(hasExactBoolean(["item", "item-2"], 2)).toBeFalsy();
    });

    it("should throw error if the second parameter ( numberCount ) is not a number", () => {
        function passNull() {
            hasExactBoolean([1, null], null);
        }

        function passUndefined() {
            hasExactBoolean([1, null], undefined);
        }

        function passString() {
            hasExactBoolean([1, null], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});