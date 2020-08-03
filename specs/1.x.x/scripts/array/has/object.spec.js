import {
    hasAnyObject,
    hasAtLeastObject,
    hasExactObject,
    hasOnceObject,
    hasOnlyObject,
    hasPairObject,
} from "../../../../../src/1.x.x/scripts/array/has/object";

describe("Array has any element with type Object", () => {
    it("should return true if the array has any element with type Object", () => {
        expect(hasAnyObject([1, 1])).toBeTruthy();
        expect(hasAnyObject(["item-1", "item-2"])).toBeTruthy();
        expect(hasAnyObject([false, true])).toBeTruthy();
    });
    it("should return true if the array has only undefined elements", () => {
        expect(hasAnyObject([undefined, undefined])).toBeTruthy();
    });
    it("should return true if the array has only elements with type Object", () => {
        expect(hasAnyObject([
            [1, 2],
            ["item-0", "item-1"]
        ])).toBeTruthy();
    });
    it("should return false if the array has only one element with type Object", () => {
        expect(hasAnyObject([{
            a: 1,
            b: 2
        }])).toBeFalsy();
    });
    it("should return false if the array has only elements with type Object", () => {
        expect(hasAnyObject([{
            a: 1,
            b: 2
        }, {
            c: 3,
            d: 4
        }])).toBeFalsy();
    });
});

describe("Array has at least an element with type Object", () => {
    it("should return true if all elements have type Object", () => {
        expect(hasAtLeastObject([{
                a: 1,
                b: 2
            },
            {
                c: 2,
                d: 4
            },
        ])).toBeTruthy();
    });
    it("should return true if one element has type Object", () => {
        expect(hasAtLeastObject([{
                a: 1,
                b: 2
            }, true,
            1
        ])).toBeTruthy();
    });
    it("should return false if there's not an element with type Object", () => {
        expect(hasAtLeastObject([1, 1])).toBeFalsy();
        expect(hasAtLeastObject([1, "item"])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasAtLeastObject([undefined, undefined])).toBeFalsy();
    });
});

describe("Array has only one element with type Object", () => {
    it("should return true if the array has only one element with type Object", () => {
        expect(hasOnceObject([{
            a: 1,
            b: 2
        }, ])).toBeTruthy();
        expect(hasOnceObject([{
            a: 1,
            b: 2
        }, 1, ])).toBeTruthy();
        expect(hasOnceObject([{
            a: 1,
            b: 2
        }, "item", ])).toBeTruthy();
    });
    it("should return false if the array has only elements with type Object", () => {
        expect(hasOnceObject([{
                a: 1,
                b: 2
            },
            {
                a: 3,
                b: 4
            },
        ])).toBeFalsy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnceObject([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not an element with type Object", () => {
        expect(hasOnceObject(["item", "item-2"])).toBeFalsy();
        expect(hasOnceObject([1, 2])).toBeFalsy();
    });
});

describe("Array has only elements with type Object", () => {
    it("should return true if the array has only elements with type Object", () => {
        expect(hasOnlyObject([{
                a: 1,
                b: 2
            },
            {
                c: 3
            },
            {
                name: "Ala Eddine"
            },
        ])).toBeTruthy();
        expect(hasOnlyObject([{
                a: undefined
            },
            {
                b: undefined
            },
        ])).toBeTruthy();
    });
    it("should return false if the array has only undefined elements", () => {
        expect(hasOnlyObject([undefined, undefined])).toBeFalsy();
    });
    it("should return false if the array has not an element with type Object", () => {
        expect(hasOnlyObject(["item", "item-2"])).toBeFalsy();
        expect(hasOnlyObject([1, 2])).toBeFalsy();
    });
});

describe("Array has pair elements with type Object", () => {
    it("should return true if the array has two elements with type Object", () => {
        expect(hasPairObject([{
                a: 1,
                b: 2
            },
            {
                c: 3,
                d: 4
            },
        ])).toBeTruthy();
    });
    it("should return false if the array has less then elements with type Object", () => {
        expect(hasPairObject([{
            a: 1,
            b: 2
        }, ])).toBeFalsy();
    });
    it("should return false if the array has more then elements with type Object", () => {
        expect(hasPairObject([{
                a: 1,
                b: 2
            },
            {
                c: 3,
                d: 4
            },
            {
                e: 5,
                f: 6
            },
        ])).toBeFalsy();
    });
    it("should return false if the array has not an element with type Object", () => {
        expect(hasPairObject(["item", "item-2"])).toBeFalsy();
    });
});

describe("Array has exact elements with type Object", () => {
    it("should return true if the array has two elements with type Object", () => {
        expect(hasExactObject([{
                a: 1,
                b: 2
            },
            {
                c: 2,
                d: 4
            },
        ], 2)).toBeTruthy();
    });
    it("should return true if the array has three elements with type Object", () => {
        expect(hasExactObject([{
                a: 1,
                b: 2
            }, {
                true: true,
                false: false
            },
            {
                user: "AlaEddine",
                password: 123456
            },
        ], 3)).toBeTruthy();
    });

    it("should return false if the array has one element with type Object", () => {
        expect(hasExactObject([{
            a: 1,
            b: 2
        }, 1, ], 0)).toBeFalsy();
    });
    it("should return false if the array has two elements with type Object", () => {
        expect(hasExactObject([{
                a: 1,
                b: 2
            },
            {
                c: 3,
                d: 4
            },
            1,
        ], 3)).toBeFalsy();
    });
    it("should return false if the array has not an element with type Object", () => {
        expect(hasExactObject(["item", "item-2"], 2)).toBeFalsy();
    });

    it("should throw error if the second parameter is not a number", () => {
        function passNull() {
            hasExactObject([1, null], null);
        }

        function passUndefined() {
            hasExactObject([1, null], undefined);
        }

        function passString() {
            hasExactObject([1, null], "1");
        }
        expect(passNull).toThrowError("The second parameter should be a number");
        expect(passUndefined).toThrowError("The second parameter should be a number");
        expect(passString).toThrowError("The second parameter should be a number");
    });
});