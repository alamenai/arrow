import {
    isArray,
} from "../../../helpers/check";

export function uniqueAll(array) {
    return isArray(array) && (new Set(array).size === array.length)
}