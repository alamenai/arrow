import {
    checkArray
} from "../../../helpers/check";

import {
    isBooleanArray
} from "../../../helpers/is";

export function accBoolean(array) {
    if (checkArray(array)) {
        return isBooleanArray(array) ? array.reduce((previous, next) => previous && next) : array
    }
}

export function accAll(array) {
    if (checkArray(array)) {
        return array.reduce((previous, next) => previous + next)
    }
}