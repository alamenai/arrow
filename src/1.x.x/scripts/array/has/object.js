import { isArray } from "../../../helpers/is";

function isObject(element) {
    return typeof element === "object" && !Array.isArray(element)
}

export const hasAnyObject = array => {
    return isArray(array) && !array.every(element => isObject(element))
}

export const hasAtLeastObject = array => {
    return isArray(array) && array.some(element => isObject(element))
}

export const hasOnceObject = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (isObject(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

export const hasOnlyObject = array => {
    return isArray(array) && array.every((element) => isObject(element));
}

export const hasPairObject = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (isObject(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

export const hasExactObject = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return isArray(array) && (array.reduce((acc, element) => {
        if (isObject(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}