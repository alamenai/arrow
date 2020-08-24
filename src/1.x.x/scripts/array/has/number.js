import { isArray, } from "../../../helpers/is";

export const hasAnyNumber = array => {
    return isArray(array) && array.every((element) => typeof element !== "number");
}

export const hasAtLeastNumber = array => {
    return isArray(array) && array.some((element) => typeof element === "number");
}

export const hasOnceNumber = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (typeof element === "number") acc += 1;
        return acc;
    }, 0) === 1);
}

export const hasOnlyNumber = array => {
    return isArray(array) && array.every((element) => typeof element === "number");
}

export const hasPairNumber = array => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (typeof element === "number") acc += 1;
        return acc;
    }, 0) === 2);
}

export const hasExactNumber = (array, numberCount) => {
    if (typeof numberCount !== "number") throw new Error("The second parameter should be a number");
    return isArray(array) && (array.reduce((acc, element) => {
        if (typeof element === "number") acc += 1;
        return acc;
    }, 0) === numberCount);
}