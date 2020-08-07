import {
    isArray
} from "../../../helpers/is";

function isObject(element) {
    return typeof element === "object" && !Array.isArray(element)
}

export function hasAnyObject(array) {
    return isArray(array) && !array.every(element => isObject(element))
}

export function hasAtLeastObject(array) {
    return isArray(array) && array.some(element => isObject(element))
}

export function hasOnceObject(array) {
    return isArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (isObject(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

export function hasOnlyObject(array) {
    return isArray(array) && array.every((element) => isObject(element));
}

export function hasPairObject(array) {
    return isArray(array) && (array.reduce((acc, element) => {
        if (isObject(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

export function hasExactObject(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return isArray(array) && (array.reduce((acc, element) => {
        if (isObject(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}