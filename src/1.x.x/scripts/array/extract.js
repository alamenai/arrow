import { isArray } from "../../helpers/is";

export const extractNull = array => {
    if (isArray(array)) {
        return array.filter(value => value === null)
    }
}

export const extractSymbol = array => {
    if (isArray(array)) {
        return array.filter(value => typeof value === "symbol")
    }
}

export const extractString = array => {
    if (isArray(array)) {
        return array.filter(value => typeof value === "string")
    }
}

export const extractNumber = array => {
    if (isArray(array)) {
        return array.filter(value => typeof value === "number")
    }
}

export const extractObject = array => {
    if (isArray(array)) {
        return array.filter(value => typeof value === "object" && !Array.isArray(value) && value !== null)
    }
}

export const extractArray = array => {
    if (isArray(array)) {
        return array.filter(value => Array.isArray(value))
    }
}

export const extractOdd = array => {
    if (isArray(array)) {
        return array.filter(value => typeof value === "number" && value % 2 !== 0)
    }
}

export const extractPair = array => {
    if (isArray(array)) {
        return array.filter(value => typeof value === "number" && value % 2 === 0)
    }
}

export const extractByOddIndex = array => {
    if (isArray(array)) {
        return array.filter((_value, index) => index % 2 !== 0)
    }
}

export const extractByPaiIndex = array => {
    if (isArray(array)) {
        return array.filter((_value, index) => index % 2 === 0)
    }
}