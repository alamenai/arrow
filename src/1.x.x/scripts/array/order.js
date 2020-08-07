import {
    checkArray
} from "../../helpers/check"

import {
    isPrimitive
} from "../../helpers/is"

export function orderRangeDesc(array, from, to) {

    if (checkArray(array)) {
        if (to < array.length) {
            if (isPrimitive(array)) {
                const sortedArray = array.slice(from, to + 1).sort((a, b) => -1)
                let pointer = 0;
                for (let index = from; index < to + 1; index++) {
                    array[index] = sortedArray[pointer]
                    pointer = pointer + 1;
                }
                return array
            }

        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

export function orderDesc(array) {
    if (checkArray(array)) {
        if (isPrimitive(array)) {
            return array.sort((a, b) => -1)
        }
    } else {
        throw new Error("The last index of the array is less then 'to' parameter")
    }
}