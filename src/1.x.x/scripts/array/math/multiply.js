import {
    isArray
} from "../../../helpers/check";

import {
    isNumberArray
} from "../../../helpers/is";

export function multiplyRange(array, from, to, multiplier) {
    if (isArray(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = element * multiplier)) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}
export function multiplySelf(array) {
    if (isArray(array)) {
        return isNumberArray(array) ? array.reduce((previous, next) => previous * next) : array
    }
}

export function multiply(array, multiplier) {
    if (isArray(array)) {
        return array.map(element => (typeof element === "number" && (element = element * multiplier)) || element)
    }
}