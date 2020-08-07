import {
    isArray,
} from "../../../helpers/check";

export function hasAnyNaN(array) {
    return isArray(array) && !array.every((element) => Number.isNaN(element));
}

export function hasAtLeastNaN(array) {
    return isArray(array) && array.some((element) => Number.isNaN(element));
}

export function hasOnceNaN(array) {
    return isArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (Number.isNaN(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

export function hasOnlyNaN(array) {
    return isArray(array) && array.every((element) => Number.isNaN(element));
}

export function hasPairNaN(array) {
    return isArray(array) && (array.reduce((acc, element) => {
        if (Number.isNaN(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

export function hasExactNaN(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return isArray(array) && (array.reduce((acc, element) => {
        if (Number.isNaN(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}