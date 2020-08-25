import { isArray } from "../../helpers/is"

export const toUpperCase = array => {
    if (isArray(array)) {
        return array.map(value => (typeof value === "string" && value.toUpperCase()) || value)
    }
}