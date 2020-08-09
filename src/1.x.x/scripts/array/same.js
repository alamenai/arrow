import { isArray } from "../../helpers/is";
export function same(...arrays) {
    if (arrays.length === 1) return arrays[0]
    const args = Array.from([...arrays])
    let firstArray = args[0];
    let sameElements = new Set();
    args.forEach(array => args.indexOf(array) !== 0 &&
        array.forEach(value => firstArray.includes(value) && sameElements.add(value)))
    return Array.from(sameElements)
}