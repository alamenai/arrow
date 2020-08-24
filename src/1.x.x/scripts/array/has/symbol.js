import { isArray } from "../../../helpers/is";

const isSymbol = element => {
    return typeof element === "symbol"
}

export const hasAnySymbol = array => {
    return isArray(array) && !array.every((element) => isSymbol(element));
}

export const hasAtLeastSymbol = array => {
    return isArray(array) && array.some((element) => isSymbol(element));
}

export const hasOnceSymbol = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (isSymbol(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

export const hasOnlySymbol = array => {
    return isArray(array) && array.every((element) => isSymbol(element));
}

export const hasPairSymbol = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (isSymbol(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

export const hasExactSymbol = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return isArray(array) && (array.reduce((acc, element) => {
        if (isSymbol(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}