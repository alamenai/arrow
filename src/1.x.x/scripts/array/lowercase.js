import { isArray } from "../../helpers/is"

export const toLowerCase = array => {
    if (isArray(array)) {
        return array.map(value => (typeof value === "string" && value.toLowerCase()) || value)
    }
}