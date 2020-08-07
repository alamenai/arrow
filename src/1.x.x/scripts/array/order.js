import {
    isArray
} from "../../helpers/check"

import {
    isPrimitiveArray
} from "../../helpers/is"

export function orderRangeDesc(array, from, to) {

    if (isArray(array)) {
        if (to < array.length) {
            if (isPrimitiveArray(array)) {
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
    if (isArray(array)) {
        if (isPrimitiveArray(array)) {
            return array.sort((a, b) => -1)
        }
    } else {
        throw new Error("The last index of the array is less then 'to' parameter")
    }
}