import {
    checkArray,
} from "../../../helpers/check";

export function hasAnyArray(array) {
    return checkArray(array) && !array.every((element) => Array.isArray(element));
}

export function hasAtLeastArray(array) {
    return checkArray(array) && array.some((element) => Array.isArray(element));
}

export function hasOnceArray(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (Array.isArray(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

export function hasOnlyArray(array) {
    return checkArray(array) && array.every((element) => Array.isArray(element));
}

export function hasPairArray(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (Array.isArray(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

export function hasExactArray(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return checkArray(array) && (array.reduce((acc, element) => {
        if (Array.isArray(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}