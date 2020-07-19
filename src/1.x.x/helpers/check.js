export function checkArray(array) {
    if (array === null || array === undefined) throw new Error("The parameter is null or undefined");
    if (!Array.isArray(array)) throw new Error("The parameter should be an array");
    if (array.length === 0) throw new Error("The array is empty");
    return true;
}