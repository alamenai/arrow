export function howManyNull(array) {
    return array.filter(element => element === null).length
}
export function howManyInfinity(array) {
    return array.filter(element => element === Infinity).length
}
export function howManyBoolean(array) {
    return array.filter(element => typeof element === "boolean").length
}
export function howManyNumber(array) {
    return array.filter(element => typeof element === "number").length
}
export default function howManySymbol(array) {
    return array.filter(element => typeof element === "symbol").length
}
export function howManyString(array) {
    return array.filter(element => typeof element === "string").length
}
export function howManyObject(array) {
    return array.filter(element => typeof element === "object").length
}
export function howManyArray(array) {
    return array.filter(element => Array.isArray(element)).length
}
export function howManyOdd(array = []) {
    return array.filter(element => typeof element === "number" && element % 2 === 1).length
}
export function howManyNotOdd(array = []) {
    return array.filter(element => typeof element === "number" && element % 2 === 0).length
}