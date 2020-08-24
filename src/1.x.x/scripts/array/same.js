import { isArray } from "../../helpers/is";

export const same = (...arrays) => {
    if (arrays.length === 1) return arrays[0]
    const args = Array.from([...arrays])
    let initArray = args[0];
    let sameElements = new Set();
    args.forEach(array => isArray(array) && args.indexOf(array) !== 0 &&
        array.forEach(value => initArray.includes(value) && sameElements.add(value)))
    return Array.from(sameElements)
}