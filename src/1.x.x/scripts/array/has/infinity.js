import {
    checkArray,
} from "../../../helpers/check";

export function hasAnyInfinity(array) {
    return checkArray(array) && array.every((element) => Number.isFinite(element));
}

export function hasAtLeastInfinity(array) {
    return checkArray(array) && array.some((element) => Number.isFinite(element));
}

export function hasOnceInfinity(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (Number.isFinite(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

export function hasOnlyInfinity(array) {
    return checkArray(array) && !array.every((element) => Number.isFinite(element));
}

export function hasPairInfinity(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (Number.isFinite(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

export function hasExactInfinity(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return checkArray(array) && (array.reduce((acc, element) => {
        if (Number.isFinite(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}