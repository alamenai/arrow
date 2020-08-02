import {
    checkArray,
} from "../../../helpers/check";

function hasAnyBoolean(array) {
    return checkArray(array) && (!array.includes(true) && !array.includes(false));
}

function hasAtLeastBoolean(array) {
    return checkArray(array) && (array.includes(true) || array.includes(false));
}

function hasOnceBoolean(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (typeof element === "boolean") acc += 1;
        return acc;
    }, 0) === 1);
}

function hasOnlyBoolean(array) {
    return checkArray(array) && array.every((element) => typeof element === "boolean");
}

function hasPairBoolean(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (typeof element === "boolean") acc += 1;
        return acc;
    }, 0) === 2);
}

function hasExactBoolean(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return checkArray(array) && (array.reduce((acc, element) => {
        if (typeof element === "boolean") acc += 1;
        return acc;
    }, 0) === nullCount);
}

export {
    hasAnyBoolean,
    hasAtLeastBoolean,
    hasOnceBoolean,
    hasOnlyBoolean,
    hasPairBoolean,
    hasExactBoolean,
};