import {
    checkArray
} from "../../../src/1.x.x/helpers/check"

describe("Checking the parameter if it's an array", () => {
    it("should throw an error", () => {

        function passNumber() {
            checkArray(1)
        }

        function passString() {
            checkArray("array")
        }

        function passEmptyArray() {
            checkArray([])
        }

        function passNull() {
            checkArray(null)
        }

        function passUndefined() {
            checkArray(undefined)
        }

        expect(passNumber).toThrowError("The parameter should be an array");
        expect(passString).toThrowError("The parameter should be an array");
        expect(passEmptyArray).toThrowError("The array is empty");
        expect(passNull).toThrowError("The parameter is null or undefined");
        expect(passUndefined).toThrowError("The parameter is null or undefined");
    })
});