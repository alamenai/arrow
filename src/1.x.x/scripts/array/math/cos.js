import {
    checkArray
} from "../../../helpers/check";

export function cos(array, from, to) {
    if (checkArray(array)) {
        if (to < array.length) {
            return array.map(element => (typeof element === "number" && Math.cos(element)) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

export function cosAll(array) {
    if (checkArray(array)) {
        return array.map(element => (typeof element === "number" && Math.cos(element)) || element)
    }
}