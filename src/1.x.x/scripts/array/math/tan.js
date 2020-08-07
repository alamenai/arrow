import {
    isArray
} from "../../../helpers/check";

export function tanRange(array, from, to) {
    if (isArray(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = Math.tan(element))) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

export function tan(array) {
    if (isArray(array)) {
        return array.map(element => (typeof element === "number" && (element = Math.tan(element))) || element)
    }
}