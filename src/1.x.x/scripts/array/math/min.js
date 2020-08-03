import {
    checkArray
} from "../../../helpers/check";

export function min(array) {
    if (checkArray(array)) {
        return isNumberArray(array) ? Math.min(...array) : array
    }
}

export function minRange(array, from, to) {
    if (checkArray(array)) {
        if (to < array.length) {
            return isNumberArray(array) ? Math.min(...array.slice(from, to + 1)) : array
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

function isNumberArray(array) {
    return array.every(element => typeof element === "number")
}