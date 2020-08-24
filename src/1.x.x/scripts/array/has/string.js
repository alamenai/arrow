import { isArray, } from "../../../helpers/is";

const isString = element => {
    return typeof element === "string"
}

export const hasAnyString = array => {
    return isArray(array) && !array.every((element) => isString(element));
}

export const hasAtLeastString = array => {
    return isArray(array) && array.some((element) => isString(element));
}

export const hasOnceString = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (isString(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

export const hasOnlyString = array => {
    return isArray(array) && array.every((element) => isString(element));
}

export const hasPairString = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (isString(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

export const hasExactString = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return isArray(array) && (array.reduce((acc, element) => {
        if (isString(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}