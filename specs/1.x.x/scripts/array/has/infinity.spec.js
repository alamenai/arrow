import {
    hasAnyInfinity,
    hasAtLeastInfinity,
    hasExactInfinity,
    hasOnceInfinity,
    hasOnlyInfinity,
    hasPairInfinity,
} from "../../../../../src/1.x.x/scripts/array/has/infinity";

describe("Array has any Infinity element", () => {
    it("should return true if the array has any Infinity element", () => {
        expect(hasAnyInfinity([1, 1])).toBeTruthy();
        expect(hasAnyInfinity(["item-1", "item-2"])).toBeTruthy();
    });
    it("should return true if the array has only undefined elements", () => {
        expect(hasAnyInfinity([undefined, undefined])).toBeTruthy();
    });
    it("should return false if the array has only Infinity elements", () => {
        expect(hasAnyInfinity([Infinity, Infinity])).toBeFalsy();
    });

});

describe("Array has at least an Infinity element", () => {
    it("should return true if all elements are Infinity", () => {
        expect(hasAtLeastInfinity([Infinity, Infinity])).toBeTruthy();
    });
    it("should return true if one element is Infinity", () => {
        expect(hasAtLeastInfinity([Infinity, 1])).toBeTruthy();
    });
    it("should return false if there's not an Infinity element", () => {
        expect(hasAtLeastInfinity([1, 1])).toBeFalsy();
        expect(hasAtLeastInfinity([1, "item"])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasAtLeastInfinity([undefined, undefined])).toBeFalsy();
    });
});

describe("Array has only one Infinity element", () => {
    it("should return true if the array has only one Infinity element", () => {
        expect(hasOnceInfinity([Infinity])).toBeTruthy();
        expect(hasOnceInfinity([Infinity, 1])).toBeTruthy();
        expect(hasOnceInfinity([Infinity, "item"])).toBeTruthy();
    });
    it("should return false if the array has only Infinity elements", () => {
        expect(hasOnceInfinity([Infinity, Infinity])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnceInfinity([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not Infinity element", () => {
        expect(hasOnceInfinity(["item", "item-2"])).toBeFalsy();
    });
});

describe("Array has only Infinity elements", () => {
    it("should return true if the array has only Infinity elements", () => {
        expect(hasOnlyInfinity([Infinity])).toBeTruthy();
        expect(hasOnlyInfinity([Infinity, Infinity])).toBeTruthy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnlyInfinity([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not an Infinity element", () => {
        expect(hasOnlyInfinity(["item", "item-2"])).toBeFalsy();
    });
});

describe("Array has pair Infinity elements", () => {
    it("should return true if the array has two Infinity elements", () => {
        expect(hasPairInfinity([Infinity, Infinity])).toBeTruthy();
    });
    it("should return false if the array has more then two Infinity elements", () => {
        expect(hasPairInfinity([Infinity])).toBeFalsy();
    });
    it("should return false if the array has more then two Infinity elements", () => {
        expect(hasPairInfinity([Infinity, Infinity, Infinity])).toBeFalsy();
    });
    it("should return false if the array has not an Infinity element", () => {
        expect(hasPairInfinity(["item", "item-2"])).toBeFalsy();
    });
});

describe("Array has exact Infinity elements", () => {
    it("should return true if the array has two Infinity elements", () => {
        expect(hasExactInfinity([Infinity, Infinity], 2)).toBeTruthy();
    });
    it("should return true if the array has three Infinity elements", () => {
        expect(hasExactInfinity([Infinity, Infinity, Infinity], 3)).toBeTruthy();
    });
    it("should return true if the array has two Infinity elements", () => {
        expect(hasExactInfinity([Infinity, Infinity, 1], 2)).toBeTruthy();
    });
    it("should return false if the array has one Infinity element", () => {
        expect(hasExactInfinity([Infinity, 1], 0)).toBeFalsy();
    });
    it("should return false if the array has two Infinity elements", () => {
        expect(hasExactInfinity([Infinity, Infinity, 1], 3)).toBeFalsy();
    });
    it("should return false if the array has not Infinity element", () => {
        expect(hasExactInfinity(["item", "item-2"], 2)).toBeFalsy();
    });

    it("should throw error if the second parameter is not a number", () => {
        function passNull() {
            hasExactInfinity([1, null], null);
        }

        function passUndefined() {
            hasExactInfinity([1, null], undefined);
        }

        function passString() {
            hasExactInfinity([1, null], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});