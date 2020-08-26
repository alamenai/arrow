import { isArray } from "../../helpers/is"

export const merge = (array, ...mergedArrays) => {
    if (isArray(array)) {
        for (let mergedArray of mergedArrays) {
            mergedArray.length > array.length ? array = mergeElements(mergedArray, array) : array = mergeElements(array, mergedArray)
        }
        return array
    }
}

const mergeElements = (array, mergedArray) => {
    return array.map((value, index) => {
        if (!mergedArray[index]) {
            return value
        }
        return value + mergedArray[index]
    })
}