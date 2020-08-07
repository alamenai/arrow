import {
    isObjectArray
} from "../../1.x.x/helpers/is"

export function hasElement(array, element) {
    return isObjectArray(array) ? hasObject(array, element) : hasValue(array, element)
}

function hasValue(array, value) {

    return array.some(element => element === value)
}

function hasObject(array, key) {
    return array.some(element => Object.keys(element)[0] === key)
}