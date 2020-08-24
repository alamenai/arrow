import { isArray, } from "../../../helpers/is";

export const hasAnyBoolean = (array) => {
    return isArray(array) && (!array.includes(true) && !array.includes(false));
}

export const hasAtLeastBoolean = (array) => {
    return isArray(array) && (array.includes(true) || array.includes(false));
}

export const hasOnceBoolean = (array) => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (typeof element === "boolean") acc += 1;
        return acc;
    }, 0) === 1);
}

export const hasOnlyBoolean = (array) => {
    return isArray(array) && array.every((element) => typeof element === "boolean");
}

export const hasPairBoolean = (array) => {
    return isArray(array) && (array.reduce((acc, element) => {
        if (typeof element === "boolean") acc += 1;
        return acc;
    }, 0) === 2);
}

export const hasExactBoolean = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return isArray(array) && (array.reduce((acc, element) => {
        if (typeof element === "boolean") acc += 1;
        return acc;
    }, 0) === nullCount);
}