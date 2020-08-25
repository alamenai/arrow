import { isArray } from "../../helpers/is"

export const concat = (array, element) => {
    if (!element) {
        throw 'null or undefined values are not accepted for the concatenation'
    }
    if (isArray(array)) {
        return array.map(value => {
            if (!value) {
                return value
            }
            if ((typeof value === "number" || typeof value === "string") && (typeof element === "number")) {
                return Number.parseFloat(String(value).concat(String(element)))
            }
            if (typeof value === "string" && typeof element === "string") {
                return value.concat(element)
            }
            if (typeof value === "number" && typeof element === "string") {
                return String(value).concat(element)
            }
        })
    }
}