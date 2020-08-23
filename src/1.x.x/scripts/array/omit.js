import { hasElement } from "../../helpers/has"
import { isArray, isObjectArray } from "../../helpers/is"

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

const filterByValue = (array, value) => {
    return array.filter(element => {
        if (typeof element === "string") {
            return element.toLowerCase().trim() !== value.toLowerCase().trim()
        }
        return element !== value
    })
}

const filterByObject = (array, key) => {
    return array.filter(element => {
        const value = Object.keys(element)[0];
        if (typeof value === "string") {
            return value.toLowerCase().trim() !== key.toLowerCase().trim()
        }
        return value !== key
    })
}