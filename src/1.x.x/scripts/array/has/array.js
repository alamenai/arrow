import {
    checkArray,
} from "../../../helpers/check";

function hasAnyArray(array) {
    return checkArray(array) && !array.every((element) => Array.isArray(element));
}

function hasAtLeastArray(array) {
    return checkArray(array) && array.some((element) => Array.isArray(element));
}

function hasOnceArray(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (Array.isArray(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

function hasOnlyArray(array) {
    return checkArray(array) && array.every((element) => Array.isArray(element));
}

function hasPairArray(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (Array.isArray(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

function hasExactArray(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return checkArray(array) && (array.reduce((acc, element) => {
        if (Array.isArray(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}

export {
    hasAnyArray,
    hasAtLeastArray,
    hasOnceArray,
    hasOnlyArray,
    hasPairArray,
    hasExactArray,
};