import {
    checkArray
} from "../../../helpers/check";

export function sqrtRange(array, from, to) {
    if (checkArray(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = Math.sqrt(element))) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

export function sqrt(array) {
    if (checkArray(array)) {
        return array.map(element => (typeof element === "number" && (element = Math.sqrt(element))) || element)
    }
}