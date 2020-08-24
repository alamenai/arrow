import { isArray, } from "../../../helpers/is";

export const hasAnyNaN = array => {
    return isArray(array) && !array.every((element) => Number.isNaN(element));
}

export const hasAtLeastNaN = array => {
    return isArray(array) && array.some((element) => Number.isNaN(element));
}

export const hasOnceNaN = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (Number.isNaN(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

export const hasOnlyNaN = array => {
    return isArray(array) && array.every((element) => Number.isNaN(element));
}

export const hasPairNaN = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (Number.isNaN(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

export const hasExactNaN = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return isArray(array) && (array.reduce((acc, element) => {
        if (Number.isNaN(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}