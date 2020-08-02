import {
    checkArray,
} from "../../../helpers/check";

export function hasAnyNumber(array) {
    return checkArray(array) && array.every((element) => typeof element !== "number");
}

export function hasAtLeastNumber(array) {
    return checkArray(array) && array.some((element) => typeof element === "number");
}

export function hasOnceNumber(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (typeof element === "number") acc += 1;
        return acc;
    }, 0) === 1);
}

export function hasOnlyNumber(array) {
    return checkArray(array) && array.every((element) => typeof element === "number");
}

export function hasPairNumber(array) {
    return checkArray(array) && (array.reduce((acc, element) => {
        if (typeof element === "number") acc += 1;
        return acc;
    }, 0) === 2);
}

export function hasExactNumber(array, numberCount) {
    if (typeof numberCount !== "number") throw new Error("The second parameter should be a number");
    return checkArray(array) && (array.reduce((acc, element) => {
        if (typeof element === "number") acc += 1;
        return acc;
    }, 0) === numberCount);
}