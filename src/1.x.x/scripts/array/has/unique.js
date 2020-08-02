import {
    checkArray,
} from "../../../helpers/check";

export function uniqueAll(array) {
    return checkArray(array) && (new Set(array).size === array.length)
}