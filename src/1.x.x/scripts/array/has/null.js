import {
    checkArray,
} from "../../../helpers/check";

export function hasAnyNull(array) {
    return checkArray(array) && !array.every(element => element === null);
}

export function hasAtLeastNull(array) {
    return checkArray(array) && array.some(element => element === null);
}

export function hasOnceNull(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (element === null) acc += 1;
        return acc;
    }, 0) === 1);
}

export function hasOnlyNull(array) {
    return checkArray(array) && array.every((element) => element === null);
}

export function hasPairNull(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (element === null) acc += 1;
        return acc;
    }, 0) === 2);
}

export function hasExactNull(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return checkArray(array) && (array.reduce((acc, element) => {
        if (element === null) acc += 1;
        return acc;
    }, 0) === nullCount);
}