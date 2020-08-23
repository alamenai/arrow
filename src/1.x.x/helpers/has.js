import { isObjectArray, isStringArray } from "../../1.x.x/helpers/is"

export const hasElement = (array, element) => {
    return isObjectArray(array) ? hasObject(array, element) : hasValue(array, element)
}

const hasValue = (array, value) => {
    if (isStringArray(array)) {
        return array.some(element => element.toLowerCase() === value.toLowerCase())
    }
    return array.some(element => element === value)
}

const hasObject = (array, key) => {
    if (isStringArray(array)) {
        return array.some(element => Object.keys(element)[0].toLowerCase() === key.toLowerCase())
    }
    return array.some(element => Object.keys(element)[0] === key)
}