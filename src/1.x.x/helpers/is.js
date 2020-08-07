export function isNumberArray(array) {
    return array.every(element => typeof element === "number")
}

export function isBooleanArray(array) {
    return array.every(element => typeof element === "boolean")
}