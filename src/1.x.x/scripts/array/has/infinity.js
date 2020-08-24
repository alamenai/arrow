import { isArray, } from "../../../helpers/is";

export const hasAnyInfinity = array => {
    return isArray(array) && array.every((element) => element !== Infinity);
}

export const hasAtLeastInfinity = array => {
    return isArray(array) && array.some((element) => element === Infinity);
}

export const hasOnceInfinity = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (element === Infinity) acc += 1;
        return acc;
    }, 0) === 1);
}

export const hasOnlyInfinity = array => {
    return isArray(array) && array.every((element) => element === Infinity);
}

export const hasPairInfinity = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (element === Infinity) acc += 1;
        return acc;
    }, 0) === 2);
}

export const hasExactInfinity = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return isArray(array) && (array.reduce((acc, element) => {
        if (element === Infinity) acc += 1;
        return acc;
    }, 0) === nullCount);
}