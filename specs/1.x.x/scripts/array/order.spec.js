import {
    orderDesc,
    orderRangeDesc
} from "../../../../src/1.x.x/scripts/array/order"

describe("Order a range of an array", () => {
    it("should return descent ordered numbers", () => {
        expect(orderRangeDesc([1, 2, 3, 4, 5, 6], 1, 3)).toStrictEqual([1, 4, 3, 2, 5, 6]);
    });
    it("should return descent ordered strings", () => {
        expect(orderRangeDesc(["aaa", "baa", "cbb", "dee", "ecc", "faa"], 1, 3)).toStrictEqual(["aaa", "dee", "cbb", "baa", "ecc", "faa"]);
    });
    it("should return descent ordered objects", () => {
        expect(orderRangeDesc([{
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }, {
            id: 4
        }, {
            id: 5
        }, {
            id: 6
        }], 1, 3, 'id')).toStrictEqual([{
            id: 1
        }, {
            id: 4
        }, {
            id: 3
        }, {
            id: 2
        }, {
            id: 5
        }, {
            id: 6
        }]);
    });
    it("should throw an error when the elements have not the same type", () => {

        function hasDifferentTypes() {
            const array = [{
                id: 1
            }, 2, 3]; // The first element (item) is an object and the second is a number

            orderRangeDesc(array, 0, 1); // The name key does not exist in the array
        }
        expect(hasDifferentTypes).toThrowError("The elements has different types");
    });

    it("should throw an error", () => {

        function passBigIndex() {
            const array = [1, 2, 3, 4, 5, 6];
            orderRangeDesc(array, 4, 6); // The last index of array is 5
        }
        expect(passBigIndex).toThrowError("The last index of the array is less then 'to' parameter");
    });

});
describe("Order an array", () => {
    it("should return descent ordered numbers", () => {
        expect(orderDesc([1, 2, 3, 4, 5, 6])).toStrictEqual([6, 5, 4, 3, 2, 1]);
    });
    it("should return descent ordered strings", () => {
        expect(orderDesc(["aaa", "baa", "cbb", "dee", "ecc", "faa"], 1, 3)).toStrictEqual(["faa", "ecc", "dee", "cbb", "baa", "aaa"]);
    });
    it("should return descent ordered objects", () => {
        expect(orderDesc([{
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }, {
            id: 4
        }, {
            id: 5
        }, {
            id: 6
        }], 'id')).toStrictEqual([{
            id: 6
        }, {
            id: 5
        }, {
            id: 4
        }, {
            id: 3
        }, {
            id: 2
        }, {
            id: 1
        }]);
    });

    it("should throw an error when the elements have not the same type", () => {

        function hasDifferentTypes() {
            const array = [{
                id: 1
            }, 2, 3]; // The first element (item) is an object and the second is a number

            orderDesc(array); // The name key does not exist in the array
        }
        expect(hasDifferentTypes).toThrowError("The elements has different types");
    });

});