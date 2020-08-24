import { isArray } from "../../../helpers/is";

export const powRange = (array, from, to, power) => {
    if (isArray(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = Math.pow(element, power))) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

export const pow = (array, power) => {
    if (isArray(array)) {
        return array.map(element => (typeof element === "number" && (element = Math.pow(element, power))) || element)
    }
}