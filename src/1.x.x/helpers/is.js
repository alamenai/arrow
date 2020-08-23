export function isArray(array) {
    if (array === null || array === undefined) throw new Error("The parameter is null or undefined");
    if (!Array.isArray(array)) throw new Error("The parameter should be an array");
    if (array.length === 0) throw new Error("The array is empty");
    return true;
}
export function isNumberArray(array) {
    return array.every(element => typeof element === "number")
}

export function isStringArray(array) {
    return array.every(element => typeof element === "string")
}

export function isBooleanArray(array) {
    return array.every(element => typeof element === "boolean")
}
export function isObjectArray(array) {
    return array.every(element => typeof element === "object")
}
export function isPrimitiveArray(array) {
    if (array.every(element => typeof element === "object") ||
        array.every(element => typeof element === "boolean") ||
        array.every(element => typeof element === "number") ||
        array.every(element => typeof element === "string"))
        return true
    throw new Error("The elements has different types")
}