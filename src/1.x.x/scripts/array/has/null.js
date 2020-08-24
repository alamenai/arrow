import { isArray, } from "../../../helpers/is";

export const hasAnyNull = array => {
    return isArray(array) && !array.every(element => isNull(element));
}

export const hasAtLeastNull = array => {
    return isArray(array) && array.some(element => isNull(element));
}

export const hasOnceNull = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (isNull(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

export const hasOnlyNull = array => {
    return isArray(array) && array.every((element) => isNull(element));
}

export const hasPairNull = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (isNull(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

export const hasExactNull = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return isArray(array) && (array.reduce((acc, element) => {
        if (isNull(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}

function isNull(element) {
    return element === null
}