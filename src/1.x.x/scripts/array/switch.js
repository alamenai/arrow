import { isArray } from "../../helpers/is"

export const switchByIndex = (array, switchedIndex, switcherIndex) => {
    if (isArray(array)) {
        if (!(switchedIndex < array.length && switcherIndex < array.length)) {
            throw new Error("One or both of the indexes are big then the length of the array")
        }
        let switcher = array[switchedIndex];
        array[switchedIndex] = array[switcherIndex];
        array[switcherIndex] = switcher;
        return array;
    }
}
export const switchByValue = (array, switchedValue, switcherValue) => {
    if (isArray(array)) {
        const index = array.indexOf(switchedValue);
        const switcherIndex = array.indexOf(switcherValue);
        if (index === -1 || switcherIndex === -1) {
            throw new Error("One or both of the values do not exist in the array")
        }
        return switchByIndex(array, index, switcherIndex)
    }
}