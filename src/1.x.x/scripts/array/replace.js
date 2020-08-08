import {
    isArray
} from "../../helpers/is"

export function replace(array, element, replacer) {
    if (isArray(array)) {
        return array.map(value => (value === element && (value = replacer)) || value)
    }
}