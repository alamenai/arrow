import {
    isArray,
    isObjectArray
} from "../../helpers/is"

import {
    hasElement
} from "../../helpers/has"

export function omit(array, element) {
    if (isArray(array)) {
        if (!hasElement(array, element)) {
            throw new Error(element + " does not exist")
        }
        return isObjectArray(array) ? filterByObject(array, element) : filterByValue(array, element)
    }
}

export function omitArray(array, omittedArray) {
    if (isArray(array) && isArray(omittedArray)) {
        for (let element of omittedArray) {
            if (!hasElement(array, element)) {
                throw new Error(element + " does not exist")
            }
            isObjectArray(array) ? array = filterByObject(array, element) : array = filterByValue(array, element)
        }
        return array
    }
}

export function omitMany(array, ...elements) {

    if (isArray(array)) {
        for (let element of elements) {
            if (!hasElement(array, element)) {
                throw new Error(element + " does not exist")
            }
            isObjectArray(array) ? array = filterByObject(array, element) : array = filterByValue(array, element)
        }
        return array;
    }
}

function filterByValue(array, value) {
    return array.filter(element => element !== value)
}

function filterByObject(array, key) {
    return array.filter(element => Object.keys(element)[0] !== key)
}