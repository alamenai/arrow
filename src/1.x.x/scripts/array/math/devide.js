import {
    checkArray
} from "../../../helpers/check";

export function devide(array, from, to, devider) {
    if (checkArray(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = element / devider)) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

export function devideSelf(array) {
    if (checkArray(array)) {
        return array.reduce((previous, next) => previous / next)
    }
}

export function devideAll(array, devider) {
    if (checkArray(array)) {
        return array.map(element => (typeof element === "number" && (element = element / devider)) || element)
    }
}