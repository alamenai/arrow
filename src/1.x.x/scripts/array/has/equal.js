import {
    checkArray,
} from "../../../helpers/check";

export function equalAll(array) {
    return checkArray(array) && new Set(array).size === 1;
}