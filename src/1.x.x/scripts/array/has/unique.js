import {
    checkArray,
} from "../../../helpers/check";

export function uniqueAll(array) {
    checkArray(array) && (array.length === 1) || (array.length === new Set(array).length)
}