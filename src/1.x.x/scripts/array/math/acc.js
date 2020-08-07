import {
    isArray
} from "../../../helpers/check";

import {
    isBooleanArray
} from "../../../helpers/is";

export function accBoolean(array) {
    if (isArray(array)) {
        return isBooleanArray(array) ? array.reduce((previous, next) => previous && next) : array
    }
}

export function accAll(array) {
    if (isArray(array)) {
        return array.reduce((previous, next) => previous + next)
    }
}