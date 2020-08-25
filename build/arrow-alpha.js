/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/1.x.x/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/1.x.x/helpers/has.js":
/*!**********************************!*\
  !*** ./src/1.x.x/helpers/has.js ***!
  \**********************************/
/*! exports provided: hasElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasElement", function() { return hasElement; });
/* harmony import */ var _1_x_x_helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../1.x.x/helpers/is */ "./src/1.x.x/helpers/is.js");


const hasElement = (array, element) => {
    return Object(_1_x_x_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isObjectArray"])(array) ? hasObject(array, element) : hasValue(array, element)
}

const hasValue = (array, value) => {
    if (Object(_1_x_x_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isStringArray"])(array)) {
        return array.some(element => element.toLowerCase() === value.toLowerCase())
    }
    return array.some(element => element === value)
}

const hasObject = (array, key) => {
    if (Object(_1_x_x_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isStringArray"])(array)) {
        return array.some(element => Object.keys(element)[0].toLowerCase() === key.toLowerCase())
    }
    return array.some(element => Object.keys(element)[0] === key)
}

/***/ }),

/***/ "./src/1.x.x/helpers/is.js":
/*!*********************************!*\
  !*** ./src/1.x.x/helpers/is.js ***!
  \*********************************/
/*! exports provided: isArray, isNumberArray, isStringArray, isBooleanArray, isObjectArray, isPrimitiveArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberArray", function() { return isNumberArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStringArray", function() { return isStringArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBooleanArray", function() { return isBooleanArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectArray", function() { return isObjectArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitiveArray", function() { return isPrimitiveArray; });
const isArray = array => {
    if (array === null || array === undefined) throw new Error("The parameter is null or undefined");
    if (!Array.isArray(array)) throw new Error("The parameter should be an array");
    if (array.length === 0) throw new Error("The array is empty");
    return true;
}
const isNumberArray = array => {
    return array.every(element => typeof element === "number")
}

const isStringArray = array => {
    return array.every(element => typeof element === "string")
}

const isBooleanArray = array => {
    return array.every(element => typeof element === "boolean")
}
const isObjectArray = array => {
    return array.every(element => typeof element === "object")
}
const isPrimitiveArray = array => {
    if (array.every(element => typeof element === "object") ||
        array.every(element => typeof element === "boolean") ||
        array.every(element => typeof element === "number") ||
        array.every(element => typeof element === "string"))
        return true
    throw new Error("The elements have different types")
}

/***/ }),

/***/ "./src/1.x.x/index.js":
/*!****************************!*\
  !*** ./src/1.x.x/index.js ***!
  \****************************/
/*! exports provided: Has, Math, Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_array_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/array/has */ "./src/1.x.x/scripts/array/has/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Has", function() { return _scripts_array_has__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _scripts_array_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/array/math */ "./src/1.x.x/scripts/array/math/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Math", function() { return _scripts_array_math__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _scripts_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/array */ "./src/1.x.x/scripts/array/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return _scripts_array__WEBPACK_IMPORTED_MODULE_2__; });





/***/ }),

/***/ "./src/1.x.x/scripts/array/between.js":
/*!********************************************!*\
  !*** ./src/1.x.x/scripts/array/between.js ***!
  \********************************************/
/*! exports provided: betweenRange, between */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "betweenRange", function() { return betweenRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");


const betweenRange = (array, from, to, start, end) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            const range = array.slice(from, to + 1)
            return between(range, start, end)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
    return array.every(element => element > start - 1 && element < end + 1)
}

const between = (array, start, end) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array))
        return array.every(element => element > start - 1 && element < end + 1)
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/convert.js":
/*!********************************************!*\
  !*** ./src/1.x.x/scripts/array/convert.js ***!
  \********************************************/
/*! exports provided: convertToLowerCase, convertRangeToLowerCase, convertToUpperCase, convertRangeToUpperCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToLowerCase", function() { return convertToLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertRangeToLowerCase", function() { return convertRangeToLowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToUpperCase", function() { return convertToUpperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertRangeToUpperCase", function() { return convertRangeToUpperCase; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");


function convertToLowerCase(array) {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {

    }
}

function convertRangeToLowerCase(array, from, to) {

}

function convertToUpperCase(array) {

}

function convertRangeToUpperCase(array, from, to) {

}

/***/ }),

/***/ "./src/1.x.x/scripts/array/difference.js":
/*!***********************************************!*\
  !*** ./src/1.x.x/scripts/array/difference.js ***!
  \***********************************************/
/*! exports provided: difference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return difference; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");


const difference = (...arrays) => {
    if (arrays.length === 1) return arrays[0]
    const args = Array.from([...arrays])
    let initArray = args[0];
    let differentElements = new Set();
    args.forEach(array => args.indexOf(array) !== 0 && Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) &&
        array.forEach(value => !initArray.includes(value) && differentElements.add(value)))
    return Array.from(differentElements)
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/extract.js":
/*!********************************************!*\
  !*** ./src/1.x.x/scripts/array/extract.js ***!
  \********************************************/
/*! exports provided: extractNull, extractSymbol, extractString, extractNumber, extractObject, extractArray, extractOdd, extractPair, extractByOddIndex, extractByPaiIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractNull", function() { return extractNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractSymbol", function() { return extractSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractString", function() { return extractString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractNumber", function() { return extractNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractObject", function() { return extractObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractArray", function() { return extractArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractOdd", function() { return extractOdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractPair", function() { return extractPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractByOddIndex", function() { return extractByOddIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractByPaiIndex", function() { return extractByPaiIndex; });
function extractNull(array) {}

function extractSymbol(array) {}

function extractString(array) {}

function extractNumber(array) {}

function extractObject(array) {}

function extractArray(array) {}

function extractOdd(array) {}

function extractPair(array) {}

function extractByOddIndex(array) {}

function extractByPaiIndex(array) {}

/***/ }),

/***/ "./src/1.x.x/scripts/array/has/array.js":
/*!**********************************************!*\
  !*** ./src/1.x.x/scripts/array/has/array.js ***!
  \**********************************************/
/*! exports provided: hasAnyArray, hasAtLeastArray, hasOnceArray, hasOnlyArray, hasPairArray, hasExactArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAnyArray", function() { return hasAnyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastArray", function() { return hasAtLeastArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnceArray", function() { return hasOnceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnlyArray", function() { return hasOnlyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPairArray", function() { return hasPairArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExactArray", function() { return hasExactArray; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const hasAnyArray = (array) => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && !array.every((element) => Array.isArray(element));
}

const hasAtLeastArray = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.some((element) => Array.isArray(element));
}

const hasOnceArray = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (acc === 2) return acc;
        if (Array.isArray(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

const hasOnlyArray = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.every((element) => Array.isArray(element));
}

const hasPairArray = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (Array.isArray(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

const hasExactArray = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (Array.isArray(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/has/boolean.js":
/*!************************************************!*\
  !*** ./src/1.x.x/scripts/array/has/boolean.js ***!
  \************************************************/
/*! exports provided: hasAnyBoolean, hasAtLeastBoolean, hasOnceBoolean, hasOnlyBoolean, hasPairBoolean, hasExactBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAnyBoolean", function() { return hasAnyBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastBoolean", function() { return hasAtLeastBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnceBoolean", function() { return hasOnceBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnlyBoolean", function() { return hasOnlyBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPairBoolean", function() { return hasPairBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExactBoolean", function() { return hasExactBoolean; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const hasAnyBoolean = (array) => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (!array.includes(true) && !array.includes(false));
}

const hasAtLeastBoolean = (array) => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.includes(true) || array.includes(false));
}

const hasOnceBoolean = (array) => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (typeof element === "boolean") acc += 1;
        return acc;
    }, 0) === 1);
}

const hasOnlyBoolean = (array) => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.every((element) => typeof element === "boolean");
}

const hasPairBoolean = (array) => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (typeof element === "boolean") acc += 1;
        return acc;
    }, 0) === 2);
}

const hasExactBoolean = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (typeof element === "boolean") acc += 1;
        return acc;
    }, 0) === nullCount);
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/has/equal.js":
/*!**********************************************!*\
  !*** ./src/1.x.x/scripts/array/has/equal.js ***!
  \**********************************************/
/*! exports provided: equalAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalAll", function() { return equalAll; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const equalAll = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && new Set(array).size === 1;
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/has/index.js":
/*!**********************************************!*\
  !*** ./src/1.x.x/scripts/array/has/index.js ***!
  \**********************************************/
/*! exports provided: equalAll, uniqueAll, hasAnyArray, hasAtLeastArray, hasExactArray, hasOnceArray, hasOnlyArray, hasPairArray, hasAnyBoolean, hasAtLeastBoolean, hasExactBoolean, hasOnceBoolean, hasOnlyBoolean, hasPairBoolean, hasAnyInfinity, hasAtLeastInfinity, hasExactInfinity, hasOnceInfinity, hasOnlyInfinity, hasPairInfinity, hasAnyNaN, hasAtLeastNaN, hasExactNaN, hasOnceNaN, hasOnlyNaN, hasPairNaN, hasAnyNull, hasAtLeastNull, hasExactNull, hasOnceNull, hasOnlyNull, hasPairNull, hasAnyNumber, hasAtLeastNumber, hasExactNumber, hasOnceNumber, hasOnlyNumber, hasPairNumber, hasAnyObject, hasAtLeastObject, hasExactObject, hasOnceObject, hasOnlyObject, hasPairObject, hasAnyString, hasAtLeastString, hasExactString, hasOnceString, hasOnlyString, hasPairString, hasAnySymbol, hasAtLeastSymbol, hasExactSymbol, hasOnceSymbol, hasOnlySymbol, hasPairSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equal */ "./src/1.x.x/scripts/array/has/equal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equalAll", function() { return _equal__WEBPACK_IMPORTED_MODULE_0__["equalAll"]; });

/* harmony import */ var _unique__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unique */ "./src/1.x.x/scripts/array/has/unique.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueAll", function() { return _unique__WEBPACK_IMPORTED_MODULE_1__["uniqueAll"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array */ "./src/1.x.x/scripts/array/has/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAnyArray", function() { return _array__WEBPACK_IMPORTED_MODULE_2__["hasAnyArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastArray", function() { return _array__WEBPACK_IMPORTED_MODULE_2__["hasAtLeastArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasExactArray", function() { return _array__WEBPACK_IMPORTED_MODULE_2__["hasExactArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnceArray", function() { return _array__WEBPACK_IMPORTED_MODULE_2__["hasOnceArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnlyArray", function() { return _array__WEBPACK_IMPORTED_MODULE_2__["hasOnlyArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasPairArray", function() { return _array__WEBPACK_IMPORTED_MODULE_2__["hasPairArray"]; });

/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boolean */ "./src/1.x.x/scripts/array/has/boolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAnyBoolean", function() { return _boolean__WEBPACK_IMPORTED_MODULE_3__["hasAnyBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastBoolean", function() { return _boolean__WEBPACK_IMPORTED_MODULE_3__["hasAtLeastBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasExactBoolean", function() { return _boolean__WEBPACK_IMPORTED_MODULE_3__["hasExactBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnceBoolean", function() { return _boolean__WEBPACK_IMPORTED_MODULE_3__["hasOnceBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnlyBoolean", function() { return _boolean__WEBPACK_IMPORTED_MODULE_3__["hasOnlyBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasPairBoolean", function() { return _boolean__WEBPACK_IMPORTED_MODULE_3__["hasPairBoolean"]; });

/* harmony import */ var _infinity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infinity */ "./src/1.x.x/scripts/array/has/infinity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAnyInfinity", function() { return _infinity__WEBPACK_IMPORTED_MODULE_4__["hasAnyInfinity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastInfinity", function() { return _infinity__WEBPACK_IMPORTED_MODULE_4__["hasAtLeastInfinity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasExactInfinity", function() { return _infinity__WEBPACK_IMPORTED_MODULE_4__["hasExactInfinity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnceInfinity", function() { return _infinity__WEBPACK_IMPORTED_MODULE_4__["hasOnceInfinity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnlyInfinity", function() { return _infinity__WEBPACK_IMPORTED_MODULE_4__["hasOnlyInfinity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasPairInfinity", function() { return _infinity__WEBPACK_IMPORTED_MODULE_4__["hasPairInfinity"]; });

/* harmony import */ var _nan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nan */ "./src/1.x.x/scripts/array/has/nan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAnyNaN", function() { return _nan__WEBPACK_IMPORTED_MODULE_5__["hasAnyNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastNaN", function() { return _nan__WEBPACK_IMPORTED_MODULE_5__["hasAtLeastNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasExactNaN", function() { return _nan__WEBPACK_IMPORTED_MODULE_5__["hasExactNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnceNaN", function() { return _nan__WEBPACK_IMPORTED_MODULE_5__["hasOnceNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnlyNaN", function() { return _nan__WEBPACK_IMPORTED_MODULE_5__["hasOnlyNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasPairNaN", function() { return _nan__WEBPACK_IMPORTED_MODULE_5__["hasPairNaN"]; });

/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./null */ "./src/1.x.x/scripts/array/has/null.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAnyNull", function() { return _null__WEBPACK_IMPORTED_MODULE_6__["hasAnyNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastNull", function() { return _null__WEBPACK_IMPORTED_MODULE_6__["hasAtLeastNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasExactNull", function() { return _null__WEBPACK_IMPORTED_MODULE_6__["hasExactNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnceNull", function() { return _null__WEBPACK_IMPORTED_MODULE_6__["hasOnceNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnlyNull", function() { return _null__WEBPACK_IMPORTED_MODULE_6__["hasOnlyNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasPairNull", function() { return _null__WEBPACK_IMPORTED_MODULE_6__["hasPairNull"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number */ "./src/1.x.x/scripts/array/has/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAnyNumber", function() { return _number__WEBPACK_IMPORTED_MODULE_7__["hasAnyNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastNumber", function() { return _number__WEBPACK_IMPORTED_MODULE_7__["hasAtLeastNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasExactNumber", function() { return _number__WEBPACK_IMPORTED_MODULE_7__["hasExactNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnceNumber", function() { return _number__WEBPACK_IMPORTED_MODULE_7__["hasOnceNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnlyNumber", function() { return _number__WEBPACK_IMPORTED_MODULE_7__["hasOnlyNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasPairNumber", function() { return _number__WEBPACK_IMPORTED_MODULE_7__["hasPairNumber"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object */ "./src/1.x.x/scripts/array/has/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAnyObject", function() { return _object__WEBPACK_IMPORTED_MODULE_8__["hasAnyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastObject", function() { return _object__WEBPACK_IMPORTED_MODULE_8__["hasAtLeastObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasExactObject", function() { return _object__WEBPACK_IMPORTED_MODULE_8__["hasExactObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnceObject", function() { return _object__WEBPACK_IMPORTED_MODULE_8__["hasOnceObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnlyObject", function() { return _object__WEBPACK_IMPORTED_MODULE_8__["hasOnlyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasPairObject", function() { return _object__WEBPACK_IMPORTED_MODULE_8__["hasPairObject"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./string */ "./src/1.x.x/scripts/array/has/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAnyString", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["hasAnyString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastString", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["hasAtLeastString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasExactString", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["hasExactString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnceString", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["hasOnceString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnlyString", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["hasOnlyString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasPairString", function() { return _string__WEBPACK_IMPORTED_MODULE_9__["hasPairString"]; });

/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./symbol */ "./src/1.x.x/scripts/array/has/symbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAnySymbol", function() { return _symbol__WEBPACK_IMPORTED_MODULE_10__["hasAnySymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastSymbol", function() { return _symbol__WEBPACK_IMPORTED_MODULE_10__["hasAtLeastSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasExactSymbol", function() { return _symbol__WEBPACK_IMPORTED_MODULE_10__["hasExactSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnceSymbol", function() { return _symbol__WEBPACK_IMPORTED_MODULE_10__["hasOnceSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOnlySymbol", function() { return _symbol__WEBPACK_IMPORTED_MODULE_10__["hasOnlySymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasPairSymbol", function() { return _symbol__WEBPACK_IMPORTED_MODULE_10__["hasPairSymbol"]; });

























/***/ }),

/***/ "./src/1.x.x/scripts/array/has/infinity.js":
/*!*************************************************!*\
  !*** ./src/1.x.x/scripts/array/has/infinity.js ***!
  \*************************************************/
/*! exports provided: hasAnyInfinity, hasAtLeastInfinity, hasOnceInfinity, hasOnlyInfinity, hasPairInfinity, hasExactInfinity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAnyInfinity", function() { return hasAnyInfinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastInfinity", function() { return hasAtLeastInfinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnceInfinity", function() { return hasOnceInfinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnlyInfinity", function() { return hasOnlyInfinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPairInfinity", function() { return hasPairInfinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExactInfinity", function() { return hasExactInfinity; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const hasAnyInfinity = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.every((element) => element !== Infinity);
}

const hasAtLeastInfinity = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.some((element) => element === Infinity);
}

const hasOnceInfinity = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (element === Infinity) acc += 1;
        return acc;
    }, 0) === 1);
}

const hasOnlyInfinity = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.every((element) => element === Infinity);
}

const hasPairInfinity = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (element === Infinity) acc += 1;
        return acc;
    }, 0) === 2);
}

const hasExactInfinity = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (element === Infinity) acc += 1;
        return acc;
    }, 0) === nullCount);
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/has/nan.js":
/*!********************************************!*\
  !*** ./src/1.x.x/scripts/array/has/nan.js ***!
  \********************************************/
/*! exports provided: hasAnyNaN, hasAtLeastNaN, hasOnceNaN, hasOnlyNaN, hasPairNaN, hasExactNaN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAnyNaN", function() { return hasAnyNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastNaN", function() { return hasAtLeastNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnceNaN", function() { return hasOnceNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnlyNaN", function() { return hasOnlyNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPairNaN", function() { return hasPairNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExactNaN", function() { return hasExactNaN; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const hasAnyNaN = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && !array.every((element) => Number.isNaN(element));
}

const hasAtLeastNaN = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.some((element) => Number.isNaN(element));
}

const hasOnceNaN = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (Number.isNaN(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

const hasOnlyNaN = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.every((element) => Number.isNaN(element));
}

const hasPairNaN = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (Number.isNaN(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

const hasExactNaN = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (Number.isNaN(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/has/null.js":
/*!*********************************************!*\
  !*** ./src/1.x.x/scripts/array/has/null.js ***!
  \*********************************************/
/*! exports provided: hasAnyNull, hasAtLeastNull, hasOnceNull, hasOnlyNull, hasPairNull, hasExactNull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAnyNull", function() { return hasAnyNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastNull", function() { return hasAtLeastNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnceNull", function() { return hasOnceNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnlyNull", function() { return hasOnlyNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPairNull", function() { return hasPairNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExactNull", function() { return hasExactNull; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const hasAnyNull = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && !array.every(element => isNull(element));
}

const hasAtLeastNull = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.some(element => isNull(element));
}

const hasOnceNull = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (isNull(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

const hasOnlyNull = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.every((element) => isNull(element));
}

const hasPairNull = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (isNull(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

const hasExactNull = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (isNull(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}

function isNull(element) {
    return element === null
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/has/number.js":
/*!***********************************************!*\
  !*** ./src/1.x.x/scripts/array/has/number.js ***!
  \***********************************************/
/*! exports provided: hasAnyNumber, hasAtLeastNumber, hasOnceNumber, hasOnlyNumber, hasPairNumber, hasExactNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAnyNumber", function() { return hasAnyNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastNumber", function() { return hasAtLeastNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnceNumber", function() { return hasOnceNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnlyNumber", function() { return hasOnlyNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPairNumber", function() { return hasPairNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExactNumber", function() { return hasExactNumber; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const hasAnyNumber = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.every((element) => typeof element !== "number");
}

const hasAtLeastNumber = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.some((element) => typeof element === "number");
}

const hasOnceNumber = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (typeof element === "number") acc += 1;
        return acc;
    }, 0) === 1);
}

const hasOnlyNumber = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.every((element) => typeof element === "number");
}

const hasPairNumber = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (typeof element === "number") acc += 1;
        return acc;
    }, 0) === 2);
}

const hasExactNumber = (array, numberCount) => {
    if (typeof numberCount !== "number") throw new Error("The second parameter should be a number");
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (typeof element === "number") acc += 1;
        return acc;
    }, 0) === numberCount);
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/has/object.js":
/*!***********************************************!*\
  !*** ./src/1.x.x/scripts/array/has/object.js ***!
  \***********************************************/
/*! exports provided: hasAnyObject, hasAtLeastObject, hasOnceObject, hasOnlyObject, hasPairObject, hasExactObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAnyObject", function() { return hasAnyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastObject", function() { return hasAtLeastObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnceObject", function() { return hasOnceObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnlyObject", function() { return hasOnlyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPairObject", function() { return hasPairObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExactObject", function() { return hasExactObject; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


function isObject(element) {
    return typeof element === "object" && !Array.isArray(element)
}

const hasAnyObject = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && !array.every(element => isObject(element))
}

const hasAtLeastObject = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.some(element => isObject(element))
}

const hasOnceObject = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (isObject(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

const hasOnlyObject = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.every((element) => isObject(element));
}

const hasPairObject = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (isObject(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

const hasExactObject = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (isObject(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/has/string.js":
/*!***********************************************!*\
  !*** ./src/1.x.x/scripts/array/has/string.js ***!
  \***********************************************/
/*! exports provided: hasAnyString, hasAtLeastString, hasOnceString, hasOnlyString, hasPairString, hasExactString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAnyString", function() { return hasAnyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastString", function() { return hasAtLeastString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnceString", function() { return hasOnceString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnlyString", function() { return hasOnlyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPairString", function() { return hasPairString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExactString", function() { return hasExactString; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const isString = element => {
    return typeof element === "string"
}

const hasAnyString = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && !array.every((element) => isString(element));
}

const hasAtLeastString = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.some((element) => isString(element));
}

const hasOnceString = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (isString(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

const hasOnlyString = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.every((element) => isString(element));
}

const hasPairString = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (isString(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

const hasExactString = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (isString(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/has/symbol.js":
/*!***********************************************!*\
  !*** ./src/1.x.x/scripts/array/has/symbol.js ***!
  \***********************************************/
/*! exports provided: hasAnySymbol, hasAtLeastSymbol, hasOnceSymbol, hasOnlySymbol, hasPairSymbol, hasExactSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAnySymbol", function() { return hasAnySymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAtLeastSymbol", function() { return hasAtLeastSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnceSymbol", function() { return hasOnceSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOnlySymbol", function() { return hasOnlySymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPairSymbol", function() { return hasPairSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExactSymbol", function() { return hasExactSymbol; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const isSymbol = element => {
    return typeof element === "symbol"
}

const hasAnySymbol = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && !array.every((element) => isSymbol(element));
}

const hasAtLeastSymbol = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.some((element) => isSymbol(element));
}

const hasOnceSymbol = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (acc === 2) return 2;
        if (isSymbol(element)) acc += 1;
        return acc;
    }, 0) === 1);
}

const hasOnlySymbol = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && array.every((element) => isSymbol(element));
}

const hasPairSymbol = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (isSymbol(element)) acc += 1;
        return acc;
    }, 0) === 2);
}

const hasExactSymbol = (array, nullCount) => {
    if (typeof nullCount !== "number") throw new Error("The second parameter should be a number");
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (array.reduce((acc, element) => {
        if (isSymbol(element)) acc += 1;
        return acc;
    }, 0) === nullCount);
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/has/unique.js":
/*!***********************************************!*\
  !*** ./src/1.x.x/scripts/array/has/unique.js ***!
  \***********************************************/
/*! exports provided: uniqueAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueAll", function() { return uniqueAll; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const uniqueAll = array => {
    return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && (new Set(array).size === array.length)
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/index.js":
/*!******************************************!*\
  !*** ./src/1.x.x/scripts/array/index.js ***!
  \******************************************/
/*! exports provided: difference, between, betweenRange, convertRangeToLowerCase, convertRangeToUpperCase, convertToLowerCase, convertToUpperCase, extractArray, extractByOddIndex, extractByPaiIndex, extractNull, extractNumber, extractObject, extractOdd, extractPair, extractString, extractSymbol, howManyArray, howManyBoolean, howManyInfinity, howManyNull, howManyNumber, howManyObject, howManyOdd, howManyPair, howManyString, howManySymbol, omit, omitArray, omitMany, orderDesc, orderRangeDesc, replace, replaceMany, same, switchByIndex, switchByValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _difference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./difference */ "./src/1.x.x/scripts/array/difference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _difference__WEBPACK_IMPORTED_MODULE_0__["difference"]; });

/* harmony import */ var _between__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./between */ "./src/1.x.x/scripts/array/between.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _between__WEBPACK_IMPORTED_MODULE_1__["between"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "betweenRange", function() { return _between__WEBPACK_IMPORTED_MODULE_1__["betweenRange"]; });

/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convert */ "./src/1.x.x/scripts/array/convert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertRangeToLowerCase", function() { return _convert__WEBPACK_IMPORTED_MODULE_2__["convertRangeToLowerCase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertRangeToUpperCase", function() { return _convert__WEBPACK_IMPORTED_MODULE_2__["convertRangeToUpperCase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertToLowerCase", function() { return _convert__WEBPACK_IMPORTED_MODULE_2__["convertToLowerCase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertToUpperCase", function() { return _convert__WEBPACK_IMPORTED_MODULE_2__["convertToUpperCase"]; });

/* harmony import */ var _extract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extract */ "./src/1.x.x/scripts/array/extract.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractArray", function() { return _extract__WEBPACK_IMPORTED_MODULE_3__["extractArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractByOddIndex", function() { return _extract__WEBPACK_IMPORTED_MODULE_3__["extractByOddIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractByPaiIndex", function() { return _extract__WEBPACK_IMPORTED_MODULE_3__["extractByPaiIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractNull", function() { return _extract__WEBPACK_IMPORTED_MODULE_3__["extractNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractNumber", function() { return _extract__WEBPACK_IMPORTED_MODULE_3__["extractNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractObject", function() { return _extract__WEBPACK_IMPORTED_MODULE_3__["extractObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractOdd", function() { return _extract__WEBPACK_IMPORTED_MODULE_3__["extractOdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractPair", function() { return _extract__WEBPACK_IMPORTED_MODULE_3__["extractPair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractString", function() { return _extract__WEBPACK_IMPORTED_MODULE_3__["extractString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractSymbol", function() { return _extract__WEBPACK_IMPORTED_MODULE_3__["extractSymbol"]; });

/* harmony import */ var _occurrence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./occurrence */ "./src/1.x.x/scripts/array/occurrence.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyArray", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_4__["howManyArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyBoolean", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_4__["howManyBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyInfinity", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_4__["howManyInfinity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyNull", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_4__["howManyNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyNumber", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_4__["howManyNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyObject", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_4__["howManyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyOdd", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_4__["howManyOdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyPair", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_4__["howManyPair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyString", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_4__["howManyString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManySymbol", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_4__["howManySymbol"]; });

/* harmony import */ var _omit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./omit */ "./src/1.x.x/scripts/array/omit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _omit__WEBPACK_IMPORTED_MODULE_5__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omitArray", function() { return _omit__WEBPACK_IMPORTED_MODULE_5__["omitArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omitMany", function() { return _omit__WEBPACK_IMPORTED_MODULE_5__["omitMany"]; });

/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order */ "./src/1.x.x/scripts/array/order.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderDesc", function() { return _order__WEBPACK_IMPORTED_MODULE_6__["orderDesc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderRangeDesc", function() { return _order__WEBPACK_IMPORTED_MODULE_6__["orderRangeDesc"]; });

/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./replace */ "./src/1.x.x/scripts/array/replace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _replace__WEBPACK_IMPORTED_MODULE_7__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceMany", function() { return _replace__WEBPACK_IMPORTED_MODULE_7__["replaceMany"]; });

/* harmony import */ var _same__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./same */ "./src/1.x.x/scripts/array/same.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "same", function() { return _same__WEBPACK_IMPORTED_MODULE_8__["same"]; });

/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./switch */ "./src/1.x.x/scripts/array/switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchByIndex", function() { return _switch__WEBPACK_IMPORTED_MODULE_9__["switchByIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchByValue", function() { return _switch__WEBPACK_IMPORTED_MODULE_9__["switchByValue"]; });



















/***/ }),

/***/ "./src/1.x.x/scripts/array/math/abs.js":
/*!*********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/abs.js ***!
  \*********************************************/
/*! exports provided: absRange, abs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absRange", function() { return absRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const absRange = (array, from, to) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && Math.abs(element)) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

const abs = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(element => (typeof element === "number" && Math.abs(element)) || element)
    }
}


/***/ }),

/***/ "./src/1.x.x/scripts/array/math/acc.js":
/*!*********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/acc.js ***!
  \*********************************************/
/*! exports provided: accBoolean, accAll, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accBoolean", function() { return accBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accAll", function() { return accAll; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");



const accBoolean = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isBooleanArray"])(array) ? array.reduce((previous, next) => previous && next) : array
    }
}

const accAll = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.reduce((previous, next) => previous + next)
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Accumulator);

/***/ }),

/***/ "./src/1.x.x/scripts/array/math/average.js":
/*!*************************************************!*\
  !*** ./src/1.x.x/scripts/array/math/average.js ***!
  \*************************************************/
/*! exports provided: average */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "average", function() { return average; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const average = array => {
	if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
		return (array.reduce((acc, curr) => {
			if ((typeof curr === 'string' && curr != parseFloat(curr)) || curr === undefined) {
				throw 'The elements of an array should have a Number type';
			}
			return (acc += +(+curr));
		}, 0) / array.length
		);
	}
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/math/cos.js":
/*!*********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/cos.js ***!
  \*********************************************/
/*! exports provided: cosRange, cos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cosRange", function() { return cosRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const cosRange = (array, from, to) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = Math.cos(element))) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

const cos = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(element => (typeof element === "number" && (element = Math.cos(element))) || element)
    }
}


/***/ }),

/***/ "./src/1.x.x/scripts/array/math/devide.js":
/*!************************************************!*\
  !*** ./src/1.x.x/scripts/array/math/devide.js ***!
  \************************************************/
/*! exports provided: devideRange, devideSelf, devide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devideRange", function() { return devideRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devideSelf", function() { return devideSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devide", function() { return devide; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const devideRange = (array, from, to, devider) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = element / devider)) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

const devideSelf = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.reduce((previous, next) => previous / next)
    }
}

const devide = (array, devider) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(element => (typeof element === "number" && (element = element / devider)) || element)
    }
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/math/index.js":
/*!***********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/index.js ***!
  \***********************************************/
/*! exports provided: abs, absRange, accAll, accBoolean, average, cos, cosRange, devide, devideRange, devideSelf, max, maxRange, min, minRange, multiply, multiplyRange, multiplySelf, pow, powRange, round, roundRange, sign, signRange, sin, sinRange, sqrt, sqrtRange, tan, tanRange, zero, zeroRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abs.js */ "./src/1.x.x/scripts/array/math/abs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return _abs_js__WEBPACK_IMPORTED_MODULE_0__["abs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "absRange", function() { return _abs_js__WEBPACK_IMPORTED_MODULE_0__["absRange"]; });

/* harmony import */ var _acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acc.js */ "./src/1.x.x/scripts/array/math/acc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accAll", function() { return _acc_js__WEBPACK_IMPORTED_MODULE_1__["accAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accBoolean", function() { return _acc_js__WEBPACK_IMPORTED_MODULE_1__["accBoolean"]; });

/* harmony import */ var _average_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./average.js */ "./src/1.x.x/scripts/array/math/average.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "average", function() { return _average_js__WEBPACK_IMPORTED_MODULE_2__["average"]; });

/* harmony import */ var _cos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cos.js */ "./src/1.x.x/scripts/array/math/cos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return _cos_js__WEBPACK_IMPORTED_MODULE_3__["cos"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cosRange", function() { return _cos_js__WEBPACK_IMPORTED_MODULE_3__["cosRange"]; });

/* harmony import */ var _devide_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devide.js */ "./src/1.x.x/scripts/array/math/devide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "devide", function() { return _devide_js__WEBPACK_IMPORTED_MODULE_4__["devide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "devideRange", function() { return _devide_js__WEBPACK_IMPORTED_MODULE_4__["devideRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "devideSelf", function() { return _devide_js__WEBPACK_IMPORTED_MODULE_4__["devideSelf"]; });

/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./max.js */ "./src/1.x.x/scripts/array/math/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_js__WEBPACK_IMPORTED_MODULE_5__["max"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxRange", function() { return _max_js__WEBPACK_IMPORTED_MODULE_5__["maxRange"]; });

/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./min.js */ "./src/1.x.x/scripts/array/math/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_js__WEBPACK_IMPORTED_MODULE_6__["min"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minRange", function() { return _min_js__WEBPACK_IMPORTED_MODULE_6__["minRange"]; });

/* harmony import */ var _multiply_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multiply.js */ "./src/1.x.x/scripts/array/math/multiply.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return _multiply_js__WEBPACK_IMPORTED_MODULE_7__["multiply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiplyRange", function() { return _multiply_js__WEBPACK_IMPORTED_MODULE_7__["multiplyRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiplySelf", function() { return _multiply_js__WEBPACK_IMPORTED_MODULE_7__["multiplySelf"]; });

/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pow.js */ "./src/1.x.x/scripts/array/math/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return _pow_js__WEBPACK_IMPORTED_MODULE_8__["pow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "powRange", function() { return _pow_js__WEBPACK_IMPORTED_MODULE_8__["powRange"]; });

/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./round.js */ "./src/1.x.x/scripts/array/math/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "round", function() { return _round_js__WEBPACK_IMPORTED_MODULE_9__["round"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roundRange", function() { return _round_js__WEBPACK_IMPORTED_MODULE_9__["roundRange"]; });

/* harmony import */ var _sign_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign.js */ "./src/1.x.x/scripts/array/math/sign.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return _sign_js__WEBPACK_IMPORTED_MODULE_10__["sign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signRange", function() { return _sign_js__WEBPACK_IMPORTED_MODULE_10__["signRange"]; });

/* harmony import */ var _sin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sin.js */ "./src/1.x.x/scripts/array/math/sin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_11__["sin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sinRange", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_11__["sinRange"]; });

/* harmony import */ var _sqrt_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sqrt.js */ "./src/1.x.x/scripts/array/math/sqrt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return _sqrt_js__WEBPACK_IMPORTED_MODULE_12__["sqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sqrtRange", function() { return _sqrt_js__WEBPACK_IMPORTED_MODULE_12__["sqrtRange"]; });

/* harmony import */ var _tan_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tan.js */ "./src/1.x.x/scripts/array/math/tan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return _tan_js__WEBPACK_IMPORTED_MODULE_13__["tan"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tanRange", function() { return _tan_js__WEBPACK_IMPORTED_MODULE_13__["tanRange"]; });

/* harmony import */ var _zero_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./zero.js */ "./src/1.x.x/scripts/array/math/zero.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return _zero_js__WEBPACK_IMPORTED_MODULE_14__["zero"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zeroRange", function() { return _zero_js__WEBPACK_IMPORTED_MODULE_14__["zeroRange"]; });



















/***/ }),

/***/ "./src/1.x.x/scripts/array/math/max.js":
/*!*********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/max.js ***!
  \*********************************************/
/*! exports provided: max, maxRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxRange", function() { return maxRange; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const max = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isNumberArray"])(array) ? Math.max(...array) : array
    }
}

const maxRange = (array, from, to) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isNumberArray"])(array) ? Math.max(...array.slice(from, to + 1)) : array
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}


/***/ }),

/***/ "./src/1.x.x/scripts/array/math/min.js":
/*!*********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/min.js ***!
  \*********************************************/
/*! exports provided: min, minRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minRange", function() { return minRange; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const min = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isNumberArray"])(array) ? Math.min(...array) : array
    }
}

const minRange = (array, from, to) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isNumberArray"])(array) ? Math.min(...array.slice(from, to + 1)) : array
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}


/***/ }),

/***/ "./src/1.x.x/scripts/array/math/multiply.js":
/*!**************************************************!*\
  !*** ./src/1.x.x/scripts/array/math/multiply.js ***!
  \**************************************************/
/*! exports provided: multiplyRange, multiplySelf, multiply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyRange", function() { return multiplyRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplySelf", function() { return multiplySelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const multiplyRange = (array, from, to, multiplier) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = element * multiplier)) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}
const multiplySelf = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isNumberArray"])(array) ? array.reduce((previous, next) => previous * next) : array
    }
}

const multiply = (array, multiplier) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(element => (typeof element === "number" && (element = element * multiplier)) || element)
    }
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/math/pow.js":
/*!*********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/pow.js ***!
  \*********************************************/
/*! exports provided: powRange, pow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powRange", function() { return powRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const powRange = (array, from, to, power) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = Math.pow(element, power))) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

const pow = (array, power) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(element => (typeof element === "number" && (element = Math.pow(element, power))) || element)
    }
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/math/round.js":
/*!***********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/round.js ***!
  \***********************************************/
/*! exports provided: roundRange, round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundRange", function() { return roundRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const roundRange = (array, from, to) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = Math.round(element)) || element))
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

const round = (array) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(element => (typeof element === "number" && (element = Math.round(element))) || element)
    }
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/math/sign.js":
/*!**********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/sign.js ***!
  \**********************************************/
/*! exports provided: signRange, sign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signRange", function() { return signRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const signRange = (array, from, to) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element > 0 && (element = "+") || element < 0 && (element = "-"))) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

const sign = (array) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(element => (typeof element === "number" && (element > 0 && (element = "+") || element < 0 && (element = "-"))) || element)
    }
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/math/sin.js":
/*!*********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/sin.js ***!
  \*********************************************/
/*! exports provided: sinRange, sin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinRange", function() { return sinRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const sinRange = (array, from, to) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = Math.sin(element))) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

const sin = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(element => (typeof element === "number" && (element = Math.sin(element))) || element)
    }
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/math/sqrt.js":
/*!**********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/sqrt.js ***!
  \**********************************************/
/*! exports provided: sqrtRange, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrtRange", function() { return sqrtRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const sqrtRange = (array, from, to) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = Math.sqrt(element))) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

const sqrt = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(element => (typeof element === "number" && (element = Math.sqrt(element))) || element)
    }
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/math/tan.js":
/*!*********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/tan.js ***!
  \*********************************************/
/*! exports provided: tanRange, tan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tanRange", function() { return tanRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const tanRange = (array, from, to) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = Math.tan(element))) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

const tan = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(element => (typeof element === "number" && (element = Math.tan(element))) || element)
    }
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/math/zero.js":
/*!**********************************************!*\
  !*** ./src/1.x.x/scripts/array/math/zero.js ***!
  \**********************************************/
/*! exports provided: zeroRange, zero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroRange", function() { return zeroRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/is */ "./src/1.x.x/helpers/is.js");


const zeroRange = (array, from, to) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            return array.map(element => ((array.indexOf(element) >= from && array.indexOf(element) < to + 1) && typeof element === "number" && (element = 0)) || element)
        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

const zero = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(element => (typeof element === "number" && (element = 0)) || element)
    }
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/occurrence.js":
/*!***********************************************!*\
  !*** ./src/1.x.x/scripts/array/occurrence.js ***!
  \***********************************************/
/*! exports provided: howManyNull, howManyInfinity, howManyBoolean, howManyNumber, howManySymbol, howManyString, howManyObject, howManyArray, howManyOdd, howManyPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howManyNull", function() { return howManyNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howManyInfinity", function() { return howManyInfinity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howManyBoolean", function() { return howManyBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howManyNumber", function() { return howManyNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howManySymbol", function() { return howManySymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howManyString", function() { return howManyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howManyObject", function() { return howManyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howManyArray", function() { return howManyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howManyOdd", function() { return howManyOdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "howManyPair", function() { return howManyPair; });
const howManyNull = array => {
    return array.filter(element => element === null).length
}
const howManyInfinity = array => {
    return array.filter(element => element === Infinity).length
}
const howManyBoolean = array => {
    return array.filter(element => typeof element === "boolean").length
}
const howManyNumber = array => {
    return array.filter(element => typeof element === "number").length
}
const howManySymbol = array => {
    return array.filter(element => typeof element === "symbol").length
}
const howManyString = array => {
    return array.filter(element => typeof element === "string").length
}
const howManyObject = array => {
    return array.filter(element => typeof element === "object" && element !== null && element !== undefined).length
}
const howManyArray = array => {
    return array.filter(element => Array.isArray(element)).length
}
const howManyOdd = array => {
    return array.filter(element => typeof element === "number" && element % 2 === 1).length
}
const howManyPair = array => {
    return array.filter(element => typeof element === "number" && element % 2 === 0).length
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/omit.js":
/*!*****************************************!*\
  !*** ./src/1.x.x/scripts/array/omit.js ***!
  \*****************************************/
/*! exports provided: omit, omitArray, omitMany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omitArray", function() { return omitArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omitMany", function() { return omitMany; });
/* harmony import */ var _helpers_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/has */ "./src/1.x.x/helpers/has.js");
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");



const omit = (array, element) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_1__["isArray"])(array)) {
        if (!Object(_helpers_has__WEBPACK_IMPORTED_MODULE_0__["hasElement"])(array, element)) {
            throw new Error(element + " does not exist")
        }
        return Object(_helpers_is__WEBPACK_IMPORTED_MODULE_1__["isObjectArray"])(array) ? filterByObject(array, element) : filterByValue(array, element)
    }
}

const omitArray = (array, omittedArray) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_1__["isArray"])(array) && Object(_helpers_is__WEBPACK_IMPORTED_MODULE_1__["isArray"])(omittedArray)) {
        for (let element of omittedArray) {
            if (!Object(_helpers_has__WEBPACK_IMPORTED_MODULE_0__["hasElement"])(array, element)) {
                throw new Error(element + " does not exist")
            }
            Object(_helpers_is__WEBPACK_IMPORTED_MODULE_1__["isObjectArray"])(array) ? array = filterByObject(array, element) : array = filterByValue(array, element)
        }
        return array
    }
}

const omitMany = (array, ...elements) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_1__["isArray"])(array)) {
        for (let element of elements) {
            if (!Object(_helpers_has__WEBPACK_IMPORTED_MODULE_0__["hasElement"])(array, element)) {
                throw new Error(element + " does not exist")
            }
            Object(_helpers_is__WEBPACK_IMPORTED_MODULE_1__["isObjectArray"])(array) ? array = filterByObject(array, element) : array = filterByValue(array, element)
        }
        return array;
    }
}

const filterByValue = (array, value) => {
    return array.filter(element => {
        if (typeof element === "string") {
            return element.toLowerCase().trim() !== value.toLowerCase().trim()
        }
        return element !== value
    })
}

const filterByObject = (array, key) => {
    return array.filter(element => {
        const value = Object.keys(element)[0];
        if (typeof value === "string") {
            return value.toLowerCase().trim() !== key.toLowerCase().trim()
        }
        return value !== key
    })
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/order.js":
/*!******************************************!*\
  !*** ./src/1.x.x/scripts/array/order.js ***!
  \******************************************/
/*! exports provided: orderRangeDesc, orderDesc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderRangeDesc", function() { return orderRangeDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderDesc", function() { return orderDesc; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");



const orderRangeDesc = (array, from, to) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (to < array.length) {
            if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isPrimitiveArray"])(array)) {
                const sortedArray = array.slice(from, to + 1).sort((a, b) => -1)
                let pointer = 0;
                for (let index = from; index < to + 1; index++) {
                    array[index] = sortedArray[pointer]
                    pointer = pointer + 1;
                }
                return array
            }

        } else {
            throw new Error("The last index of the array is less then 'to' parameter")
        }
    }
}

const orderDesc = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isPrimitiveArray"])(array)) {
            return array.sort((a, b) => -1)
        }
    } else {
        throw new Error("The last index of the array is less then 'to' parameter")
    }
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/replace.js":
/*!********************************************!*\
  !*** ./src/1.x.x/scripts/array/replace.js ***!
  \********************************************/
/*! exports provided: replace, replaceMany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceMany", function() { return replaceMany; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");


const replace = (array, element, replacer) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(value => (value === element && (value = replacer)) || value)
    }
}
const replaceMany = (array, elements, replacers) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elements) && Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(replacers)) {
        for (let element of elements) {
            array = array.map((value) => (value === element && (value = replacers[elements.indexOf(element)])) || value)
        }
        return array
    }
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/same.js":
/*!*****************************************!*\
  !*** ./src/1.x.x/scripts/array/same.js ***!
  \*****************************************/
/*! exports provided: same */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "same", function() { return same; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");


const same = (...arrays) => {
    if (arrays.length === 1) return arrays[0]
    const args = Array.from([...arrays])
    let initArray = args[0];
    let sameElements = new Set();
    args.forEach(array => Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array) && args.indexOf(array) !== 0 &&
        array.forEach(value => initArray.includes(value) && sameElements.add(value)))
    return Array.from(sameElements)
}

/***/ }),

/***/ "./src/1.x.x/scripts/array/switch.js":
/*!*******************************************!*\
  !*** ./src/1.x.x/scripts/array/switch.js ***!
  \*******************************************/
/*! exports provided: switchByIndex, switchByValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchByIndex", function() { return switchByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchByValue", function() { return switchByValue; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");


const switchByIndex = (array, switchedIndex, switcherIndex) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        if (!(switchedIndex < array.length && switcherIndex < array.length)) {
            throw new Error("One or both of the indexes are big then the length of the array")
        }
        let switcher = array[switchedIndex];
        array[switchedIndex] = array[switcherIndex];
        array[switcherIndex] = switcher;
        return array;
    }
}
const switchByValue = (array, switchedValue, switcherValue) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        const index = array.indexOf(switchedValue);
        const switcherIndex = array.indexOf(switcherValue);
        if (index === -1 || switcherIndex === -1) {
            throw new Error("One or both of the values do not exist in the array")
        }
        return switchByIndex(array, index, switcherIndex)
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEueC54L2hlbHBlcnMvaGFzLmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9oZWxwZXJzL2lzLmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9iZXR3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2NvbnZlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvZGlmZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9leHRyYWN0LmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2hhcy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9oYXMvYm9vbGVhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9oYXMvZXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvaGFzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2hhcy9pbmZpbml0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9oYXMvbmFuLmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2hhcy9udWxsLmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2hhcy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvaGFzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9oYXMvc3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2hhcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvaGFzL3VuaXF1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL2Ficy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL2FjYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL2F2ZXJhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvbWF0aC9jb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvbWF0aC9kZXZpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvbWF0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL21heC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL21pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL211bHRpcGx5LmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L21hdGgvcG93LmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L21hdGgvcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvbWF0aC9zaWduLmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L21hdGgvc2luLmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L21hdGgvc3FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL3Rhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL3plcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvb2NjdXJyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9vbWl0LmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L29yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L3JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvc2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9zd2l0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtB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b250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjLzEueC54L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgaXNPYmplY3RBcnJheSwgaXNTdHJpbmdBcnJheSB9IGZyb20gXCIuLi8uLi8xLngueC9oZWxwZXJzL2lzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNFbGVtZW50ID0gKGFycmF5LCBlbGVtZW50KSA9PiB7XHJcbiAgICByZXR1cm4gaXNPYmplY3RBcnJheShhcnJheSkgPyBoYXNPYmplY3QoYXJyYXksIGVsZW1lbnQpIDogaGFzVmFsdWUoYXJyYXksIGVsZW1lbnQpXHJcbn1cclxuXHJcbmNvbnN0IGhhc1ZhbHVlID0gKGFycmF5LCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKGlzU3RyaW5nQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LnNvbWUoZWxlbWVudCA9PiBlbGVtZW50LnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXkuc29tZShlbGVtZW50ID0+IGVsZW1lbnQgPT09IHZhbHVlKVxyXG59XHJcblxyXG5jb25zdCBoYXNPYmplY3QgPSAoYXJyYXksIGtleSkgPT4ge1xyXG4gICAgaWYgKGlzU3RyaW5nQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LnNvbWUoZWxlbWVudCA9PiBPYmplY3Qua2V5cyhlbGVtZW50KVswXS50b0xvd2VyQ2FzZSgpID09PSBrZXkudG9Mb3dlckNhc2UoKSlcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheS5zb21lKGVsZW1lbnQgPT4gT2JqZWN0LmtleXMoZWxlbWVudClbMF0gPT09IGtleSlcclxufSIsImV4cG9ydCBjb25zdCBpc0FycmF5ID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGFycmF5ID09PSBudWxsIHx8IGFycmF5ID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBwYXJhbWV0ZXIgaXMgbnVsbCBvciB1bmRlZmluZWRcIik7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGFyYW1ldGVyIHNob3VsZCBiZSBhbiBhcnJheVwiKTtcclxuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIlRoZSBhcnJheSBpcyBlbXB0eVwiKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpc051bWJlckFycmF5ID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmV2ZXJ5KGVsZW1lbnQgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpc1N0cmluZ0FycmF5ID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmV2ZXJ5KGVsZW1lbnQgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW5BcnJheSA9IGFycmF5ID0+IHtcclxuICAgIHJldHVybiBhcnJheS5ldmVyeShlbGVtZW50ID0+IHR5cGVvZiBlbGVtZW50ID09PSBcImJvb2xlYW5cIilcclxufVxyXG5leHBvcnQgY29uc3QgaXNPYmplY3RBcnJheSA9IGFycmF5ID0+IHtcclxuICAgIHJldHVybiBhcnJheS5ldmVyeShlbGVtZW50ID0+IHR5cGVvZiBlbGVtZW50ID09PSBcIm9iamVjdFwiKVxyXG59XHJcbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZUFycmF5ID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGFycmF5LmV2ZXJ5KGVsZW1lbnQgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwib2JqZWN0XCIpIHx8XHJcbiAgICAgICAgYXJyYXkuZXZlcnkoZWxlbWVudCA9PiB0eXBlb2YgZWxlbWVudCA9PT0gXCJib29sZWFuXCIpIHx8XHJcbiAgICAgICAgYXJyYXkuZXZlcnkoZWxlbWVudCA9PiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIikgfHxcclxuICAgICAgICBhcnJheS5ldmVyeShlbGVtZW50ID0+IHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSlcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGVsZW1lbnRzIGhhdmUgZGlmZmVyZW50IHR5cGVzXCIpXHJcbn0iLCJpbXBvcnQgKiBhcyBIYXMgZnJvbSBcIi4vc2NyaXB0cy9hcnJheS9oYXNcIlxyXG5pbXBvcnQgKiBhcyAgTWF0aCBmcm9tIFwiLi9zY3JpcHRzL2FycmF5L21hdGhcIlxyXG5pbXBvcnQgKiBhcyAgQXJyb3cgZnJvbSBcIi4vc2NyaXB0cy9hcnJheVwiXHJcbmV4cG9ydCB7IEhhcywgTWF0aCwgQXJyb3cgfSIsImltcG9ydCB7IGlzQXJyYXksIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBiZXR3ZWVuUmFuZ2UgPSAoYXJyYXksIGZyb20sIHRvLCBzdGFydCwgZW5kKSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICBpZiAodG8gPCBhcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBhcnJheS5zbGljZShmcm9tLCB0byArIDEpXHJcbiAgICAgICAgICAgIHJldHVybiBiZXR3ZWVuKHJhbmdlLCBzdGFydCwgZW5kKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcnJheSBpcyBsZXNzIHRoZW4gJ3RvJyBwYXJhbWV0ZXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXkuZXZlcnkoZWxlbWVudCA9PiBlbGVtZW50ID4gc3RhcnQgLSAxICYmIGVsZW1lbnQgPCBlbmQgKyAxKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYmV0d2VlbiA9IChhcnJheSwgc3RhcnQsIGVuZCkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKVxyXG4gICAgICAgIHJldHVybiBhcnJheS5ldmVyeShlbGVtZW50ID0+IGVsZW1lbnQgPiBzdGFydCAtIDEgJiYgZWxlbWVudCA8IGVuZCArIDEpXHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5LCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2lzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvTG93ZXJDYXNlKGFycmF5KSB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UmFuZ2VUb0xvd2VyQ2FzZShhcnJheSwgZnJvbSwgdG8pIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9VcHBlckNhc2UoYXJyYXkpIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UmFuZ2VUb1VwcGVyQ2FzZShhcnJheSwgZnJvbSwgdG8pIHtcclxuXHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkaWZmZXJlbmNlID0gKC4uLmFycmF5cykgPT4ge1xyXG4gICAgaWYgKGFycmF5cy5sZW5ndGggPT09IDEpIHJldHVybiBhcnJheXNbMF1cclxuICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKFsuLi5hcnJheXNdKVxyXG4gICAgbGV0IGluaXRBcnJheSA9IGFyZ3NbMF07XHJcbiAgICBsZXQgZGlmZmVyZW50RWxlbWVudHMgPSBuZXcgU2V0KCk7XHJcbiAgICBhcmdzLmZvckVhY2goYXJyYXkgPT4gYXJncy5pbmRleE9mKGFycmF5KSAhPT0gMCAmJiBpc0FycmF5KGFycmF5KSAmJlxyXG4gICAgICAgIGFycmF5LmZvckVhY2godmFsdWUgPT4gIWluaXRBcnJheS5pbmNsdWRlcyh2YWx1ZSkgJiYgZGlmZmVyZW50RWxlbWVudHMuYWRkKHZhbHVlKSkpXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShkaWZmZXJlbnRFbGVtZW50cylcclxufSIsImV4cG9ydCBmdW5jdGlvbiBleHRyYWN0TnVsbChhcnJheSkge31cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0U3ltYm9sKGFycmF5KSB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RTdHJpbmcoYXJyYXkpIHt9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdE51bWJlcihhcnJheSkge31cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0T2JqZWN0KGFycmF5KSB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RBcnJheShhcnJheSkge31cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0T2RkKGFycmF5KSB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RQYWlyKGFycmF5KSB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RCeU9kZEluZGV4KGFycmF5KSB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RCeVBhaUluZGV4KGFycmF5KSB7fSIsImltcG9ydCB7IGlzQXJyYXksIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcblxuZXhwb3J0IGNvbnN0IGhhc0FueUFycmF5ID0gKGFycmF5KSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmICFhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gQXJyYXkuaXNBcnJheShlbGVtZW50KSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNBdExlYXN0QXJyYXkgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LnNvbWUoKGVsZW1lbnQpID0+IEFycmF5LmlzQXJyYXkoZWxlbWVudCkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzT25jZUFycmF5ID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGFjYyA9PT0gMikgcmV0dXJuIGFjYztcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSAxKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc09ubHlBcnJheSA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IEFycmF5LmlzQXJyYXkoZWxlbWVudCkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzUGFpckFycmF5ID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbWVudCkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSAyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0V4YWN0QXJyYXkgPSAoYXJyYXksIG51bGxDb3VudCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbnVsbENvdW50ICE9PSBcIm51bWJlclwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBudW1iZXJcIik7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IG51bGxDb3VudCk7XG59IiwiaW1wb3J0IHsgaXNBcnJheSwgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhc0FueUJvb2xlYW4gPSAoYXJyYXkpID0+IHtcclxuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoIWFycmF5LmluY2x1ZGVzKHRydWUpICYmICFhcnJheS5pbmNsdWRlcyhmYWxzZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFzQXRMZWFzdEJvb2xlYW4gPSAoYXJyYXkpID0+IHtcclxuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkuaW5jbHVkZXModHJ1ZSkgfHwgYXJyYXkuaW5jbHVkZXMoZmFsc2UpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhc09uY2VCb29sZWFuID0gKGFycmF5KSA9PiB7XHJcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKGFycmF5LnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGFjYyA9PT0gMikgcmV0dXJuIDI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcImJvb2xlYW5cIikgYWNjICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIDApID09PSAxKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhc09ubHlCb29sZWFuID0gKGFycmF5KSA9PiB7XHJcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IHR5cGVvZiBlbGVtZW50ID09PSBcImJvb2xlYW5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYXNQYWlyQm9vbGVhbiA9IChhcnJheSkgPT4ge1xyXG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJib29sZWFuXCIpIGFjYyArPSAxO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCAwKSA9PT0gMik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYXNFeGFjdEJvb2xlYW4gPSAoYXJyYXksIG51bGxDb3VudCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBudWxsQ291bnQgIT09IFwibnVtYmVyXCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzZWNvbmQgcGFyYW1ldGVyIHNob3VsZCBiZSBhIG51bWJlclwiKTtcclxuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwiYm9vbGVhblwiKSBhY2MgKz0gMTtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgMCkgPT09IG51bGxDb3VudCk7XHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlcXVhbEFsbCA9IGFycmF5ID0+IHtcclxuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBuZXcgU2V0KGFycmF5KS5zaXplID09PSAxO1xyXG59IiwiaW1wb3J0IHsgZXF1YWxBbGwgfSBmcm9tIFwiLi9lcXVhbFwiXHJcbmltcG9ydCB7IHVuaXF1ZUFsbCB9IGZyb20gXCIuL3VuaXF1ZVwiXHJcblxyXG5pbXBvcnQge1xyXG4gICAgaGFzQW55QXJyYXksXHJcbiAgICBoYXNBdExlYXN0QXJyYXksXHJcbiAgICBoYXNFeGFjdEFycmF5LFxyXG4gICAgaGFzT25jZUFycmF5LFxyXG4gICAgaGFzT25seUFycmF5LFxyXG4gICAgaGFzUGFpckFycmF5XHJcbn0gZnJvbSBcIi4vYXJyYXlcIlxyXG5cclxuaW1wb3J0IHtcclxuICAgIGhhc0FueUJvb2xlYW4sXHJcbiAgICBoYXNBdExlYXN0Qm9vbGVhbixcclxuICAgIGhhc0V4YWN0Qm9vbGVhbixcclxuICAgIGhhc09uY2VCb29sZWFuLFxyXG4gICAgaGFzT25seUJvb2xlYW4sXHJcbiAgICBoYXNQYWlyQm9vbGVhblxyXG59IGZyb20gXCIuL2Jvb2xlYW5cIlxyXG5cclxuaW1wb3J0IHtcclxuICAgIGhhc0FueUluZmluaXR5LFxyXG4gICAgaGFzQXRMZWFzdEluZmluaXR5LFxyXG4gICAgaGFzRXhhY3RJbmZpbml0eSxcclxuICAgIGhhc09uY2VJbmZpbml0eSxcclxuICAgIGhhc09ubHlJbmZpbml0eSxcclxuICAgIGhhc1BhaXJJbmZpbml0eVxyXG59IGZyb20gXCIuL2luZmluaXR5XCJcclxuXHJcbmltcG9ydCB7XHJcbiAgICBoYXNBbnlOYU4sXHJcbiAgICBoYXNBdExlYXN0TmFOLFxyXG4gICAgaGFzRXhhY3ROYU4sXHJcbiAgICBoYXNPbmNlTmFOLFxyXG4gICAgaGFzT25seU5hTixcclxuICAgIGhhc1BhaXJOYU5cclxufSBmcm9tIFwiLi9uYW5cIlxyXG5cclxuaW1wb3J0IHtcclxuICAgIGhhc0FueU51bGwsXHJcbiAgICBoYXNBdExlYXN0TnVsbCxcclxuICAgIGhhc0V4YWN0TnVsbCxcclxuICAgIGhhc09uY2VOdWxsLFxyXG4gICAgaGFzT25seU51bGwsXHJcbiAgICBoYXNQYWlyTnVsbFxyXG59IGZyb20gXCIuL251bGxcIlxyXG5cclxuaW1wb3J0IHtcclxuICAgIGhhc0FueU51bWJlcixcclxuICAgIGhhc0F0TGVhc3ROdW1iZXIsXHJcbiAgICBoYXNFeGFjdE51bWJlcixcclxuICAgIGhhc09uY2VOdW1iZXIsXHJcbiAgICBoYXNPbmx5TnVtYmVyLFxyXG4gICAgaGFzUGFpck51bWJlclxyXG59IGZyb20gXCIuL251bWJlclwiXHJcblxyXG5pbXBvcnQge1xyXG4gICAgaGFzQW55T2JqZWN0LFxyXG4gICAgaGFzQXRMZWFzdE9iamVjdCxcclxuICAgIGhhc0V4YWN0T2JqZWN0LFxyXG4gICAgaGFzT25jZU9iamVjdCxcclxuICAgIGhhc09ubHlPYmplY3QsXHJcbiAgICBoYXNQYWlyT2JqZWN0XHJcbn0gZnJvbSBcIi4vb2JqZWN0XCJcclxuXHJcbmltcG9ydCB7XHJcbiAgICBoYXNBbnlTdHJpbmcsXHJcbiAgICBoYXNBdExlYXN0U3RyaW5nLFxyXG4gICAgaGFzRXhhY3RTdHJpbmcsXHJcbiAgICBoYXNPbmNlU3RyaW5nLFxyXG4gICAgaGFzT25seVN0cmluZyxcclxuICAgIGhhc1BhaXJTdHJpbmdcclxufSBmcm9tIFwiLi9zdHJpbmdcIlxyXG5cclxuaW1wb3J0IHtcclxuICAgIGhhc0FueVN5bWJvbCxcclxuICAgIGhhc0F0TGVhc3RTeW1ib2wsXHJcbiAgICBoYXNFeGFjdFN5bWJvbCxcclxuICAgIGhhc09uY2VTeW1ib2wsXHJcbiAgICBoYXNPbmx5U3ltYm9sLFxyXG4gICAgaGFzUGFpclN5bWJvbFxyXG59IGZyb20gXCIuL3N5bWJvbFwiXHJcblxyXG5leHBvcnQge1xyXG4gICAgZXF1YWxBbGwsXHJcbiAgICB1bmlxdWVBbGwsXHJcbiAgICBoYXNBbnlBcnJheSxcclxuICAgIGhhc0F0TGVhc3RBcnJheSxcclxuICAgIGhhc0V4YWN0QXJyYXksXHJcbiAgICBoYXNPbmNlQXJyYXksXHJcbiAgICBoYXNPbmx5QXJyYXksXHJcbiAgICBoYXNQYWlyQXJyYXksXHJcbiAgICBoYXNBbnlCb29sZWFuLFxyXG4gICAgaGFzQXRMZWFzdEJvb2xlYW4sXHJcbiAgICBoYXNFeGFjdEJvb2xlYW4sXHJcbiAgICBoYXNPbmNlQm9vbGVhbixcclxuICAgIGhhc09ubHlCb29sZWFuLFxyXG4gICAgaGFzUGFpckJvb2xlYW4sXHJcbiAgICBoYXNBbnlJbmZpbml0eSxcclxuICAgIGhhc0F0TGVhc3RJbmZpbml0eSxcclxuICAgIGhhc0V4YWN0SW5maW5pdHksXHJcbiAgICBoYXNPbmNlSW5maW5pdHksXHJcbiAgICBoYXNPbmx5SW5maW5pdHksXHJcbiAgICBoYXNQYWlySW5maW5pdHksXHJcbiAgICBoYXNBbnlOYU4sXHJcbiAgICBoYXNBdExlYXN0TmFOLFxyXG4gICAgaGFzRXhhY3ROYU4sXHJcbiAgICBoYXNPbmNlTmFOLFxyXG4gICAgaGFzT25seU5hTixcclxuICAgIGhhc1BhaXJOYU4sXHJcbiAgICBoYXNBbnlOdWxsLFxyXG4gICAgaGFzQXRMZWFzdE51bGwsXHJcbiAgICBoYXNFeGFjdE51bGwsXHJcbiAgICBoYXNPbmNlTnVsbCxcclxuICAgIGhhc09ubHlOdWxsLFxyXG4gICAgaGFzUGFpck51bGwsXHJcbiAgICBoYXNBbnlOdW1iZXIsXHJcbiAgICBoYXNBdExlYXN0TnVtYmVyLFxyXG4gICAgaGFzRXhhY3ROdW1iZXIsXHJcbiAgICBoYXNPbmNlTnVtYmVyLFxyXG4gICAgaGFzT25seU51bWJlcixcclxuICAgIGhhc1BhaXJOdW1iZXIsXHJcbiAgICBoYXNBbnlPYmplY3QsXHJcbiAgICBoYXNBdExlYXN0T2JqZWN0LFxyXG4gICAgaGFzRXhhY3RPYmplY3QsXHJcbiAgICBoYXNPbmNlT2JqZWN0LFxyXG4gICAgaGFzT25seU9iamVjdCxcclxuICAgIGhhc1BhaXJPYmplY3QsXHJcbiAgICBoYXNBbnlTdHJpbmcsXHJcbiAgICBoYXNBdExlYXN0U3RyaW5nLFxyXG4gICAgaGFzRXhhY3RTdHJpbmcsXHJcbiAgICBoYXNPbmNlU3RyaW5nLFxyXG4gICAgaGFzT25seVN0cmluZyxcclxuICAgIGhhc1BhaXJTdHJpbmcsXHJcbiAgICBoYXNBbnlTeW1ib2wsXHJcbiAgICBoYXNBdExlYXN0U3ltYm9sLFxyXG4gICAgaGFzRXhhY3RTeW1ib2wsXHJcbiAgICBoYXNPbmNlU3ltYm9sLFxyXG4gICAgaGFzT25seVN5bWJvbCxcclxuICAgIGhhc1BhaXJTeW1ib2xcclxufVxyXG4iLCJpbXBvcnQgeyBpc0FycmF5LCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XG5cbmV4cG9ydCBjb25zdCBoYXNBbnlJbmZpbml0eSA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQgIT09IEluZmluaXR5KTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0F0TGVhc3RJbmZpbml0eSA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuc29tZSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gSW5maW5pdHkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzT25jZUluZmluaXR5ID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGFjYyA9PT0gMikgcmV0dXJuIDI7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBJbmZpbml0eSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDEpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzT25seUluZmluaXR5ID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gSW5maW5pdHkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzUGFpckluZmluaXR5ID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IEluZmluaXR5KSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gMik7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNFeGFjdEluZmluaXR5ID0gKGFycmF5LCBudWxsQ291bnQpID0+IHtcbiAgICBpZiAodHlwZW9mIG51bGxDb3VudCAhPT0gXCJudW1iZXJcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgbnVtYmVyXCIpO1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IEluZmluaXR5KSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gbnVsbENvdW50KTtcbn0iLCJpbXBvcnQgeyBpc0FycmF5LCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XG5cbmV4cG9ydCBjb25zdCBoYXNBbnlOYU4gPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmICFhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gTnVtYmVyLmlzTmFOKGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0F0TGVhc3ROYU4gPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LnNvbWUoKGVsZW1lbnQpID0+IE51bWJlci5pc05hTihlbGVtZW50KSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPbmNlTmFOID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGFjYyA9PT0gMikgcmV0dXJuIDI7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oZWxlbWVudCkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSAxKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc09ubHlOYU4gPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiBOdW1iZXIuaXNOYU4oZWxlbWVudCkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzUGFpck5hTiA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKGFycmF5LnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oZWxlbWVudCkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSAyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0V4YWN0TmFOID0gKGFycmF5LCBudWxsQ291bnQpID0+IHtcbiAgICBpZiAodHlwZW9mIG51bGxDb3VudCAhPT0gXCJudW1iZXJcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgbnVtYmVyXCIpO1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IG51bGxDb3VudCk7XG59IiwiaW1wb3J0IHsgaXNBcnJheSwgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xuXG5leHBvcnQgY29uc3QgaGFzQW55TnVsbCA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgIWFycmF5LmV2ZXJ5KGVsZW1lbnQgPT4gaXNOdWxsKGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0F0TGVhc3ROdWxsID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5zb21lKGVsZW1lbnQgPT4gaXNOdWxsKGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc09uY2VOdWxsID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGFjYyA9PT0gMikgcmV0dXJuIDI7XG4gICAgICAgIGlmIChpc051bGwoZWxlbWVudCkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSAxKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc09ubHlOdWxsID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gaXNOdWxsKGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc1BhaXJOdWxsID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGlzTnVsbChlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDIpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzRXhhY3ROdWxsID0gKGFycmF5LCBudWxsQ291bnQpID0+IHtcbiAgICBpZiAodHlwZW9mIG51bGxDb3VudCAhPT0gXCJudW1iZXJcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgbnVtYmVyXCIpO1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGlzTnVsbChlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IG51bGxDb3VudCk7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPT09IG51bGxcbn0iLCJpbXBvcnQgeyBpc0FycmF5LCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XG5cbmV4cG9ydCBjb25zdCBoYXNBbnlOdW1iZXIgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiB0eXBlb2YgZWxlbWVudCAhPT0gXCJudW1iZXJcIik7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNBdExlYXN0TnVtYmVyID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5zb21lKChlbGVtZW50KSA9PiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIik7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPbmNlTnVtYmVyID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGFjYyA9PT0gMikgcmV0dXJuIDI7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIikgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDEpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzT25seU51bWJlciA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc1BhaXJOdW1iZXIgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSAyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0V4YWN0TnVtYmVyID0gKGFycmF5LCBudW1iZXJDb3VudCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbnVtYmVyQ291bnQgIT09IFwibnVtYmVyXCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzZWNvbmQgcGFyYW1ldGVyIHNob3VsZCBiZSBhIG51bWJlclwiKTtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKGFycmF5LnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIikgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IG51bWJlckNvdW50KTtcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcblxuZnVuY3Rpb24gaXNPYmplY3QoZWxlbWVudCkge1xuICAgIHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShlbGVtZW50KVxufVxuXG5leHBvcnQgY29uc3QgaGFzQW55T2JqZWN0ID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAhYXJyYXkuZXZlcnkoZWxlbWVudCA9PiBpc09iamVjdChlbGVtZW50KSlcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0F0TGVhc3RPYmplY3QgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LnNvbWUoZWxlbWVudCA9PiBpc09iamVjdChlbGVtZW50KSlcbn1cblxuZXhwb3J0IGNvbnN0IGhhc09uY2VPYmplY3QgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoYWNjID09PSAyKSByZXR1cm4gMjtcbiAgICAgICAgaWYgKGlzT2JqZWN0KGVsZW1lbnQpKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gMSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPbmx5T2JqZWN0ID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gaXNPYmplY3QoZWxlbWVudCkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzUGFpck9iamVjdCA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKGFycmF5LnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChpc09iamVjdChlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDIpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzRXhhY3RPYmplY3QgPSAoYXJyYXksIG51bGxDb3VudCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbnVsbENvdW50ICE9PSBcIm51bWJlclwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBudW1iZXJcIik7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoaXNPYmplY3QoZWxlbWVudCkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSBudWxsQ291bnQpO1xufSIsImltcG9ydCB7IGlzQXJyYXksIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcblxuY29uc3QgaXNTdHJpbmcgPSBlbGVtZW50ID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCJcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0FueVN0cmluZyA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgIWFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiBpc1N0cmluZyhlbGVtZW50KSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNBdExlYXN0U3RyaW5nID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5zb21lKChlbGVtZW50KSA9PiBpc1N0cmluZyhlbGVtZW50KSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPbmNlU3RyaW5nID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGFjYyA9PT0gMikgcmV0dXJuIDI7XG4gICAgICAgIGlmIChpc1N0cmluZyhlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDEpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzT25seVN0cmluZyA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IGlzU3RyaW5nKGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc1BhaXJTdHJpbmcgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoaXNTdHJpbmcoZWxlbWVudCkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSAyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0V4YWN0U3RyaW5nID0gKGFycmF5LCBudWxsQ291bnQpID0+IHtcbiAgICBpZiAodHlwZW9mIG51bGxDb3VudCAhPT0gXCJudW1iZXJcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgbnVtYmVyXCIpO1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGlzU3RyaW5nKGVsZW1lbnQpKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gbnVsbENvdW50KTtcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcblxuY29uc3QgaXNTeW1ib2wgPSBlbGVtZW50ID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnQgPT09IFwic3ltYm9sXCJcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0FueVN5bWJvbCA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgIWFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiBpc1N5bWJvbChlbGVtZW50KSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNBdExlYXN0U3ltYm9sID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5zb21lKChlbGVtZW50KSA9PiBpc1N5bWJvbChlbGVtZW50KSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPbmNlU3ltYm9sID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGFjYyA9PT0gMikgcmV0dXJuIDI7XG4gICAgICAgIGlmIChpc1N5bWJvbChlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDEpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzT25seVN5bWJvbCA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IGlzU3ltYm9sKGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc1BhaXJTeW1ib2wgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoaXNTeW1ib2woZWxlbWVudCkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSAyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0V4YWN0U3ltYm9sID0gKGFycmF5LCBudWxsQ291bnQpID0+IHtcbiAgICBpZiAodHlwZW9mIG51bGxDb3VudCAhPT0gXCJudW1iZXJcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgbnVtYmVyXCIpO1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGlzU3ltYm9sKGVsZW1lbnQpKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gbnVsbENvdW50KTtcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcblxuZXhwb3J0IGNvbnN0IHVuaXF1ZUFsbCA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKG5ldyBTZXQoYXJyYXkpLnNpemUgPT09IGFycmF5Lmxlbmd0aClcbn0iLCJpbXBvcnQgeyBkaWZmZXJlbmNlIH0gZnJvbSBcIi4vZGlmZmVyZW5jZVwiXHJcbmltcG9ydCB7IGJldHdlZW4sIGJldHdlZW5SYW5nZSB9IGZyb20gXCIuL2JldHdlZW5cIlxyXG5pbXBvcnQge1xyXG4gICAgY29udmVydFJhbmdlVG9Mb3dlckNhc2UsXHJcbiAgICBjb252ZXJ0UmFuZ2VUb1VwcGVyQ2FzZSxcclxuICAgIGNvbnZlcnRUb0xvd2VyQ2FzZSxcclxuICAgIGNvbnZlcnRUb1VwcGVyQ2FzZVxyXG59IGZyb20gXCIuL2NvbnZlcnRcIlxyXG5cclxuaW1wb3J0IHtcclxuICAgIGV4dHJhY3RBcnJheSxcclxuICAgIGV4dHJhY3RCeU9kZEluZGV4LFxyXG4gICAgZXh0cmFjdEJ5UGFpSW5kZXgsXHJcbiAgICBleHRyYWN0TnVsbCxcclxuICAgIGV4dHJhY3ROdW1iZXIsXHJcbiAgICBleHRyYWN0T2JqZWN0LFxyXG4gICAgZXh0cmFjdE9kZCxcclxuICAgIGV4dHJhY3RQYWlyLFxyXG4gICAgZXh0cmFjdFN0cmluZyxcclxuICAgIGV4dHJhY3RTeW1ib2xcclxufSBmcm9tIFwiLi9leHRyYWN0XCJcclxuXHJcbmltcG9ydCB7XHJcbiAgICBob3dNYW55QXJyYXksXHJcbiAgICBob3dNYW55Qm9vbGVhbixcclxuICAgIGhvd01hbnlJbmZpbml0eSxcclxuICAgIGhvd01hbnlOdWxsLFxyXG4gICAgaG93TWFueU51bWJlcixcclxuICAgIGhvd01hbnlPYmplY3QsXHJcbiAgICBob3dNYW55T2RkLFxyXG4gICAgaG93TWFueVBhaXIsXHJcbiAgICBob3dNYW55U3RyaW5nLFxyXG4gICAgaG93TWFueVN5bWJvbFxyXG59IGZyb20gXCIuL29jY3VycmVuY2VcIlxyXG5cclxuaW1wb3J0IHsgb21pdCwgb21pdEFycmF5LCBvbWl0TWFueSB9IGZyb20gXCIuL29taXRcIlxyXG5pbXBvcnQgeyBvcmRlckRlc2MsIG9yZGVyUmFuZ2VEZXNjIH0gZnJvbSBcIi4vb3JkZXJcIlxyXG5pbXBvcnQgeyByZXBsYWNlLCByZXBsYWNlTWFueSB9IGZyb20gXCIuL3JlcGxhY2VcIlxyXG5pbXBvcnQgeyBzYW1lIH0gZnJvbSBcIi4vc2FtZVwiXHJcbmltcG9ydCB7IHN3aXRjaEJ5SW5kZXgsIHN3aXRjaEJ5VmFsdWUgfSBmcm9tIFwiLi9zd2l0Y2hcIlxyXG5cclxuZXhwb3J0IHtcclxuICAgIGRpZmZlcmVuY2UsXHJcbiAgICBiZXR3ZWVuLFxyXG4gICAgYmV0d2VlblJhbmdlLFxyXG4gICAgY29udmVydFJhbmdlVG9Mb3dlckNhc2UsXHJcbiAgICBjb252ZXJ0UmFuZ2VUb1VwcGVyQ2FzZSxcclxuICAgIGNvbnZlcnRUb0xvd2VyQ2FzZSxcclxuICAgIGNvbnZlcnRUb1VwcGVyQ2FzZSxcclxuICAgIGV4dHJhY3RBcnJheSxcclxuICAgIGV4dHJhY3RCeU9kZEluZGV4LFxyXG4gICAgZXh0cmFjdEJ5UGFpSW5kZXgsXHJcbiAgICBleHRyYWN0TnVsbCxcclxuICAgIGV4dHJhY3ROdW1iZXIsXHJcbiAgICBleHRyYWN0T2JqZWN0LFxyXG4gICAgZXh0cmFjdE9kZCxcclxuICAgIGV4dHJhY3RQYWlyLFxyXG4gICAgZXh0cmFjdFN0cmluZyxcclxuICAgIGV4dHJhY3RTeW1ib2wsXHJcbiAgICBob3dNYW55QXJyYXksXHJcbiAgICBob3dNYW55Qm9vbGVhbixcclxuICAgIGhvd01hbnlJbmZpbml0eSxcclxuICAgIGhvd01hbnlOdWxsLFxyXG4gICAgaG93TWFueU51bWJlcixcclxuICAgIGhvd01hbnlPYmplY3QsXHJcbiAgICBob3dNYW55T2RkLFxyXG4gICAgaG93TWFueVBhaXIsXHJcbiAgICBob3dNYW55U3RyaW5nLFxyXG4gICAgaG93TWFueVN5bWJvbCxcclxuICAgIG9taXQsXHJcbiAgICBvbWl0QXJyYXksXHJcbiAgICBvbWl0TWFueSxcclxuICAgIG9yZGVyRGVzYyxcclxuICAgIG9yZGVyUmFuZ2VEZXNjLFxyXG4gICAgcmVwbGFjZSxcclxuICAgIHJlcGxhY2VNYW55LFxyXG4gICAgc2FtZSxcclxuICAgIHN3aXRjaEJ5SW5kZXgsXHJcbiAgICBzd2l0Y2hCeVZhbHVlXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFic1JhbmdlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKHRvIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAoKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPj0gZnJvbSAmJiBhcnJheS5pbmRleE9mKGVsZW1lbnQpIDwgdG8gKyAxKSAmJiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiBNYXRoLmFicyhlbGVtZW50KSkgfHwgZWxlbWVudClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWJzID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiBNYXRoLmFicyhlbGVtZW50KSkgfHwgZWxlbWVudClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcclxuaW1wb3J0IHsgaXNCb29sZWFuQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjY0Jvb2xlYW4gPSBhcnJheSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gaXNCb29sZWFuQXJyYXkoYXJyYXkpID8gYXJyYXkucmVkdWNlKChwcmV2aW91cywgbmV4dCkgPT4gcHJldmlvdXMgJiYgbmV4dCkgOiBhcnJheVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWNjQWxsID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LnJlZHVjZSgocHJldmlvdXMsIG5leHQpID0+IHByZXZpb3VzICsgbmV4dClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjdW11bGF0b3IiLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9pcyc7XHJcblxyXG5leHBvcnQgY29uc3QgYXZlcmFnZSA9IGFycmF5ID0+IHtcclxuXHRpZiAoaXNBcnJheShhcnJheSkpIHtcclxuXHRcdHJldHVybiAoYXJyYXkucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcclxuXHRcdFx0aWYgKCh0eXBlb2YgY3VyciA9PT0gJ3N0cmluZycgJiYgY3VyciAhPSBwYXJzZUZsb2F0KGN1cnIpKSB8fCBjdXJyID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHR0aHJvdyAnVGhlIGVsZW1lbnRzIG9mIGFuIGFycmF5IHNob3VsZCBoYXZlIGEgTnVtYmVyIHR5cGUnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAoYWNjICs9ICsoK2N1cnIpKTtcclxuXHRcdH0sIDApIC8gYXJyYXkubGVuZ3RoXHJcblx0XHQpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvc1JhbmdlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKHRvIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAoKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPj0gZnJvbSAmJiBhcnJheS5pbmRleE9mKGVsZW1lbnQpIDwgdG8gKyAxKSAmJiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IE1hdGguY29zKGVsZW1lbnQpKSkgfHwgZWxlbWVudClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29zID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IE1hdGguY29zKGVsZW1lbnQpKSkgfHwgZWxlbWVudClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkZXZpZGVSYW5nZSA9IChhcnJheSwgZnJvbSwgdG8sIGRldmlkZXIpID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIGlmICh0byA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKChhcnJheS5pbmRleE9mKGVsZW1lbnQpID49IGZyb20gJiYgYXJyYXkuaW5kZXhPZihlbGVtZW50KSA8IHRvICsgMSkgJiYgdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBlbGVtZW50IC8gZGV2aWRlcikpIHx8IGVsZW1lbnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGxhc3QgaW5kZXggb2YgdGhlIGFycmF5IGlzIGxlc3MgdGhlbiAndG8nIHBhcmFtZXRlclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRldmlkZVNlbGYgPSBhcnJheSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkucmVkdWNlKChwcmV2aW91cywgbmV4dCkgPT4gcHJldmlvdXMgLyBuZXh0KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGV2aWRlID0gKGFycmF5LCBkZXZpZGVyKSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiICYmIChlbGVtZW50ID0gZWxlbWVudCAvIGRldmlkZXIpKSB8fCBlbGVtZW50KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgYWJzLCBhYnNSYW5nZSB9IGZyb20gXCIuL2Ficy5qc1wiXHJcbmltcG9ydCB7IGFjY0FsbCwgYWNjQm9vbGVhbiB9IGZyb20gXCIuL2FjYy5qc1wiXHJcbmltcG9ydCB7IGF2ZXJhZ2UgfSBmcm9tIFwiLi9hdmVyYWdlLmpzXCJcclxuaW1wb3J0IHsgY29zLCBjb3NSYW5nZSB9IGZyb20gXCIuL2Nvcy5qc1wiXHJcbmltcG9ydCB7IGRldmlkZSwgZGV2aWRlUmFuZ2UsIGRldmlkZVNlbGYgfSBmcm9tIFwiLi9kZXZpZGUuanNcIlxyXG5pbXBvcnQgeyBtYXgsIG1heFJhbmdlIH0gZnJvbSBcIi4vbWF4LmpzXCJcclxuaW1wb3J0IHsgbWluLCBtaW5SYW5nZSB9IGZyb20gXCIuL21pbi5qc1wiXHJcbmltcG9ydCB7IG11bHRpcGx5LCBtdWx0aXBseVJhbmdlLCBtdWx0aXBseVNlbGYgfSBmcm9tIFwiLi9tdWx0aXBseS5qc1wiXHJcbmltcG9ydCB7IHBvdywgcG93UmFuZ2UgfSBmcm9tIFwiLi9wb3cuanNcIlxyXG5pbXBvcnQgeyByb3VuZCwgcm91bmRSYW5nZSB9IGZyb20gXCIuL3JvdW5kLmpzXCJcclxuaW1wb3J0IHsgc2lnbiwgc2lnblJhbmdlIH0gZnJvbSBcIi4vc2lnbi5qc1wiXHJcbmltcG9ydCB7IHNpbiwgc2luUmFuZ2UgfSBmcm9tIFwiLi9zaW4uanNcIlxyXG5pbXBvcnQgeyBzcXJ0LCBzcXJ0UmFuZ2UgfSBmcm9tIFwiLi9zcXJ0LmpzXCJcclxuaW1wb3J0IHsgdGFuLCB0YW5SYW5nZSB9IGZyb20gXCIuL3Rhbi5qc1wiXHJcbmltcG9ydCB7IHplcm8sIHplcm9SYW5nZSB9IGZyb20gXCIuL3plcm8uanNcIlxyXG5cclxuZXhwb3J0IHtcclxuICAgIGFicyxcclxuICAgIGFic1JhbmdlLFxyXG4gICAgYWNjQWxsLFxyXG4gICAgYWNjQm9vbGVhbixcclxuICAgIGF2ZXJhZ2UsXHJcbiAgICBjb3MsXHJcbiAgICBjb3NSYW5nZSxcclxuICAgIGRldmlkZSxcclxuICAgIGRldmlkZVJhbmdlLFxyXG4gICAgZGV2aWRlU2VsZixcclxuICAgIG1heCxcclxuICAgIG1heFJhbmdlLFxyXG4gICAgbWluLFxyXG4gICAgbWluUmFuZ2UsXHJcbiAgICBtdWx0aXBseSxcclxuICAgIG11bHRpcGx5UmFuZ2UsXHJcbiAgICBtdWx0aXBseVNlbGYsXHJcbiAgICBwb3csXHJcbiAgICBwb3dSYW5nZSxcclxuICAgIHJvdW5kLFxyXG4gICAgcm91bmRSYW5nZSxcclxuICAgIHNpZ24sXHJcbiAgICBzaWduUmFuZ2UsXHJcbiAgICBzaW4sXHJcbiAgICBzaW5SYW5nZSxcclxuICAgIHNxcnQsXHJcbiAgICBzcXJ0UmFuZ2UsXHJcbiAgICB0YW4sXHJcbiAgICB0YW5SYW5nZSxcclxuICAgIHplcm8sXHJcbiAgICB6ZXJvUmFuZ2VcclxufSIsImltcG9ydCB7IGlzQXJyYXksIGlzTnVtYmVyQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1heCA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBpc051bWJlckFycmF5KGFycmF5KSA/IE1hdGgubWF4KC4uLmFycmF5KSA6IGFycmF5XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYXhSYW5nZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIGlmICh0byA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNOdW1iZXJBcnJheShhcnJheSkgPyBNYXRoLm1heCguLi5hcnJheS5zbGljZShmcm9tLCB0byArIDEpKSA6IGFycmF5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGxhc3QgaW5kZXggb2YgdGhlIGFycmF5IGlzIGxlc3MgdGhlbiAndG8nIHBhcmFtZXRlclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpc0FycmF5LCBpc051bWJlckFycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtaW4gPSBhcnJheSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gaXNOdW1iZXJBcnJheShhcnJheSkgPyBNYXRoLm1pbiguLi5hcnJheSkgOiBhcnJheVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWluUmFuZ2UgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICBpZiAodG8gPCBhcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTnVtYmVyQXJyYXkoYXJyYXkpID8gTWF0aC5taW4oLi4uYXJyYXkuc2xpY2UoZnJvbSwgdG8gKyAxKSkgOiBhcnJheVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcnJheSBpcyBsZXNzIHRoZW4gJ3RvJyBwYXJhbWV0ZXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNOdW1iZXJBcnJheSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbXVsdGlwbHlSYW5nZSA9IChhcnJheSwgZnJvbSwgdG8sIG11bHRpcGxpZXIpID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIGlmICh0byA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKChhcnJheS5pbmRleE9mKGVsZW1lbnQpID49IGZyb20gJiYgYXJyYXkuaW5kZXhPZihlbGVtZW50KSA8IHRvICsgMSkgJiYgdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBlbGVtZW50ICogbXVsdGlwbGllcikpIHx8IGVsZW1lbnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGxhc3QgaW5kZXggb2YgdGhlIGFycmF5IGlzIGxlc3MgdGhlbiAndG8nIHBhcmFtZXRlclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbXVsdGlwbHlTZWxmID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzTnVtYmVyQXJyYXkoYXJyYXkpID8gYXJyYXkucmVkdWNlKChwcmV2aW91cywgbmV4dCkgPT4gcHJldmlvdXMgKiBuZXh0KSA6IGFycmF5XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtdWx0aXBseSA9IChhcnJheSwgbXVsdGlwbGllcikgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IGVsZW1lbnQgKiBtdWx0aXBsaWVyKSkgfHwgZWxlbWVudClcclxuICAgIH1cclxufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xuXG5leHBvcnQgY29uc3QgcG93UmFuZ2UgPSAoYXJyYXksIGZyb20sIHRvLCBwb3dlcikgPT4ge1xuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xuICAgICAgICBpZiAodG8gPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAoKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPj0gZnJvbSAmJiBhcnJheS5pbmRleE9mKGVsZW1lbnQpIDwgdG8gKyAxKSAmJiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IE1hdGgucG93KGVsZW1lbnQsIHBvd2VyKSkpIHx8IGVsZW1lbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBwb3cgPSAoYXJyYXksIHBvd2VyKSA9PiB7XG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAodHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBNYXRoLnBvdyhlbGVtZW50LCBwb3dlcikpKSB8fCBlbGVtZW50KVxuICAgIH1cbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByb3VuZFJhbmdlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKHRvIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAoKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPj0gZnJvbSAmJiBhcnJheS5pbmRleE9mKGVsZW1lbnQpIDwgdG8gKyAxKSAmJiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IE1hdGgucm91bmQoZWxlbWVudCkpIHx8IGVsZW1lbnQpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcnJheSBpcyBsZXNzIHRoZW4gJ3RvJyBwYXJhbWV0ZXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb3VuZCA9IChhcnJheSkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IE1hdGgucm91bmQoZWxlbWVudCkpKSB8fCBlbGVtZW50KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblJhbmdlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKHRvIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAoKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPj0gZnJvbSAmJiBhcnJheS5pbmRleE9mKGVsZW1lbnQpIDwgdG8gKyAxKSAmJiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA+IDAgJiYgKGVsZW1lbnQgPSBcIitcIikgfHwgZWxlbWVudCA8IDAgJiYgKGVsZW1lbnQgPSBcIi1cIikpKSB8fCBlbGVtZW50KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcnJheSBpcyBsZXNzIHRoZW4gJ3RvJyBwYXJhbWV0ZXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaWduID0gKGFycmF5KSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiICYmIChlbGVtZW50ID4gMCAmJiAoZWxlbWVudCA9IFwiK1wiKSB8fCBlbGVtZW50IDwgMCAmJiAoZWxlbWVudCA9IFwiLVwiKSkpIHx8IGVsZW1lbnQpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcblxuZXhwb3J0IGNvbnN0IHNpblJhbmdlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xuICAgICAgICBpZiAodG8gPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAoKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPj0gZnJvbSAmJiBhcnJheS5pbmRleE9mKGVsZW1lbnQpIDwgdG8gKyAxKSAmJiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IE1hdGguc2luKGVsZW1lbnQpKSkgfHwgZWxlbWVudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcnJheSBpcyBsZXNzIHRoZW4gJ3RvJyBwYXJhbWV0ZXJcIilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNpbiA9IGFycmF5ID0+IHtcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IE1hdGguc2luKGVsZW1lbnQpKSkgfHwgZWxlbWVudClcbiAgICB9XG59IiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XG5cbmV4cG9ydCBjb25zdCBzcXJ0UmFuZ2UgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIGlmICh0byA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICgoYXJyYXkuaW5kZXhPZihlbGVtZW50KSA+PSBmcm9tICYmIGFycmF5LmluZGV4T2YoZWxlbWVudCkgPCB0byArIDEpICYmIHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiICYmIChlbGVtZW50ID0gTWF0aC5zcXJ0KGVsZW1lbnQpKSkgfHwgZWxlbWVudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcnJheSBpcyBsZXNzIHRoZW4gJ3RvJyBwYXJhbWV0ZXJcIilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNxcnQgPSBhcnJheSA9PiB7XG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAodHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBNYXRoLnNxcnQoZWxlbWVudCkpKSB8fCBlbGVtZW50KVxuICAgIH1cbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcblxuZXhwb3J0IGNvbnN0IHRhblJhbmdlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xuICAgICAgICBpZiAodG8gPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAoKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPj0gZnJvbSAmJiBhcnJheS5pbmRleE9mKGVsZW1lbnQpIDwgdG8gKyAxKSAmJiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IE1hdGgudGFuKGVsZW1lbnQpKSkgfHwgZWxlbWVudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcnJheSBpcyBsZXNzIHRoZW4gJ3RvJyBwYXJhbWV0ZXJcIilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRhbiA9IGFycmF5ID0+IHtcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IE1hdGgudGFuKGVsZW1lbnQpKSkgfHwgZWxlbWVudClcbiAgICB9XG59IiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgemVyb1JhbmdlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKHRvIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAoKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPj0gZnJvbSAmJiBhcnJheS5pbmRleE9mKGVsZW1lbnQpIDwgdG8gKyAxKSAmJiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IDApKSB8fCBlbGVtZW50KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcnJheSBpcyBsZXNzIHRoZW4gJ3RvJyBwYXJhbWV0ZXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB6ZXJvID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IDApKSB8fCBlbGVtZW50KVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGhvd01hbnlOdWxsID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgPT09IG51bGwpLmxlbmd0aFxyXG59XHJcbmV4cG9ydCBjb25zdCBob3dNYW55SW5maW5pdHkgPSBhcnJheSA9PiB7XHJcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudCA9PT0gSW5maW5pdHkpLmxlbmd0aFxyXG59XHJcbmV4cG9ydCBjb25zdCBob3dNYW55Qm9vbGVhbiA9IGFycmF5ID0+IHtcclxuICAgIHJldHVybiBhcnJheS5maWx0ZXIoZWxlbWVudCA9PiB0eXBlb2YgZWxlbWVudCA9PT0gXCJib29sZWFuXCIpLmxlbmd0aFxyXG59XHJcbmV4cG9ydCBjb25zdCBob3dNYW55TnVtYmVyID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiKS5sZW5ndGhcclxufVxyXG5leHBvcnQgY29uc3QgaG93TWFueVN5bWJvbCA9IGFycmF5ID0+IHtcclxuICAgIHJldHVybiBhcnJheS5maWx0ZXIoZWxlbWVudCA9PiB0eXBlb2YgZWxlbWVudCA9PT0gXCJzeW1ib2xcIikubGVuZ3RoXHJcbn1cclxuZXhwb3J0IGNvbnN0IGhvd01hbnlTdHJpbmcgPSBhcnJheSA9PiB7XHJcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGVsZW1lbnQgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpLmxlbmd0aFxyXG59XHJcbmV4cG9ydCBjb25zdCBob3dNYW55T2JqZWN0ID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IHR5cGVvZiBlbGVtZW50ID09PSBcIm9iamVjdFwiICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudCAhPT0gdW5kZWZpbmVkKS5sZW5ndGhcclxufVxyXG5leHBvcnQgY29uc3QgaG93TWFueUFycmF5ID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IEFycmF5LmlzQXJyYXkoZWxlbWVudCkpLmxlbmd0aFxyXG59XHJcbmV4cG9ydCBjb25zdCBob3dNYW55T2RkID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiICYmIGVsZW1lbnQgJSAyID09PSAxKS5sZW5ndGhcclxufVxyXG5leHBvcnQgY29uc3QgaG93TWFueVBhaXIgPSBhcnJheSA9PiB7XHJcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGVsZW1lbnQgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgZWxlbWVudCAlIDIgPT09IDApLmxlbmd0aFxyXG59IiwiaW1wb3J0IHsgaGFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2hhc1wiXHJcbmltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0QXJyYXkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9pc1wiXHJcblxyXG5leHBvcnQgY29uc3Qgb21pdCA9IChhcnJheSwgZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKCFoYXNFbGVtZW50KGFycmF5LCBlbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZWxlbWVudCArIFwiIGRvZXMgbm90IGV4aXN0XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc09iamVjdEFycmF5KGFycmF5KSA/IGZpbHRlckJ5T2JqZWN0KGFycmF5LCBlbGVtZW50KSA6IGZpbHRlckJ5VmFsdWUoYXJyYXksIGVsZW1lbnQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvbWl0QXJyYXkgPSAoYXJyYXksIG9taXR0ZWRBcnJheSkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpICYmIGlzQXJyYXkob21pdHRlZEFycmF5KSkge1xyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2Ygb21pdHRlZEFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzRWxlbWVudChhcnJheSwgZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlbGVtZW50ICsgXCIgZG9lcyBub3QgZXhpc3RcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc09iamVjdEFycmF5KGFycmF5KSA/IGFycmF5ID0gZmlsdGVyQnlPYmplY3QoYXJyYXksIGVsZW1lbnQpIDogYXJyYXkgPSBmaWx0ZXJCeVZhbHVlKGFycmF5LCBlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG9taXRNYW55ID0gKGFycmF5LCAuLi5lbGVtZW50cykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgICAgICBpZiAoIWhhc0VsZW1lbnQoYXJyYXksIGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZWxlbWVudCArIFwiIGRvZXMgbm90IGV4aXN0XCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNPYmplY3RBcnJheShhcnJheSkgPyBhcnJheSA9IGZpbHRlckJ5T2JqZWN0KGFycmF5LCBlbGVtZW50KSA6IGFycmF5ID0gZmlsdGVyQnlWYWx1ZShhcnJheSwgZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmaWx0ZXJCeVZhbHVlID0gKGFycmF5LCB2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQudG9Mb3dlckNhc2UoKS50cmltKCkgIT09IHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50ICE9PSB2YWx1ZVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZmlsdGVyQnlPYmplY3QgPSAoYXJyYXksIGtleSkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IE9iamVjdC5rZXlzKGVsZW1lbnQpWzBdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpICE9PSBrZXkudG9Mb3dlckNhc2UoKS50cmltKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBrZXlcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaXNcIlxyXG5pbXBvcnQgeyBpc1ByaW1pdGl2ZUFycmF5IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGVyUmFuZ2VEZXNjID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKHRvIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1ByaW1pdGl2ZUFycmF5KGFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkQXJyYXkgPSBhcnJheS5zbGljZShmcm9tLCB0byArIDEpLnNvcnQoKGEsIGIpID0+IC0xKVxyXG4gICAgICAgICAgICAgICAgbGV0IHBvaW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSBmcm9tOyBpbmRleCA8IHRvICsgMTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2luZGV4XSA9IHNvcnRlZEFycmF5W3BvaW50ZXJdXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGxhc3QgaW5kZXggb2YgdGhlIGFycmF5IGlzIGxlc3MgdGhlbiAndG8nIHBhcmFtZXRlclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGVyRGVzYyA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZUFycmF5KGFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4gLTEpXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcGxhY2UgPSAoYXJyYXksIGVsZW1lbnQsIHJlcGxhY2VyKSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKHZhbHVlID0+ICh2YWx1ZSA9PT0gZWxlbWVudCAmJiAodmFsdWUgPSByZXBsYWNlcikpIHx8IHZhbHVlKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXBsYWNlTWFueSA9IChhcnJheSwgZWxlbWVudHMsIHJlcGxhY2VycykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpICYmIGlzQXJyYXkoZWxlbWVudHMpICYmIGlzQXJyYXkocmVwbGFjZXJzKSkge1xyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcclxuICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5tYXAoKHZhbHVlKSA9PiAodmFsdWUgPT09IGVsZW1lbnQgJiYgKHZhbHVlID0gcmVwbGFjZXJzW2VsZW1lbnRzLmluZGV4T2YoZWxlbWVudCldKSkgfHwgdmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2lzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2FtZSA9ICguLi5hcnJheXMpID0+IHtcclxuICAgIGlmIChhcnJheXMubGVuZ3RoID09PSAxKSByZXR1cm4gYXJyYXlzWzBdXHJcbiAgICBjb25zdCBhcmdzID0gQXJyYXkuZnJvbShbLi4uYXJyYXlzXSlcclxuICAgIGxldCBpbml0QXJyYXkgPSBhcmdzWzBdO1xyXG4gICAgbGV0IHNhbWVFbGVtZW50cyA9IG5ldyBTZXQoKTtcclxuICAgIGFyZ3MuZm9yRWFjaChhcnJheSA9PiBpc0FycmF5KGFycmF5KSAmJiBhcmdzLmluZGV4T2YoYXJyYXkpICE9PSAwICYmXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiBpbml0QXJyYXkuaW5jbHVkZXModmFsdWUpICYmIHNhbWVFbGVtZW50cy5hZGQodmFsdWUpKSlcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHNhbWVFbGVtZW50cylcclxufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9pc1wiXHJcblxyXG5leHBvcnQgY29uc3Qgc3dpdGNoQnlJbmRleCA9IChhcnJheSwgc3dpdGNoZWRJbmRleCwgc3dpdGNoZXJJbmRleCkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKCEoc3dpdGNoZWRJbmRleCA8IGFycmF5Lmxlbmd0aCAmJiBzd2l0Y2hlckluZGV4IDwgYXJyYXkubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmUgb3IgYm90aCBvZiB0aGUgaW5kZXhlcyBhcmUgYmlnIHRoZW4gdGhlIGxlbmd0aCBvZiB0aGUgYXJyYXlcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN3aXRjaGVyID0gYXJyYXlbc3dpdGNoZWRJbmRleF07XHJcbiAgICAgICAgYXJyYXlbc3dpdGNoZWRJbmRleF0gPSBhcnJheVtzd2l0Y2hlckluZGV4XTtcclxuICAgICAgICBhcnJheVtzd2l0Y2hlckluZGV4XSA9IHN3aXRjaGVyO1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3Qgc3dpdGNoQnlWYWx1ZSA9IChhcnJheSwgc3dpdGNoZWRWYWx1ZSwgc3dpdGNoZXJWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKHN3aXRjaGVkVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHN3aXRjaGVySW5kZXggPSBhcnJheS5pbmRleE9mKHN3aXRjaGVyVmFsdWUpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEgfHwgc3dpdGNoZXJJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25lIG9yIGJvdGggb2YgdGhlIHZhbHVlcyBkbyBub3QgZXhpc3QgaW4gdGhlIGFycmF5XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzd2l0Y2hCeUluZGV4KGFycmF5LCBpbmRleCwgc3dpdGNoZXJJbmRleClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=