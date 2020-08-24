import { isArray, } from "../../helpers/is";

export const betweenRange = (array, from, to, start, end) => {
    if (isArray(array)) {
        if (to < array.length) {
            const range = array.slice(from, to + 1)
            return between(range, start, end)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
    return array.every(element => element > start - 1 && element < end + 1)
}

export const between = (array, start, end) => {
    if (isArray(array))
        return array.every(element => element > start - 1 && element < end + 1)
}