import { isArray } from "../../../helpers/is";
import { isBooleanArray } from "../../../helpers/is";

export const accBoolean = array => {
    if (isArray(array)) {
        return isBooleanArray(array) ? array.reduce((previous, next) => previous && next) : array
    }
}

export const accAll = array => {
    if (isArray(array)) {
        return array.reduce((previous, next) => previous + next)
    }
}

export default Accumulator