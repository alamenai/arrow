export function isNumberArray(array) {
    return array.every(element => typeof element === "number")
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