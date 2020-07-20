import {
    checkArray
} from "../../../helpers/check";

function hasAnyNull(array) {
    return checkArray(array) && !array.includes(null);
}

function hasAtLeastNull(array) {
    return checkArray(array) && array.includes(null);
}

function hasOnceNull(array) {
    return checkArray(array) && (array.reduce((acc, value) => {
        if (acc === 2) return 2;
        if (value === null) acc += 1;
        return acc;
    }, 0) === 1);
}

function hasOnlyNull(array) {
    return checkArray(array) && array.every((value) => value === null);
}

function hasPairNull(array) {
    return checkArray(array) && (array.reduce((acc, value) => {
        if (value === null) acc += 1;
        return acc;
    }, 0) === 2);
}

function hasExactNull(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return checkArray(array) && (array.reduce((acc, value) => {
        if (value === null) acc += 1;
        return acc;
    }, 0) === nullCount);
}

export default {
    hasAnyNull,
    hasAtLeastNull,
    hasOnceNull,
    hasOnlyNull,
    hasPairNull,
    hasExactNull,
};