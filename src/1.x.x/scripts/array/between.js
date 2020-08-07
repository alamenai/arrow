import {
    isArray,
} from "../../../helpers/is";

export function between(array, start, end) {
    if (isArray(array))
        return array.every(element => element > start - 1 && element < end + 1)
}