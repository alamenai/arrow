import { isArray } from "../../helpers/is";
export function same(...arrays) {
    const args = Array.from([...arrays])
    let firstArray = args[0];
    let sameElements = new Set();
    for (let array of args) {
        if (args.indexOf(array) !== 0) {
            array.forEach(value => firstArray.includes(value) && sameElements.add(value))
        }
    }
    return Array.from(sameElements)
}