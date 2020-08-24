import { isArray, isNumberArray } from "../../../helpers/is";

export const multiplyRange = (array, from, to, multiplier) => {
    if (isArray(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = element * multiplier)) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}
export const multiplySelf = array => {
    if (isArray(array)) {
        return isNumberArray(array) ? array.reduce((previous, next) => previous * next) : array
    }
}

export const multiply = (array, multiplier) => {
    if (isArray(array)) {
        return array.map(element => (typeof element === "number" && (element = element * multiplier)) || element)
    }
}