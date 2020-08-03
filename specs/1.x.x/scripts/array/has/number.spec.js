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

    it("should throw error if the second parameter is not a number", () => {
        function passNull() {
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