import {
    checkArray
} from "../../../helpers/check";

import {
    isNumberArray
} from "../../../helpers/is";

export function max(array) {
    if (checkArray(array)) {
        return isNumberArray(array) ? Math.max(...array) : array
    }
}

export function maxRange(array, from, to) {
    if (checkArray(array)) {
        if (to < array.length) {
            return isNumberArray(array) ? Math.max(...array.slice(from, to + 1)) : array
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}