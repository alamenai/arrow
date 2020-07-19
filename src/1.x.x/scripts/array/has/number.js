import { checkArray } from "../../../helpers/check";

function hasAnyNumber(array) {
  return checkArray(array) && array.every((value) => typeof value !== "number");
}

function hasAtLeastNumber(array) {
  return checkArray(array) && array.some((value) => typeof value === "number");
}

function hasOnceNumber(array) {
  return checkArray(array) && (array.reduce((acc, value) => {
    if (acc === 2) return 2;
    if (typeof value === "number") acc += 1;
    return acc;
  }, 0) === 1);
}

function hasOnlyNumber(array) {
  return checkArray(array) && array.every((value) => typeof value === "number");
}

function hasPairNumber(array) {
  return checkArray(array) && (array.reduce((acc, value) => {
    if (typeof value === "number") acc += 1;
    return acc;
  }, 0) === 2);
}

function hasExactNumber(array, numberCount) {
  if (typeof numberCount !== "number") throw new Error("The second parameter should be a number");
  return checkArray(array) && (array.reduce((acc, value) => {
    if (typeof value === "number") acc += 1;
    return acc;
  }, 0) === numberCount);
}

export default {
  hasAnyNumber, hasAtLeastNumber, hasOnceNumber, hasOnlyNumber, hasPairNumber, hasExactNumber,
};