import {
    checkArray
} from "../../../helpers/check";

export function accBoolean(array) {
    if (checkArray(array)) {
        if (isBooleanArray(array)) {
            return array.reduce((previous, next) => previous && next)
        }
    }
}

export function accAll(array) {
    if (checkArray(array)) {
        return array.reduce((previous, next) => previous + next)
    }
}

function isBooleanArray(array) {
    return array.every(element => typeof element === "boolean")
}