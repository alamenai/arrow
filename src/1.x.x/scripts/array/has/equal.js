import {
    checkArray
} from "../../../helpers/check";

function equalAll(array) {
    return checkArray(array) && new Set(array).size === 1

}

export default {
    equalAll
}