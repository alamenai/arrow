export const isArray = array => {
    if (array === null || array === undefined) throw new Error("The parameter is null or undefined");
    if (!Array.isArray(array)) throw new Error("The parameter should be an array");
    if (array.length === 0) throw new Error("The array is empty");
    return true;
}
export const isNumberArray = array => {
    return array.every(element => typeof element === "number")
}

export const isStringArray = array => {
    return array.every(element => typeof element === "string")
}

export const isBooleanArray = array => {
    return array.every(element => typeof element === "boolean")
}
export const isObjectArray = array => {
    return array.every(element => typeof element === "object")
}
export const isPrimitiveArray = array => {
    if (array.every(element => typeof element === "object") ||
        array.every(element => typeof element === "boolean") ||
        array.every(element => typeof element === "number") ||
        array.every(element => typeof element === "string"))
        return true
    throw new Error("The elements have different types")
}