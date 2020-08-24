export const howManyNull = array => {
    return array.filter(element => element === null).length
}
export const howManyInfinity = array => {
    return array.filter(element => element === Infinity).length
}
export const howManyBoolean = array => {
    return array.filter(element => typeof element === "boolean").length
}
export const howManyNumber = array => {
    return array.filter(element => typeof element === "number").length
}
export const howManySymbol = array => {
    return array.filter(element => typeof element === "symbol").length
}
export const howManyString = array => {
    return array.filter(element => typeof element === "string").length
}
export const howManyObject = array => {
    return array.filter(element => typeof element === "object" && element !== null && element !== undefined).length
}
export const howManyArray = array => {
    return array.filter(element => Array.isArray(element)).length
}
export const howManyOdd = array => {
    return array.filter(element => typeof element === "number" && element % 2 === 1).length
}
export const howManyPair = array => {
    return array.filter(element => typeof element === "number" && element % 2 === 0).length
}