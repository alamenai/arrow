import { isArray } from "../../../helpers/is";

export const devideRange = (array, from, to, devider) => {
    if (isArray(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = element / devider)) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

export const devideSelf = array => {
    if (isArray(array)) {
        return array.reduce((previous, next) => previous / next)
    }
}

export const devide = (array, devider) => {
    if (isArray(array)) {
        return array.map(element => (typeof element === "number" && (element = element / devider)) || element)
    }
}