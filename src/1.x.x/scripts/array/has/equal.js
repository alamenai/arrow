import {
    isArray,
} from "../../../helpers/is";

export function equalAll(array) {
    return isArray(array) && new Set(array).size === 1;
}