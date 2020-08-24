import { isArray } from "../../../helpers/is";

export const equalAll = array => {
    return isArray(array) && new Set(array).size === 1;
}