import {
    isArray,
} from "../../../helpers/is";

export function uniqueAll(array) {
    return isArray(array) && (new Set(array).size === array.length)
}