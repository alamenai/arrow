import {
    checkArray,
} from "../../../helpers/check";

function isString(element) {
    return typeof element === "string"
}

export function hasAnyString(array) {
    return checkArray(array) && !array.every((element) => isString(element));
}

export function hasAtLeastString(array) {
    return checkArray(array) && array.some((element) => isString(element));
}

export function hasOnceString(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (isString(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

export function hasOnlyString(array) {
    return checkArray(array) && array.every((element) => isString(element));
}

export function hasPairString(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (isString(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

export function hasExactString(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return checkArray(array) && (array.reduce((acc, element) => {
        if (isString(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}