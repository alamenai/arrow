import {
    checkArray
} from "../../../helpers/check";

export function abs(array, from, to) {
    if (checkArray(array)) {
        if (array.length < to + 1) {
            return array.map(element => (array.indexOf(element) >= from && array.indexOf(element) < to + 1) ? Math.abs(element) : element);
        }
    }
}

// export function absAll(array = [], items) {
//     // Concat the value with all items
//     // Suppose the value is 'deno'
//     // [1, 2, 3] will be [1deno, 2deno, 3deno]
//     // Warning: If the value is a number, make sure the operation is concatenation not an addition
// }