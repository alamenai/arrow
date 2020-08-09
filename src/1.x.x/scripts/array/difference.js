import { isArray } from "../../helpers/is";
export function difference(...arrays) {
    if (arrays.length === 1) return arrays[0]
    const args = Array.from([...arrays])
    let initArray = args[0];
    let differentElements = new Set();
    args.forEach(array => args.indexOf(array) !== 0 &&
        array.forEach(value => !initArray.includes(value) && differentElements.add(value)))
    return Array.from(differentElements)
}