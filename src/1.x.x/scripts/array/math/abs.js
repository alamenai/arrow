import {
    checkArray
} from "../../../helpers/check";

export function abs(array, from, to) {
    if (checkArray(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && Math.abs(element)) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

// export function absAll(array = [], items) {
//     // Concat the value with all items
//     // Suppose the value is 'deno'
//     // [1, 2, 3] will be [1deno, 2deno, 3deno]
//     // Warning: If the value is a number, make sure the operation is concatenation not an addition
// }