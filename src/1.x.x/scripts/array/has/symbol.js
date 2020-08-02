import {
    checkArray,
} from "../../../helpers/check";

function isSymbol(element) {
    return typeof element === "symbol"
}

export function hasAnySymbol(array) {
    return checkArray(array) && !array.every((element) => isSymbol(element));
}

export function hasAtLeastSymbol(array) {
    return checkArray(array) && array.some((element) => isSymbol(element));
}

export function hasOnceSymbol(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (isSymbol(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

export function hasOnlySymbol(array) {
    return checkArray(array) && array.every((element) => isSymbol(element));
}

export function hasPairSymbol(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (isSymbol(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

export function hasExactSymbol(array, nullCount) {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return checkArray(array) && (array.reduce((acc, element) => {
        if (isSymbol(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}