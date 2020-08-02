import {
    checkArray,
} from "../../../helpers/check";

function hasAnyNull(array) {
    return checkArray(array) && !array.every(element => element === null);
}

function hasAtLeastNull(array) {
    return checkArray(array) && array.some(element => element === null);
}

function hasOnceNull(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (element === null) acc += 1;
        return acc;
    }, 0) === 1);
}

function hasOnlyNull(array) {
    return checkArray(array) && array.every((element) => element === null);
}

function hasPairNull(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (element === null) acc += 1;
        return acc;
    }, 0) === 2);
}

function hasExactNull(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return checkArray(array) && (array.reduce((acc, element) => {
        if (element === null) acc += 1;
        return acc;
    }, 0) === nullCount);
}

export {
    hasAnyNull,
    hasAtLeastNull,
    hasOnceNull,
    hasOnlyNull,
    hasPairNull,
    hasExactNull,
};