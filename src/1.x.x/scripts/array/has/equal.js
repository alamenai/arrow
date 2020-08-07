import {
    isArray,
} from "../../../helpers/check";

export function equalAll(array) {
    return isArray(array) && new Set(array).size === 1;
}