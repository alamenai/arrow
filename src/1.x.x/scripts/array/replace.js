import { isArray } from "../../helpers/is"

export const replace = (array, element, replacer) => {
    if (isArray(array)) {
        return array.map(value => (value === element && (value = replacer)) || value)
    }
}
export const replaceMany = (array, elements, replacers) => {
    if (isArray(array) && isArray(elements) && isArray(replacers)) {
        for (let element of elements) {
            array = array.map((value) => (value === element && (value = replacers[elements.indexOf(element)])) || value)
        }
        return array
    }
}