import {
    isArray,
} from "../../../helpers/check";

export function hasAnyInfinity(array) {
    return isArray(array) && array.every((element) => element !== Infinity);
}

export function hasAtLeastInfinity(array) {
    return isArray(array) && array.some((element) => element === Infinity);
}

export function hasOnceInfinity(array) {
    return isArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (element === Infinity) acc += 1;
        return acc;
    }, 0) === 1);
}

export function hasOnlyInfinity(array) {
    return isArray(array) && array.every((element) => element === Infinity);
}

export function hasPairInfinity(array) {
    return isArray(array) && (array.reduce((acc, element) => {
        if (element === Infinity) acc += 1;
        return acc;
    }, 0) === 2);
}

export function hasExactInfinity(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return isArray(array) && (array.reduce((acc, element) => {
        if (element === Infinity) acc += 1;
        return acc;
    }, 0) === nullCount);
}