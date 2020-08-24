import { isArray } from "../../../helpers/is";

export const uniqueAll = array => {
    return isArray(array) && (new Set(array).size === array.length)
}