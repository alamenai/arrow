(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["arrow"] = factory();
	else
		root["arrow"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");


const extractNull = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.filter(value => value === null)
    }
}

const extractSymbol = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.filter(value => typeof value === "symbol")
    }
}

const extractString = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.filter(value => typeof value === "string")
    }
}

const extractNumber = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.filter(value => typeof value === "number")
    }
}

const extractObject = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.filter(value => typeof value === "object" && !Array.isArray(value) && value !== null)
    }
}

const extractArray = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.filter(value => Array.isArray(value))
    }
}

const extractOdd = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.filter(value => typeof value === "number" && value % 2 !== 0)
    }
}

const extractPair = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.filter(value => typeof value === "number" && value % 2 === 0)
    }
}

const extractByOddIndex = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.filter((_value, index) => index % 2 !== 0)
    }
}

const extractByPaiIndex = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.filter((_value, index) => index % 2 === 0)
    }
}

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
/*! exports provided: difference, between, betweenRange, toLowerCase, toUpperCase, merge, extractArray, extractByOddIndex, extractByPaiIndex, extractNull, extractNumber, extractObject, extractOdd, extractPair, extractString, extractSymbol, howManyArray, howManyBoolean, howManyInfinity, howManyNull, howManyNumber, howManyObject, howManyOdd, howManyPair, howManyString, howManySymbol, omit, omitArray, omitMany, orderDesc, orderRangeDesc, replace, replaceMany, same, switchByIndex, switchByValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _difference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./difference */ "./src/1.x.x/scripts/array/difference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _difference__WEBPACK_IMPORTED_MODULE_0__["difference"]; });

/* harmony import */ var _between__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./between */ "./src/1.x.x/scripts/array/between.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _between__WEBPACK_IMPORTED_MODULE_1__["between"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "betweenRange", function() { return _between__WEBPACK_IMPORTED_MODULE_1__["betweenRange"]; });

/* harmony import */ var _lowercase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lowercase */ "./src/1.x.x/scripts/array/lowercase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toLowerCase", function() { return _lowercase__WEBPACK_IMPORTED_MODULE_2__["toLowerCase"]; });

/* harmony import */ var _uppercase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uppercase */ "./src/1.x.x/scripts/array/uppercase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toUpperCase", function() { return _uppercase__WEBPACK_IMPORTED_MODULE_3__["toUpperCase"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merge */ "./src/1.x.x/scripts/array/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_4__["merge"]; });

/* harmony import */ var _extract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extract */ "./src/1.x.x/scripts/array/extract.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractArray", function() { return _extract__WEBPACK_IMPORTED_MODULE_5__["extractArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractByOddIndex", function() { return _extract__WEBPACK_IMPORTED_MODULE_5__["extractByOddIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractByPaiIndex", function() { return _extract__WEBPACK_IMPORTED_MODULE_5__["extractByPaiIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractNull", function() { return _extract__WEBPACK_IMPORTED_MODULE_5__["extractNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractNumber", function() { return _extract__WEBPACK_IMPORTED_MODULE_5__["extractNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractObject", function() { return _extract__WEBPACK_IMPORTED_MODULE_5__["extractObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractOdd", function() { return _extract__WEBPACK_IMPORTED_MODULE_5__["extractOdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractPair", function() { return _extract__WEBPACK_IMPORTED_MODULE_5__["extractPair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractString", function() { return _extract__WEBPACK_IMPORTED_MODULE_5__["extractString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractSymbol", function() { return _extract__WEBPACK_IMPORTED_MODULE_5__["extractSymbol"]; });

/* harmony import */ var _occurrence__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./occurrence */ "./src/1.x.x/scripts/array/occurrence.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyArray", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_6__["howManyArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyBoolean", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_6__["howManyBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyInfinity", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_6__["howManyInfinity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyNull", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_6__["howManyNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyNumber", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_6__["howManyNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyObject", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_6__["howManyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyOdd", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_6__["howManyOdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyPair", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_6__["howManyPair"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManyString", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_6__["howManyString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "howManySymbol", function() { return _occurrence__WEBPACK_IMPORTED_MODULE_6__["howManySymbol"]; });

/* harmony import */ var _omit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./omit */ "./src/1.x.x/scripts/array/omit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _omit__WEBPACK_IMPORTED_MODULE_7__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omitArray", function() { return _omit__WEBPACK_IMPORTED_MODULE_7__["omitArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omitMany", function() { return _omit__WEBPACK_IMPORTED_MODULE_7__["omitMany"]; });

/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order */ "./src/1.x.x/scripts/array/order.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderDesc", function() { return _order__WEBPACK_IMPORTED_MODULE_8__["orderDesc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderRangeDesc", function() { return _order__WEBPACK_IMPORTED_MODULE_8__["orderRangeDesc"]; });

/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./replace */ "./src/1.x.x/scripts/array/replace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _replace__WEBPACK_IMPORTED_MODULE_9__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceMany", function() { return _replace__WEBPACK_IMPORTED_MODULE_9__["replaceMany"]; });

/* harmony import */ var _same__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./same */ "./src/1.x.x/scripts/array/same.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "same", function() { return _same__WEBPACK_IMPORTED_MODULE_10__["same"]; });

/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./switch */ "./src/1.x.x/scripts/array/switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchByIndex", function() { return _switch__WEBPACK_IMPORTED_MODULE_11__["switchByIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchByValue", function() { return _switch__WEBPACK_IMPORTED_MODULE_11__["switchByValue"]; });





















/***/ }),

/***/ "./src/1.x.x/scripts/array/lowercase.js":
/*!**********************************************!*\
  !*** ./src/1.x.x/scripts/array/lowercase.js ***!
  \**********************************************/
/*! exports provided: toLowerCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLowerCase", function() { return toLowerCase; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");


const toLowerCase = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(value => (typeof value === "string" && value.toLowerCase()) || value)
    }
}

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
/*! exports provided: accBoolean, accAll */
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

/***/ "./src/1.x.x/scripts/array/merge.js":
/*!******************************************!*\
  !*** ./src/1.x.x/scripts/array/merge.js ***!
  \******************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");


const merge = (array, ...mergedArrays) => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        for (let mergedArray of mergedArrays) {
            mergedArray.length > array.length ? array = mergeElements(mergedArray, array) : array = mergeElements(array, mergedArray)
        }
        return array
    }
}

const mergeElements = (array, mergedArray) => {
    return array.map((value, index) => {
        if (!mergedArray[index]) {
            return value
        }
        return value + mergedArray[index]
    })
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

/***/ }),

/***/ "./src/1.x.x/scripts/array/uppercase.js":
/*!**********************************************!*\
  !*** ./src/1.x.x/scripts/array/uppercase.js ***!
  \**********************************************/
/*! exports provided: toUpperCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUpperCase", function() { return toUpperCase; });
/* harmony import */ var _helpers_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/is */ "./src/1.x.x/helpers/is.js");


const toUpperCase = array => {
    if (Object(_helpers_is__WEBPACK_IMPORTED_MODULE_0__["isArray"])(array)) {
        return array.map(value => (typeof value === "string" && value.toUpperCase()) || value)
    }
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnJvdy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXJyb3cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54LngvaGVscGVycy9oYXMuanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54LngvaGVscGVycy9pcy5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2JldHdlZW4uanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9kaWZmZXJlbmNlLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvZXh0cmFjdC5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2hhcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2hhcy9ib29sZWFuLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvaGFzL2VxdWFsLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvaGFzL2luZGV4LmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvaGFzL2luZmluaXR5LmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvaGFzL25hbi5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2hhcy9udWxsLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvaGFzL251bWJlci5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2hhcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9oYXMvc3RyaW5nLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvaGFzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2hhcy91bmlxdWUuanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L2xvd2VyY2FzZS5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L21hdGgvYWJzLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvbWF0aC9hY2MuanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL2F2ZXJhZ2UuanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL2Nvcy5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L21hdGgvZGV2aWRlLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvbWF0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L21hdGgvbWF4LmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvbWF0aC9taW4uanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL211bHRpcGx5LmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvbWF0aC9wb3cuanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL3JvdW5kLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvbWF0aC9zaWduLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvbWF0aC9zaW4uanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL3NxcnQuanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9tYXRoL3Rhbi5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L21hdGgvemVyby5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L21lcmdlLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvb2NjdXJyZW5jZS5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L29taXQuanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9vcmRlci5qcyIsIndlYnBhY2s6Ly9hcnJvdy8uL3NyYy8xLngueC9zY3JpcHRzL2FycmF5L3JlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vYXJyb3cvLi9zcmMvMS54Lngvc2NyaXB0cy9hcnJheS9zYW1lLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvc3dpdGNoLmpzIiwid2VicGFjazovL2Fycm93Ly4vc3JjLzEueC54L3NjcmlwdHMvYXJyYXkvdXBwZXJjYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFDbEI7O0FBRU87QUFDUCxXQUFXLDJEQUFPO0FBQ2xCOztBQUVPO0FBQ1AsV0FBVywyREFBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUCxXQUFXLDJEQUFPO0FBQ2xCOztBQUVPO0FBQ1AsV0FBVywyREFBTztBQUNsQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQSxXQUFXLDJEQUFPO0FBQ2xCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFdBQVcsMkRBQU87QUFDbEI7O0FBRU87QUFDUCxXQUFXLDJEQUFPO0FBQ2xCOztBQUVPO0FBQ1AsV0FBVywyREFBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUCxXQUFXLDJEQUFPO0FBQ2xCOztBQUVPO0FBQ1AsV0FBVywyREFBTztBQUNsQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQSxXQUFXLDJEQUFPO0FBQ2xCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUE4Qzs7QUFFdkM7QUFDUCxXQUFXLDJEQUFPO0FBQ2xCLEM7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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b3ctYWxwaGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhcnJvd1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhcnJvd1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvMS54LngvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBpc09iamVjdEFycmF5LCBpc1N0cmluZ0FycmF5IH0gZnJvbSBcIi4uLy4uLzEueC54L2hlbHBlcnMvaXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGhhc0VsZW1lbnQgPSAoYXJyYXksIGVsZW1lbnQpID0+IHtcclxuICAgIHJldHVybiBpc09iamVjdEFycmF5KGFycmF5KSA/IGhhc09iamVjdChhcnJheSwgZWxlbWVudCkgOiBoYXNWYWx1ZShhcnJheSwgZWxlbWVudClcclxufVxyXG5cclxuY29uc3QgaGFzVmFsdWUgPSAoYXJyYXksIHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoaXNTdHJpbmdBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkuc29tZShlbGVtZW50ID0+IGVsZW1lbnQudG9Mb3dlckNhc2UoKSA9PT0gdmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheS5zb21lKGVsZW1lbnQgPT4gZWxlbWVudCA9PT0gdmFsdWUpXHJcbn1cclxuXHJcbmNvbnN0IGhhc09iamVjdCA9IChhcnJheSwga2V5KSA9PiB7XHJcbiAgICBpZiAoaXNTdHJpbmdBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkuc29tZShlbGVtZW50ID0+IE9iamVjdC5rZXlzKGVsZW1lbnQpWzBdLnRvTG93ZXJDYXNlKCkgPT09IGtleS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5LnNvbWUoZWxlbWVudCA9PiBPYmplY3Qua2V5cyhlbGVtZW50KVswXSA9PT0ga2V5KVxyXG59IiwiZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBhcnJheSA9PiB7XHJcbiAgICBpZiAoYXJyYXkgPT09IG51bGwgfHwgYXJyYXkgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHBhcmFtZXRlciBpcyBudWxsIG9yIHVuZGVmaW5lZFwiKTtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHRocm93IG5ldyBFcnJvcihcIlRoZSBwYXJhbWV0ZXIgc2hvdWxkIGJlIGFuIGFycmF5XCIpO1xyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGFycmF5IGlzIGVtcHR5XCIpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGlzTnVtYmVyQXJyYXkgPSBhcnJheSA9PiB7XHJcbiAgICByZXR1cm4gYXJyYXkuZXZlcnkoZWxlbWVudCA9PiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nQXJyYXkgPSBhcnJheSA9PiB7XHJcbiAgICByZXR1cm4gYXJyYXkuZXZlcnkoZWxlbWVudCA9PiB0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbkFycmF5ID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmV2ZXJ5KGVsZW1lbnQgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwiYm9vbGVhblwiKVxyXG59XHJcbmV4cG9ydCBjb25zdCBpc09iamVjdEFycmF5ID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmV2ZXJ5KGVsZW1lbnQgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwib2JqZWN0XCIpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlQXJyYXkgPSBhcnJheSA9PiB7XHJcbiAgICBpZiAoYXJyYXkuZXZlcnkoZWxlbWVudCA9PiB0eXBlb2YgZWxlbWVudCA9PT0gXCJvYmplY3RcIikgfHxcclxuICAgICAgICBhcnJheS5ldmVyeShlbGVtZW50ID0+IHR5cGVvZiBlbGVtZW50ID09PSBcImJvb2xlYW5cIikgfHxcclxuICAgICAgICBhcnJheS5ldmVyeShlbGVtZW50ID0+IHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiKSB8fFxyXG4gICAgICAgIGFycmF5LmV2ZXJ5KGVsZW1lbnQgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZWxlbWVudHMgaGF2ZSBkaWZmZXJlbnQgdHlwZXNcIilcclxufSIsImltcG9ydCAqIGFzIEhhcyBmcm9tIFwiLi9zY3JpcHRzL2FycmF5L2hhc1wiXHJcbmltcG9ydCAqIGFzICBNYXRoIGZyb20gXCIuL3NjcmlwdHMvYXJyYXkvbWF0aFwiXHJcbmltcG9ydCAqIGFzICBBcnJvdyBmcm9tIFwiLi9zY3JpcHRzL2FycmF5XCJcclxuZXhwb3J0IHsgSGFzLCBNYXRoLCBBcnJvdyB9IiwiaW1wb3J0IHsgaXNBcnJheSwgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9pc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJldHdlZW5SYW5nZSA9IChhcnJheSwgZnJvbSwgdG8sIHN0YXJ0LCBlbmQpID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIGlmICh0byA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IGFycmF5LnNsaWNlKGZyb20sIHRvICsgMSlcclxuICAgICAgICAgICAgcmV0dXJuIGJldHdlZW4ocmFuZ2UsIHN0YXJ0LCBlbmQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGxhc3QgaW5kZXggb2YgdGhlIGFycmF5IGlzIGxlc3MgdGhlbiAndG8nIHBhcmFtZXRlclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheS5ldmVyeShlbGVtZW50ID0+IGVsZW1lbnQgPiBzdGFydCAtIDEgJiYgZWxlbWVudCA8IGVuZCArIDEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBiZXR3ZWVuID0gKGFycmF5LCBzdGFydCwgZW5kKSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpXHJcbiAgICAgICAgcmV0dXJuIGFycmF5LmV2ZXJ5KGVsZW1lbnQgPT4gZWxlbWVudCA+IHN0YXJ0IC0gMSAmJiBlbGVtZW50IDwgZW5kICsgMSlcclxufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9pc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpZmZlcmVuY2UgPSAoLi4uYXJyYXlzKSA9PiB7XHJcbiAgICBpZiAoYXJyYXlzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFycmF5c1swXVxyXG4gICAgY29uc3QgYXJncyA9IEFycmF5LmZyb20oWy4uLmFycmF5c10pXHJcbiAgICBsZXQgaW5pdEFycmF5ID0gYXJnc1swXTtcclxuICAgIGxldCBkaWZmZXJlbnRFbGVtZW50cyA9IG5ldyBTZXQoKTtcclxuICAgIGFyZ3MuZm9yRWFjaChhcnJheSA9PiBhcmdzLmluZGV4T2YoYXJyYXkpICE9PSAwICYmIGlzQXJyYXkoYXJyYXkpICYmXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiAhaW5pdEFycmF5LmluY2x1ZGVzKHZhbHVlKSAmJiBkaWZmZXJlbnRFbGVtZW50cy5hZGQodmFsdWUpKSlcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGRpZmZlcmVudEVsZW1lbnRzKVxyXG59IiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2lzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZXh0cmFjdE51bGwgPSBhcnJheSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKHZhbHVlID0+IHZhbHVlID09PSBudWxsKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXh0cmFjdFN5bWJvbCA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIodmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSBcInN5bWJvbFwiKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXh0cmFjdFN0cmluZyA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIodmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXh0cmFjdE51bWJlciA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIodmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXh0cmFjdE9iamVjdCA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIodmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZSAhPT0gbnVsbClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4dHJhY3RBcnJheSA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIodmFsdWUgPT4gQXJyYXkuaXNBcnJheSh2YWx1ZSkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleHRyYWN0T2RkID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcih2YWx1ZSA9PiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgJSAyICE9PSAwKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXh0cmFjdFBhaXIgPSBhcnJheSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKHZhbHVlID0+IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSAlIDIgPT09IDApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleHRyYWN0QnlPZGRJbmRleCA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoKF92YWx1ZSwgaW5kZXgpID0+IGluZGV4ICUgMiAhPT0gMClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4dHJhY3RCeVBhaUluZGV4ID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcigoX3ZhbHVlLCBpbmRleCkgPT4gaW5kZXggJSAyID09PSAwKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgaXNBcnJheSwgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xuXG5leHBvcnQgY29uc3QgaGFzQW55QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgIWFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiBBcnJheS5pc0FycmF5KGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0F0TGVhc3RBcnJheSA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuc29tZSgoZWxlbWVudCkgPT4gQXJyYXkuaXNBcnJheShlbGVtZW50KSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPbmNlQXJyYXkgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoYWNjID09PSAyKSByZXR1cm4gYWNjO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDEpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzT25seUFycmF5ID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gQXJyYXkuaXNBcnJheShlbGVtZW50KSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNQYWlyQXJyYXkgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDIpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzRXhhY3RBcnJheSA9IChhcnJheSwgbnVsbENvdW50KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBudWxsQ291bnQgIT09IFwibnVtYmVyXCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzZWNvbmQgcGFyYW1ldGVyIHNob3VsZCBiZSBhIG51bWJlclwiKTtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKGFycmF5LnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnQpKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gbnVsbENvdW50KTtcbn0iLCJpbXBvcnQgeyBpc0FycmF5LCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGFzQW55Qm9vbGVhbiA9IChhcnJheSkgPT4ge1xyXG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmICghYXJyYXkuaW5jbHVkZXModHJ1ZSkgJiYgIWFycmF5LmluY2x1ZGVzKGZhbHNlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYXNBdExlYXN0Qm9vbGVhbiA9IChhcnJheSkgPT4ge1xyXG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5pbmNsdWRlcyh0cnVlKSB8fCBhcnJheS5pbmNsdWRlcyhmYWxzZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFzT25jZUJvb2xlYW4gPSAoYXJyYXkpID0+IHtcclxuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAoYWNjID09PSAyKSByZXR1cm4gMjtcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwiYm9vbGVhblwiKSBhY2MgKz0gMTtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgMCkgPT09IDEpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFzT25seUJvb2xlYW4gPSAoYXJyYXkpID0+IHtcclxuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwiYm9vbGVhblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhc1BhaXJCb29sZWFuID0gKGFycmF5KSA9PiB7XHJcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKGFycmF5LnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcImJvb2xlYW5cIikgYWNjICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIDApID09PSAyKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhc0V4YWN0Qm9vbGVhbiA9IChhcnJheSwgbnVsbENvdW50KSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIG51bGxDb3VudCAhPT0gXCJudW1iZXJcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgbnVtYmVyXCIpO1xyXG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJib29sZWFuXCIpIGFjYyArPSAxO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCAwKSA9PT0gbnVsbENvdW50KTtcclxufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVxdWFsQWxsID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIG5ldyBTZXQoYXJyYXkpLnNpemUgPT09IDE7XHJcbn0iLCJpbXBvcnQgeyBlcXVhbEFsbCB9IGZyb20gXCIuL2VxdWFsXCJcclxuaW1wb3J0IHsgdW5pcXVlQWxsIH0gZnJvbSBcIi4vdW5pcXVlXCJcclxuXHJcbmltcG9ydCB7XHJcbiAgICBoYXNBbnlBcnJheSxcclxuICAgIGhhc0F0TGVhc3RBcnJheSxcclxuICAgIGhhc0V4YWN0QXJyYXksXHJcbiAgICBoYXNPbmNlQXJyYXksXHJcbiAgICBoYXNPbmx5QXJyYXksXHJcbiAgICBoYXNQYWlyQXJyYXlcclxufSBmcm9tIFwiLi9hcnJheVwiXHJcblxyXG5pbXBvcnQge1xyXG4gICAgaGFzQW55Qm9vbGVhbixcclxuICAgIGhhc0F0TGVhc3RCb29sZWFuLFxyXG4gICAgaGFzRXhhY3RCb29sZWFuLFxyXG4gICAgaGFzT25jZUJvb2xlYW4sXHJcbiAgICBoYXNPbmx5Qm9vbGVhbixcclxuICAgIGhhc1BhaXJCb29sZWFuXHJcbn0gZnJvbSBcIi4vYm9vbGVhblwiXHJcblxyXG5pbXBvcnQge1xyXG4gICAgaGFzQW55SW5maW5pdHksXHJcbiAgICBoYXNBdExlYXN0SW5maW5pdHksXHJcbiAgICBoYXNFeGFjdEluZmluaXR5LFxyXG4gICAgaGFzT25jZUluZmluaXR5LFxyXG4gICAgaGFzT25seUluZmluaXR5LFxyXG4gICAgaGFzUGFpckluZmluaXR5XHJcbn0gZnJvbSBcIi4vaW5maW5pdHlcIlxyXG5cclxuaW1wb3J0IHtcclxuICAgIGhhc0FueU5hTixcclxuICAgIGhhc0F0TGVhc3ROYU4sXHJcbiAgICBoYXNFeGFjdE5hTixcclxuICAgIGhhc09uY2VOYU4sXHJcbiAgICBoYXNPbmx5TmFOLFxyXG4gICAgaGFzUGFpck5hTlxyXG59IGZyb20gXCIuL25hblwiXHJcblxyXG5pbXBvcnQge1xyXG4gICAgaGFzQW55TnVsbCxcclxuICAgIGhhc0F0TGVhc3ROdWxsLFxyXG4gICAgaGFzRXhhY3ROdWxsLFxyXG4gICAgaGFzT25jZU51bGwsXHJcbiAgICBoYXNPbmx5TnVsbCxcclxuICAgIGhhc1BhaXJOdWxsXHJcbn0gZnJvbSBcIi4vbnVsbFwiXHJcblxyXG5pbXBvcnQge1xyXG4gICAgaGFzQW55TnVtYmVyLFxyXG4gICAgaGFzQXRMZWFzdE51bWJlcixcclxuICAgIGhhc0V4YWN0TnVtYmVyLFxyXG4gICAgaGFzT25jZU51bWJlcixcclxuICAgIGhhc09ubHlOdW1iZXIsXHJcbiAgICBoYXNQYWlyTnVtYmVyXHJcbn0gZnJvbSBcIi4vbnVtYmVyXCJcclxuXHJcbmltcG9ydCB7XHJcbiAgICBoYXNBbnlPYmplY3QsXHJcbiAgICBoYXNBdExlYXN0T2JqZWN0LFxyXG4gICAgaGFzRXhhY3RPYmplY3QsXHJcbiAgICBoYXNPbmNlT2JqZWN0LFxyXG4gICAgaGFzT25seU9iamVjdCxcclxuICAgIGhhc1BhaXJPYmplY3RcclxufSBmcm9tIFwiLi9vYmplY3RcIlxyXG5cclxuaW1wb3J0IHtcclxuICAgIGhhc0FueVN0cmluZyxcclxuICAgIGhhc0F0TGVhc3RTdHJpbmcsXHJcbiAgICBoYXNFeGFjdFN0cmluZyxcclxuICAgIGhhc09uY2VTdHJpbmcsXHJcbiAgICBoYXNPbmx5U3RyaW5nLFxyXG4gICAgaGFzUGFpclN0cmluZ1xyXG59IGZyb20gXCIuL3N0cmluZ1wiXHJcblxyXG5pbXBvcnQge1xyXG4gICAgaGFzQW55U3ltYm9sLFxyXG4gICAgaGFzQXRMZWFzdFN5bWJvbCxcclxuICAgIGhhc0V4YWN0U3ltYm9sLFxyXG4gICAgaGFzT25jZVN5bWJvbCxcclxuICAgIGhhc09ubHlTeW1ib2wsXHJcbiAgICBoYXNQYWlyU3ltYm9sXHJcbn0gZnJvbSBcIi4vc3ltYm9sXCJcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBlcXVhbEFsbCxcclxuICAgIHVuaXF1ZUFsbCxcclxuICAgIGhhc0FueUFycmF5LFxyXG4gICAgaGFzQXRMZWFzdEFycmF5LFxyXG4gICAgaGFzRXhhY3RBcnJheSxcclxuICAgIGhhc09uY2VBcnJheSxcclxuICAgIGhhc09ubHlBcnJheSxcclxuICAgIGhhc1BhaXJBcnJheSxcclxuICAgIGhhc0FueUJvb2xlYW4sXHJcbiAgICBoYXNBdExlYXN0Qm9vbGVhbixcclxuICAgIGhhc0V4YWN0Qm9vbGVhbixcclxuICAgIGhhc09uY2VCb29sZWFuLFxyXG4gICAgaGFzT25seUJvb2xlYW4sXHJcbiAgICBoYXNQYWlyQm9vbGVhbixcclxuICAgIGhhc0FueUluZmluaXR5LFxyXG4gICAgaGFzQXRMZWFzdEluZmluaXR5LFxyXG4gICAgaGFzRXhhY3RJbmZpbml0eSxcclxuICAgIGhhc09uY2VJbmZpbml0eSxcclxuICAgIGhhc09ubHlJbmZpbml0eSxcclxuICAgIGhhc1BhaXJJbmZpbml0eSxcclxuICAgIGhhc0FueU5hTixcclxuICAgIGhhc0F0TGVhc3ROYU4sXHJcbiAgICBoYXNFeGFjdE5hTixcclxuICAgIGhhc09uY2VOYU4sXHJcbiAgICBoYXNPbmx5TmFOLFxyXG4gICAgaGFzUGFpck5hTixcclxuICAgIGhhc0FueU51bGwsXHJcbiAgICBoYXNBdExlYXN0TnVsbCxcclxuICAgIGhhc0V4YWN0TnVsbCxcclxuICAgIGhhc09uY2VOdWxsLFxyXG4gICAgaGFzT25seU51bGwsXHJcbiAgICBoYXNQYWlyTnVsbCxcclxuICAgIGhhc0FueU51bWJlcixcclxuICAgIGhhc0F0TGVhc3ROdW1iZXIsXHJcbiAgICBoYXNFeGFjdE51bWJlcixcclxuICAgIGhhc09uY2VOdW1iZXIsXHJcbiAgICBoYXNPbmx5TnVtYmVyLFxyXG4gICAgaGFzUGFpck51bWJlcixcclxuICAgIGhhc0FueU9iamVjdCxcclxuICAgIGhhc0F0TGVhc3RPYmplY3QsXHJcbiAgICBoYXNFeGFjdE9iamVjdCxcclxuICAgIGhhc09uY2VPYmplY3QsXHJcbiAgICBoYXNPbmx5T2JqZWN0LFxyXG4gICAgaGFzUGFpck9iamVjdCxcclxuICAgIGhhc0FueVN0cmluZyxcclxuICAgIGhhc0F0TGVhc3RTdHJpbmcsXHJcbiAgICBoYXNFeGFjdFN0cmluZyxcclxuICAgIGhhc09uY2VTdHJpbmcsXHJcbiAgICBoYXNPbmx5U3RyaW5nLFxyXG4gICAgaGFzUGFpclN0cmluZyxcclxuICAgIGhhc0FueVN5bWJvbCxcclxuICAgIGhhc0F0TGVhc3RTeW1ib2wsXHJcbiAgICBoYXNFeGFjdFN5bWJvbCxcclxuICAgIGhhc09uY2VTeW1ib2wsXHJcbiAgICBoYXNPbmx5U3ltYm9sLFxyXG4gICAgaGFzUGFpclN5bWJvbFxyXG59XHJcbiIsImltcG9ydCB7IGlzQXJyYXksIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcblxuZXhwb3J0IGNvbnN0IGhhc0FueUluZmluaXR5ID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudCAhPT0gSW5maW5pdHkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzQXRMZWFzdEluZmluaXR5ID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5zb21lKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBJbmZpbml0eSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPbmNlSW5maW5pdHkgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoYWNjID09PSAyKSByZXR1cm4gMjtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IEluZmluaXR5KSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gMSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPbmx5SW5maW5pdHkgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBJbmZpbml0eSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNQYWlySW5maW5pdHkgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gSW5maW5pdHkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSAyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0V4YWN0SW5maW5pdHkgPSAoYXJyYXksIG51bGxDb3VudCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbnVsbENvdW50ICE9PSBcIm51bWJlclwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBudW1iZXJcIik7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gSW5maW5pdHkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSBudWxsQ291bnQpO1xufSIsImltcG9ydCB7IGlzQXJyYXksIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcblxuZXhwb3J0IGNvbnN0IGhhc0FueU5hTiA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgIWFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiBOdW1iZXIuaXNOYU4oZWxlbWVudCkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzQXRMZWFzdE5hTiA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuc29tZSgoZWxlbWVudCkgPT4gTnVtYmVyLmlzTmFOKGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc09uY2VOYU4gPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoYWNjID09PSAyKSByZXR1cm4gMjtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDEpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzT25seU5hTiA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IE51bWJlci5pc05hTihlbGVtZW50KSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNQYWlyTmFOID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDIpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzRXhhY3ROYU4gPSAoYXJyYXksIG51bGxDb3VudCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbnVsbENvdW50ICE9PSBcIm51bWJlclwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBudW1iZXJcIik7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGVsZW1lbnQpKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gbnVsbENvdW50KTtcbn0iLCJpbXBvcnQgeyBpc0FycmF5LCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XG5cbmV4cG9ydCBjb25zdCBoYXNBbnlOdWxsID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAhYXJyYXkuZXZlcnkoZWxlbWVudCA9PiBpc051bGwoZWxlbWVudCkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzQXRMZWFzdE51bGwgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LnNvbWUoZWxlbWVudCA9PiBpc051bGwoZWxlbWVudCkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzT25jZU51bGwgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoYWNjID09PSAyKSByZXR1cm4gMjtcbiAgICAgICAgaWYgKGlzTnVsbChlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDEpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzT25seU51bGwgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiBpc051bGwoZWxlbWVudCkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzUGFpck51bGwgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoaXNOdWxsKGVsZW1lbnQpKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gMik7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNFeGFjdE51bGwgPSAoYXJyYXksIG51bGxDb3VudCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbnVsbENvdW50ICE9PSBcIm51bWJlclwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBudW1iZXJcIik7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoaXNOdWxsKGVsZW1lbnQpKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gbnVsbENvdW50KTtcbn1cblxuZnVuY3Rpb24gaXNOdWxsKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCA9PT0gbnVsbFxufSIsImltcG9ydCB7IGlzQXJyYXksIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcblxuZXhwb3J0IGNvbnN0IGhhc0FueU51bWJlciA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IHR5cGVvZiBlbGVtZW50ICE9PSBcIm51bWJlclwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0F0TGVhc3ROdW1iZXIgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LnNvbWUoKGVsZW1lbnQpID0+IHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc09uY2VOdW1iZXIgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoYWNjID09PSAyKSByZXR1cm4gMjtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gMSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPbmx5TnVtYmVyID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzUGFpck51bWJlciA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKGFycmF5LnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIikgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDIpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzRXhhY3ROdW1iZXIgPSAoYXJyYXksIG51bWJlckNvdW50KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBudW1iZXJDb3VudCAhPT0gXCJudW1iZXJcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgbnVtYmVyXCIpO1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gbnVtYmVyQ291bnQpO1xufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xuXG5mdW5jdGlvbiBpc09iamVjdChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBlbGVtZW50ID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGVsZW1lbnQpXG59XG5cbmV4cG9ydCBjb25zdCBoYXNBbnlPYmplY3QgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmICFhcnJheS5ldmVyeShlbGVtZW50ID0+IGlzT2JqZWN0KGVsZW1lbnQpKVxufVxuXG5leHBvcnQgY29uc3QgaGFzQXRMZWFzdE9iamVjdCA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgYXJyYXkuc29tZShlbGVtZW50ID0+IGlzT2JqZWN0KGVsZW1lbnQpKVxufVxuXG5leHBvcnQgY29uc3QgaGFzT25jZU9iamVjdCA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKGFycmF5LnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChhY2MgPT09IDIpIHJldHVybiAyO1xuICAgICAgICBpZiAoaXNPYmplY3QoZWxlbWVudCkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSAxKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc09ubHlPYmplY3QgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LmV2ZXJ5KChlbGVtZW50KSA9PiBpc09iamVjdChlbGVtZW50KSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNQYWlyT2JqZWN0ID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAoYXJyYXkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGlzT2JqZWN0KGVsZW1lbnQpKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gMik7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNFeGFjdE9iamVjdCA9IChhcnJheSwgbnVsbENvdW50KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBudWxsQ291bnQgIT09IFwibnVtYmVyXCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzZWNvbmQgcGFyYW1ldGVyIHNob3VsZCBiZSBhIG51bWJlclwiKTtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKGFycmF5LnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChpc09iamVjdChlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IG51bGxDb3VudCk7XG59IiwiaW1wb3J0IHsgaXNBcnJheSwgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xuXG5jb25zdCBpc1N0cmluZyA9IGVsZW1lbnQgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIlxufVxuXG5leHBvcnQgY29uc3QgaGFzQW55U3RyaW5nID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAhYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IGlzU3RyaW5nKGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0F0TGVhc3RTdHJpbmcgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LnNvbWUoKGVsZW1lbnQpID0+IGlzU3RyaW5nKGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc09uY2VTdHJpbmcgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoYWNjID09PSAyKSByZXR1cm4gMjtcbiAgICAgICAgaWYgKGlzU3RyaW5nKGVsZW1lbnQpKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gMSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPbmx5U3RyaW5nID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gaXNTdHJpbmcoZWxlbWVudCkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzUGFpclN0cmluZyA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKGFycmF5LnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChpc1N0cmluZyhlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDIpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzRXhhY3RTdHJpbmcgPSAoYXJyYXksIG51bGxDb3VudCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbnVsbENvdW50ICE9PSBcIm51bWJlclwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBudW1iZXJcIik7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoaXNTdHJpbmcoZWxlbWVudCkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSBudWxsQ291bnQpO1xufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xuXG5jb25zdCBpc1N5bWJvbCA9IGVsZW1lbnQgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gXCJzeW1ib2xcIlxufVxuXG5leHBvcnQgY29uc3QgaGFzQW55U3ltYm9sID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAhYXJyYXkuZXZlcnkoKGVsZW1lbnQpID0+IGlzU3ltYm9sKGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc0F0TGVhc3RTeW1ib2wgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIGFycmF5LnNvbWUoKGVsZW1lbnQpID0+IGlzU3ltYm9sKGVsZW1lbnQpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhc09uY2VTeW1ib2wgPSBhcnJheSA9PiB7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoYWNjID09PSAyKSByZXR1cm4gMjtcbiAgICAgICAgaWYgKGlzU3ltYm9sKGVsZW1lbnQpKSBhY2MgKz0gMTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKSA9PT0gMSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYXNPbmx5U3ltYm9sID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiBhcnJheS5ldmVyeSgoZWxlbWVudCkgPT4gaXNTeW1ib2woZWxlbWVudCkpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzUGFpclN5bWJvbCA9IGFycmF5ID0+IHtcbiAgICByZXR1cm4gaXNBcnJheShhcnJheSkgJiYgKGFycmF5LnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChpc1N5bWJvbChlbGVtZW50KSkgYWNjICs9IDE7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCkgPT09IDIpO1xufVxuXG5leHBvcnQgY29uc3QgaGFzRXhhY3RTeW1ib2wgPSAoYXJyYXksIG51bGxDb3VudCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbnVsbENvdW50ICE9PSBcIm51bWJlclwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBudW1iZXJcIik7XG4gICAgcmV0dXJuIGlzQXJyYXkoYXJyYXkpICYmIChhcnJheS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoaXNTeW1ib2woZWxlbWVudCkpIGFjYyArPSAxO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApID09PSBudWxsQ291bnQpO1xufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xuXG5leHBvcnQgY29uc3QgdW5pcXVlQWxsID0gYXJyYXkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGFycmF5KSAmJiAobmV3IFNldChhcnJheSkuc2l6ZSA9PT0gYXJyYXkubGVuZ3RoKVxufSIsImltcG9ydCB7IGRpZmZlcmVuY2UgfSBmcm9tIFwiLi9kaWZmZXJlbmNlXCJcclxuaW1wb3J0IHsgYmV0d2VlbiwgYmV0d2VlblJhbmdlIH0gZnJvbSBcIi4vYmV0d2VlblwiXHJcbmltcG9ydCB7IHRvTG93ZXJDYXNlIH0gZnJvbSBcIi4vbG93ZXJjYXNlXCJcclxuaW1wb3J0IHsgdG9VcHBlckNhc2UgfSBmcm9tIFwiLi91cHBlcmNhc2VcIlxyXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gXCIuL21lcmdlXCJcclxuXHJcbmltcG9ydCB7XHJcbiAgICBleHRyYWN0QXJyYXksXHJcbiAgICBleHRyYWN0QnlPZGRJbmRleCxcclxuICAgIGV4dHJhY3RCeVBhaUluZGV4LFxyXG4gICAgZXh0cmFjdE51bGwsXHJcbiAgICBleHRyYWN0TnVtYmVyLFxyXG4gICAgZXh0cmFjdE9iamVjdCxcclxuICAgIGV4dHJhY3RPZGQsXHJcbiAgICBleHRyYWN0UGFpcixcclxuICAgIGV4dHJhY3RTdHJpbmcsXHJcbiAgICBleHRyYWN0U3ltYm9sXHJcbn0gZnJvbSBcIi4vZXh0cmFjdFwiXHJcblxyXG5pbXBvcnQge1xyXG4gICAgaG93TWFueUFycmF5LFxyXG4gICAgaG93TWFueUJvb2xlYW4sXHJcbiAgICBob3dNYW55SW5maW5pdHksXHJcbiAgICBob3dNYW55TnVsbCxcclxuICAgIGhvd01hbnlOdW1iZXIsXHJcbiAgICBob3dNYW55T2JqZWN0LFxyXG4gICAgaG93TWFueU9kZCxcclxuICAgIGhvd01hbnlQYWlyLFxyXG4gICAgaG93TWFueVN0cmluZyxcclxuICAgIGhvd01hbnlTeW1ib2xcclxufSBmcm9tIFwiLi9vY2N1cnJlbmNlXCJcclxuXHJcbmltcG9ydCB7IG9taXQsIG9taXRBcnJheSwgb21pdE1hbnkgfSBmcm9tIFwiLi9vbWl0XCJcclxuaW1wb3J0IHsgb3JkZXJEZXNjLCBvcmRlclJhbmdlRGVzYyB9IGZyb20gXCIuL29yZGVyXCJcclxuaW1wb3J0IHsgcmVwbGFjZSwgcmVwbGFjZU1hbnkgfSBmcm9tIFwiLi9yZXBsYWNlXCJcclxuaW1wb3J0IHsgc2FtZSB9IGZyb20gXCIuL3NhbWVcIlxyXG5pbXBvcnQgeyBzd2l0Y2hCeUluZGV4LCBzd2l0Y2hCeVZhbHVlIH0gZnJvbSBcIi4vc3dpdGNoXCJcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBkaWZmZXJlbmNlLFxyXG4gICAgYmV0d2VlbixcclxuICAgIGJldHdlZW5SYW5nZSxcclxuICAgIHRvTG93ZXJDYXNlLFxyXG4gICAgdG9VcHBlckNhc2UsXHJcbiAgICBtZXJnZSxcclxuICAgIGV4dHJhY3RBcnJheSxcclxuICAgIGV4dHJhY3RCeU9kZEluZGV4LFxyXG4gICAgZXh0cmFjdEJ5UGFpSW5kZXgsXHJcbiAgICBleHRyYWN0TnVsbCxcclxuICAgIGV4dHJhY3ROdW1iZXIsXHJcbiAgICBleHRyYWN0T2JqZWN0LFxyXG4gICAgZXh0cmFjdE9kZCxcclxuICAgIGV4dHJhY3RQYWlyLFxyXG4gICAgZXh0cmFjdFN0cmluZyxcclxuICAgIGV4dHJhY3RTeW1ib2wsXHJcbiAgICBob3dNYW55QXJyYXksXHJcbiAgICBob3dNYW55Qm9vbGVhbixcclxuICAgIGhvd01hbnlJbmZpbml0eSxcclxuICAgIGhvd01hbnlOdWxsLFxyXG4gICAgaG93TWFueU51bWJlcixcclxuICAgIGhvd01hbnlPYmplY3QsXHJcbiAgICBob3dNYW55T2RkLFxyXG4gICAgaG93TWFueVBhaXIsXHJcbiAgICBob3dNYW55U3RyaW5nLFxyXG4gICAgaG93TWFueVN5bWJvbCxcclxuICAgIG9taXQsXHJcbiAgICBvbWl0QXJyYXksXHJcbiAgICBvbWl0TWFueSxcclxuICAgIG9yZGVyRGVzYyxcclxuICAgIG9yZGVyUmFuZ2VEZXNjLFxyXG4gICAgcmVwbGFjZSxcclxuICAgIHJlcGxhY2VNYW55LFxyXG4gICAgc2FtZSxcclxuICAgIHN3aXRjaEJ5SW5kZXgsXHJcbiAgICBzd2l0Y2hCeVZhbHVlXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9pc1wiXHJcblxyXG5leHBvcnQgY29uc3QgdG9Mb3dlckNhc2UgPSBhcnJheSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKHZhbHVlID0+ICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUudG9Mb3dlckNhc2UoKSkgfHwgdmFsdWUpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhYnNSYW5nZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIGlmICh0byA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKChhcnJheS5pbmRleE9mKGVsZW1lbnQpID49IGZyb20gJiYgYXJyYXkuaW5kZXhPZihlbGVtZW50KSA8IHRvICsgMSkgJiYgdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgTWF0aC5hYnMoZWxlbWVudCkpIHx8IGVsZW1lbnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGxhc3QgaW5kZXggb2YgdGhlIGFycmF5IGlzIGxlc3MgdGhlbiAndG8nIHBhcmFtZXRlclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFicyA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAodHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgTWF0aC5hYnMoZWxlbWVudCkpIHx8IGVsZW1lbnQpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XHJcbmltcG9ydCB7IGlzQm9vbGVhbkFycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhY2NCb29sZWFuID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzQm9vbGVhbkFycmF5KGFycmF5KSA/IGFycmF5LnJlZHVjZSgocHJldmlvdXMsIG5leHQpID0+IHByZXZpb3VzICYmIG5leHQpIDogYXJyYXlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjY0FsbCA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKHByZXZpb3VzLCBuZXh0KSA9PiBwcmV2aW91cyArIG5leHQpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvaXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF2ZXJhZ2UgPSBhcnJheSA9PiB7XHJcblx0aWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcblx0XHRyZXR1cm4gKGFycmF5LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XHJcblx0XHRcdGlmICgodHlwZW9mIGN1cnIgPT09ICdzdHJpbmcnICYmIGN1cnIgIT0gcGFyc2VGbG9hdChjdXJyKSkgfHwgY3VyciA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0dGhyb3cgJ1RoZSBlbGVtZW50cyBvZiBhbiBhcnJheSBzaG91bGQgaGF2ZSBhIE51bWJlciB0eXBlJztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gKGFjYyArPSArKCtjdXJyKSk7XHJcblx0XHR9LCAwKSAvIGFycmF5Lmxlbmd0aFxyXG5cdFx0KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb3NSYW5nZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIGlmICh0byA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKChhcnJheS5pbmRleE9mKGVsZW1lbnQpID49IGZyb20gJiYgYXJyYXkuaW5kZXhPZihlbGVtZW50KSA8IHRvICsgMSkgJiYgdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBNYXRoLmNvcyhlbGVtZW50KSkpIHx8IGVsZW1lbnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGxhc3QgaW5kZXggb2YgdGhlIGFycmF5IGlzIGxlc3MgdGhlbiAndG8nIHBhcmFtZXRlclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvcyA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAodHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBNYXRoLmNvcyhlbGVtZW50KSkpIHx8IGVsZW1lbnQpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZGV2aWRlUmFuZ2UgPSAoYXJyYXksIGZyb20sIHRvLCBkZXZpZGVyKSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICBpZiAodG8gPCBhcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICgoYXJyYXkuaW5kZXhPZihlbGVtZW50KSA+PSBmcm9tICYmIGFycmF5LmluZGV4T2YoZWxlbWVudCkgPCB0byArIDEpICYmIHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiICYmIChlbGVtZW50ID0gZWxlbWVudCAvIGRldmlkZXIpKSB8fCBlbGVtZW50KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcnJheSBpcyBsZXNzIHRoZW4gJ3RvJyBwYXJhbWV0ZXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZXZpZGVTZWxmID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LnJlZHVjZSgocHJldmlvdXMsIG5leHQpID0+IHByZXZpb3VzIC8gbmV4dClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRldmlkZSA9IChhcnJheSwgZGV2aWRlcikgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IGVsZW1lbnQgLyBkZXZpZGVyKSkgfHwgZWxlbWVudClcclxuICAgIH1cclxufSIsImltcG9ydCB7IGFicywgYWJzUmFuZ2UgfSBmcm9tIFwiLi9hYnMuanNcIlxyXG5pbXBvcnQgeyBhY2NBbGwsIGFjY0Jvb2xlYW4gfSBmcm9tIFwiLi9hY2MuanNcIlxyXG5pbXBvcnQgeyBhdmVyYWdlIH0gZnJvbSBcIi4vYXZlcmFnZS5qc1wiXHJcbmltcG9ydCB7IGNvcywgY29zUmFuZ2UgfSBmcm9tIFwiLi9jb3MuanNcIlxyXG5pbXBvcnQgeyBkZXZpZGUsIGRldmlkZVJhbmdlLCBkZXZpZGVTZWxmIH0gZnJvbSBcIi4vZGV2aWRlLmpzXCJcclxuaW1wb3J0IHsgbWF4LCBtYXhSYW5nZSB9IGZyb20gXCIuL21heC5qc1wiXHJcbmltcG9ydCB7IG1pbiwgbWluUmFuZ2UgfSBmcm9tIFwiLi9taW4uanNcIlxyXG5pbXBvcnQgeyBtdWx0aXBseSwgbXVsdGlwbHlSYW5nZSwgbXVsdGlwbHlTZWxmIH0gZnJvbSBcIi4vbXVsdGlwbHkuanNcIlxyXG5pbXBvcnQgeyBwb3csIHBvd1JhbmdlIH0gZnJvbSBcIi4vcG93LmpzXCJcclxuaW1wb3J0IHsgcm91bmQsIHJvdW5kUmFuZ2UgfSBmcm9tIFwiLi9yb3VuZC5qc1wiXHJcbmltcG9ydCB7IHNpZ24sIHNpZ25SYW5nZSB9IGZyb20gXCIuL3NpZ24uanNcIlxyXG5pbXBvcnQgeyBzaW4sIHNpblJhbmdlIH0gZnJvbSBcIi4vc2luLmpzXCJcclxuaW1wb3J0IHsgc3FydCwgc3FydFJhbmdlIH0gZnJvbSBcIi4vc3FydC5qc1wiXHJcbmltcG9ydCB7IHRhbiwgdGFuUmFuZ2UgfSBmcm9tIFwiLi90YW4uanNcIlxyXG5pbXBvcnQgeyB6ZXJvLCB6ZXJvUmFuZ2UgfSBmcm9tIFwiLi96ZXJvLmpzXCJcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBhYnMsXHJcbiAgICBhYnNSYW5nZSxcclxuICAgIGFjY0FsbCxcclxuICAgIGFjY0Jvb2xlYW4sXHJcbiAgICBhdmVyYWdlLFxyXG4gICAgY29zLFxyXG4gICAgY29zUmFuZ2UsXHJcbiAgICBkZXZpZGUsXHJcbiAgICBkZXZpZGVSYW5nZSxcclxuICAgIGRldmlkZVNlbGYsXHJcbiAgICBtYXgsXHJcbiAgICBtYXhSYW5nZSxcclxuICAgIG1pbixcclxuICAgIG1pblJhbmdlLFxyXG4gICAgbXVsdGlwbHksXHJcbiAgICBtdWx0aXBseVJhbmdlLFxyXG4gICAgbXVsdGlwbHlTZWxmLFxyXG4gICAgcG93LFxyXG4gICAgcG93UmFuZ2UsXHJcbiAgICByb3VuZCxcclxuICAgIHJvdW5kUmFuZ2UsXHJcbiAgICBzaWduLFxyXG4gICAgc2lnblJhbmdlLFxyXG4gICAgc2luLFxyXG4gICAgc2luUmFuZ2UsXHJcbiAgICBzcXJ0LFxyXG4gICAgc3FydFJhbmdlLFxyXG4gICAgdGFuLFxyXG4gICAgdGFuUmFuZ2UsXHJcbiAgICB6ZXJvLFxyXG4gICAgemVyb1JhbmdlXHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5LCBpc051bWJlckFycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXggPSBhcnJheSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gaXNOdW1iZXJBcnJheShhcnJheSkgPyBNYXRoLm1heCguLi5hcnJheSkgOiBhcnJheVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWF4UmFuZ2UgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICBpZiAodG8gPCBhcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTnVtYmVyQXJyYXkoYXJyYXkpID8gTWF0aC5tYXgoLi4uYXJyYXkuc2xpY2UoZnJvbSwgdG8gKyAxKSkgOiBhcnJheVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcnJheSBpcyBsZXNzIHRoZW4gJ3RvJyBwYXJhbWV0ZXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNOdW1iZXJBcnJheSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWluID0gYXJyYXkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzTnVtYmVyQXJyYXkoYXJyYXkpID8gTWF0aC5taW4oLi4uYXJyYXkpIDogYXJyYXlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1pblJhbmdlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKHRvIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc051bWJlckFycmF5KGFycmF5KSA/IE1hdGgubWluKC4uLmFycmF5LnNsaWNlKGZyb20sIHRvICsgMSkpIDogYXJyYXlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGlzQXJyYXksIGlzTnVtYmVyQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG11bHRpcGx5UmFuZ2UgPSAoYXJyYXksIGZyb20sIHRvLCBtdWx0aXBsaWVyKSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICBpZiAodG8gPCBhcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICgoYXJyYXkuaW5kZXhPZihlbGVtZW50KSA+PSBmcm9tICYmIGFycmF5LmluZGV4T2YoZWxlbWVudCkgPCB0byArIDEpICYmIHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiICYmIChlbGVtZW50ID0gZWxlbWVudCAqIG11bHRpcGxpZXIpKSB8fCBlbGVtZW50KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcnJheSBpcyBsZXNzIHRoZW4gJ3RvJyBwYXJhbWV0ZXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IG11bHRpcGx5U2VsZiA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBpc051bWJlckFycmF5KGFycmF5KSA/IGFycmF5LnJlZHVjZSgocHJldmlvdXMsIG5leHQpID0+IHByZXZpb3VzICogbmV4dCkgOiBhcnJheVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbXVsdGlwbHkgPSAoYXJyYXksIG11bHRpcGxpZXIpID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAodHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBlbGVtZW50ICogbXVsdGlwbGllcikpIHx8IGVsZW1lbnQpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvaXNcIjtcblxuZXhwb3J0IGNvbnN0IHBvd1JhbmdlID0gKGFycmF5LCBmcm9tLCB0bywgcG93ZXIpID0+IHtcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgaWYgKHRvIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKChhcnJheS5pbmRleE9mKGVsZW1lbnQpID49IGZyb20gJiYgYXJyYXkuaW5kZXhPZihlbGVtZW50KSA8IHRvICsgMSkgJiYgdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBNYXRoLnBvdyhlbGVtZW50LCBwb3dlcikpKSB8fCBlbGVtZW50KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGxhc3QgaW5kZXggb2YgdGhlIGFycmF5IGlzIGxlc3MgdGhlbiAndG8nIHBhcmFtZXRlclwiKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcG93ID0gKGFycmF5LCBwb3dlcikgPT4ge1xuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiICYmIChlbGVtZW50ID0gTWF0aC5wb3coZWxlbWVudCwgcG93ZXIpKSkgfHwgZWxlbWVudClcbiAgICB9XG59IiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91bmRSYW5nZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIGlmICh0byA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKChhcnJheS5pbmRleE9mKGVsZW1lbnQpID49IGZyb20gJiYgYXJyYXkuaW5kZXhPZihlbGVtZW50KSA8IHRvICsgMSkgJiYgdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBNYXRoLnJvdW5kKGVsZW1lbnQpKSB8fCBlbGVtZW50KSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgcm91bmQgPSAoYXJyYXkpID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAodHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBNYXRoLnJvdW5kKGVsZW1lbnQpKSkgfHwgZWxlbWVudClcclxuICAgIH1cclxufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25SYW5nZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIGlmICh0byA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKChhcnJheS5pbmRleE9mKGVsZW1lbnQpID49IGZyb20gJiYgYXJyYXkuaW5kZXhPZihlbGVtZW50KSA8IHRvICsgMSkgJiYgdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPiAwICYmIChlbGVtZW50ID0gXCIrXCIpIHx8IGVsZW1lbnQgPCAwICYmIChlbGVtZW50ID0gXCItXCIpKSkgfHwgZWxlbWVudClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbiA9IChhcnJheSkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChlbGVtZW50ID0+ICh0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA+IDAgJiYgKGVsZW1lbnQgPSBcIitcIikgfHwgZWxlbWVudCA8IDAgJiYgKGVsZW1lbnQgPSBcIi1cIikpKSB8fCBlbGVtZW50KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XG5cbmV4cG9ydCBjb25zdCBzaW5SYW5nZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgaWYgKHRvIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKChhcnJheS5pbmRleE9mKGVsZW1lbnQpID49IGZyb20gJiYgYXJyYXkuaW5kZXhPZihlbGVtZW50KSA8IHRvICsgMSkgJiYgdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBNYXRoLnNpbihlbGVtZW50KSkpIHx8IGVsZW1lbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzaW4gPSBhcnJheSA9PiB7XG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAodHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBNYXRoLnNpbihlbGVtZW50KSkpIHx8IGVsZW1lbnQpXG4gICAgfVxufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xuXG5leHBvcnQgY29uc3Qgc3FydFJhbmdlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xuICAgICAgICBpZiAodG8gPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAoKGFycmF5LmluZGV4T2YoZWxlbWVudCkgPj0gZnJvbSAmJiBhcnJheS5pbmRleE9mKGVsZW1lbnQpIDwgdG8gKyAxKSAmJiB0eXBlb2YgZWxlbWVudCA9PT0gXCJudW1iZXJcIiAmJiAoZWxlbWVudCA9IE1hdGguc3FydChlbGVtZW50KSkpIHx8IGVsZW1lbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzcXJ0ID0gYXJyYXkgPT4ge1xuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiICYmIChlbGVtZW50ID0gTWF0aC5zcXJ0KGVsZW1lbnQpKSkgfHwgZWxlbWVudClcbiAgICB9XG59IiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2lzXCI7XG5cbmV4cG9ydCBjb25zdCB0YW5SYW5nZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgaWYgKHRvIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKChhcnJheS5pbmRleE9mKGVsZW1lbnQpID49IGZyb20gJiYgYXJyYXkuaW5kZXhPZihlbGVtZW50KSA8IHRvICsgMSkgJiYgdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBNYXRoLnRhbihlbGVtZW50KSkpIHx8IGVsZW1lbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0YW4gPSBhcnJheSA9PiB7XG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAodHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSBNYXRoLnRhbihlbGVtZW50KSkpIHx8IGVsZW1lbnQpXG4gICAgfVxufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9pc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHplcm9SYW5nZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIGlmICh0byA8IGFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkubWFwKGVsZW1lbnQgPT4gKChhcnJheS5pbmRleE9mKGVsZW1lbnQpID49IGZyb20gJiYgYXJyYXkuaW5kZXhPZihlbGVtZW50KSA8IHRvICsgMSkgJiYgdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSAwKSkgfHwgZWxlbWVudClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgemVybyA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZWxlbWVudCA9PiAodHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgKGVsZW1lbnQgPSAwKSkgfHwgZWxlbWVudClcclxuICAgIH1cclxufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9pc1wiXHJcblxyXG5leHBvcnQgY29uc3QgbWVyZ2UgPSAoYXJyYXksIC4uLm1lcmdlZEFycmF5cykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbWVyZ2VkQXJyYXkgb2YgbWVyZ2VkQXJyYXlzKSB7XHJcbiAgICAgICAgICAgIG1lcmdlZEFycmF5Lmxlbmd0aCA+IGFycmF5Lmxlbmd0aCA/IGFycmF5ID0gbWVyZ2VFbGVtZW50cyhtZXJnZWRBcnJheSwgYXJyYXkpIDogYXJyYXkgPSBtZXJnZUVsZW1lbnRzKGFycmF5LCBtZXJnZWRBcnJheSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1lcmdlRWxlbWVudHMgPSAoYXJyYXksIG1lcmdlZEFycmF5KSA9PiB7XHJcbiAgICByZXR1cm4gYXJyYXkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoIW1lcmdlZEFycmF5W2luZGV4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgbWVyZ2VkQXJyYXlbaW5kZXhdXHJcbiAgICB9KVxyXG59IiwiZXhwb3J0IGNvbnN0IGhvd01hbnlOdWxsID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgPT09IG51bGwpLmxlbmd0aFxyXG59XHJcbmV4cG9ydCBjb25zdCBob3dNYW55SW5maW5pdHkgPSBhcnJheSA9PiB7XHJcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudCA9PT0gSW5maW5pdHkpLmxlbmd0aFxyXG59XHJcbmV4cG9ydCBjb25zdCBob3dNYW55Qm9vbGVhbiA9IGFycmF5ID0+IHtcclxuICAgIHJldHVybiBhcnJheS5maWx0ZXIoZWxlbWVudCA9PiB0eXBlb2YgZWxlbWVudCA9PT0gXCJib29sZWFuXCIpLmxlbmd0aFxyXG59XHJcbmV4cG9ydCBjb25zdCBob3dNYW55TnVtYmVyID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiKS5sZW5ndGhcclxufVxyXG5leHBvcnQgY29uc3QgaG93TWFueVN5bWJvbCA9IGFycmF5ID0+IHtcclxuICAgIHJldHVybiBhcnJheS5maWx0ZXIoZWxlbWVudCA9PiB0eXBlb2YgZWxlbWVudCA9PT0gXCJzeW1ib2xcIikubGVuZ3RoXHJcbn1cclxuZXhwb3J0IGNvbnN0IGhvd01hbnlTdHJpbmcgPSBhcnJheSA9PiB7XHJcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGVsZW1lbnQgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpLmxlbmd0aFxyXG59XHJcbmV4cG9ydCBjb25zdCBob3dNYW55T2JqZWN0ID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IHR5cGVvZiBlbGVtZW50ID09PSBcIm9iamVjdFwiICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudCAhPT0gdW5kZWZpbmVkKS5sZW5ndGhcclxufVxyXG5leHBvcnQgY29uc3QgaG93TWFueUFycmF5ID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IEFycmF5LmlzQXJyYXkoZWxlbWVudCkpLmxlbmd0aFxyXG59XHJcbmV4cG9ydCBjb25zdCBob3dNYW55T2RkID0gYXJyYXkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IHR5cGVvZiBlbGVtZW50ID09PSBcIm51bWJlclwiICYmIGVsZW1lbnQgJSAyID09PSAxKS5sZW5ndGhcclxufVxyXG5leHBvcnQgY29uc3QgaG93TWFueVBhaXIgPSBhcnJheSA9PiB7XHJcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGVsZW1lbnQgPT4gdHlwZW9mIGVsZW1lbnQgPT09IFwibnVtYmVyXCIgJiYgZWxlbWVudCAlIDIgPT09IDApLmxlbmd0aFxyXG59IiwiaW1wb3J0IHsgaGFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2hhc1wiXHJcbmltcG9ydCB7IGlzQXJyYXksIGlzT2JqZWN0QXJyYXkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9pc1wiXHJcblxyXG5leHBvcnQgY29uc3Qgb21pdCA9IChhcnJheSwgZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKCFoYXNFbGVtZW50KGFycmF5LCBlbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZWxlbWVudCArIFwiIGRvZXMgbm90IGV4aXN0XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc09iamVjdEFycmF5KGFycmF5KSA/IGZpbHRlckJ5T2JqZWN0KGFycmF5LCBlbGVtZW50KSA6IGZpbHRlckJ5VmFsdWUoYXJyYXksIGVsZW1lbnQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvbWl0QXJyYXkgPSAoYXJyYXksIG9taXR0ZWRBcnJheSkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpICYmIGlzQXJyYXkob21pdHRlZEFycmF5KSkge1xyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2Ygb21pdHRlZEFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzRWxlbWVudChhcnJheSwgZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlbGVtZW50ICsgXCIgZG9lcyBub3QgZXhpc3RcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc09iamVjdEFycmF5KGFycmF5KSA/IGFycmF5ID0gZmlsdGVyQnlPYmplY3QoYXJyYXksIGVsZW1lbnQpIDogYXJyYXkgPSBmaWx0ZXJCeVZhbHVlKGFycmF5LCBlbGVtZW50KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG9taXRNYW55ID0gKGFycmF5LCAuLi5lbGVtZW50cykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgICAgICBpZiAoIWhhc0VsZW1lbnQoYXJyYXksIGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZWxlbWVudCArIFwiIGRvZXMgbm90IGV4aXN0XCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNPYmplY3RBcnJheShhcnJheSkgPyBhcnJheSA9IGZpbHRlckJ5T2JqZWN0KGFycmF5LCBlbGVtZW50KSA6IGFycmF5ID0gZmlsdGVyQnlWYWx1ZShhcnJheSwgZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmaWx0ZXJCeVZhbHVlID0gKGFycmF5LCB2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQudG9Mb3dlckNhc2UoKS50cmltKCkgIT09IHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50ICE9PSB2YWx1ZVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZmlsdGVyQnlPYmplY3QgPSAoYXJyYXksIGtleSkgPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcihlbGVtZW50ID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IE9iamVjdC5rZXlzKGVsZW1lbnQpWzBdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpICE9PSBrZXkudG9Mb3dlckNhc2UoKS50cmltKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBrZXlcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaXNcIlxyXG5pbXBvcnQgeyBpc1ByaW1pdGl2ZUFycmF5IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGVyUmFuZ2VEZXNjID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKHRvIDwgYXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1ByaW1pdGl2ZUFycmF5KGFycmF5KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkQXJyYXkgPSBhcnJheS5zbGljZShmcm9tLCB0byArIDEpLnNvcnQoKGEsIGIpID0+IC0xKVxyXG4gICAgICAgICAgICAgICAgbGV0IHBvaW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSBmcm9tOyBpbmRleCA8IHRvICsgMTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2luZGV4XSA9IHNvcnRlZEFycmF5W3BvaW50ZXJdXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGxhc3QgaW5kZXggb2YgdGhlIGFycmF5IGlzIGxlc3MgdGhlbiAndG8nIHBhcmFtZXRlclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGVyRGVzYyA9IGFycmF5ID0+IHtcclxuICAgIGlmIChpc0FycmF5KGFycmF5KSkge1xyXG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZUFycmF5KGFycmF5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4gLTEpXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbGFzdCBpbmRleCBvZiB0aGUgYXJyYXkgaXMgbGVzcyB0aGVuICd0bycgcGFyYW1ldGVyXCIpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvaXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcGxhY2UgPSAoYXJyYXksIGVsZW1lbnQsIHJlcGxhY2VyKSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKHZhbHVlID0+ICh2YWx1ZSA9PT0gZWxlbWVudCAmJiAodmFsdWUgPSByZXBsYWNlcikpIHx8IHZhbHVlKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCByZXBsYWNlTWFueSA9IChhcnJheSwgZWxlbWVudHMsIHJlcGxhY2VycykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpICYmIGlzQXJyYXkoZWxlbWVudHMpICYmIGlzQXJyYXkocmVwbGFjZXJzKSkge1xyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcclxuICAgICAgICAgICAgYXJyYXkgPSBhcnJheS5tYXAoKHZhbHVlKSA9PiAodmFsdWUgPT09IGVsZW1lbnQgJiYgKHZhbHVlID0gcmVwbGFjZXJzW2VsZW1lbnRzLmluZGV4T2YoZWxlbWVudCldKSkgfHwgdmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2lzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2FtZSA9ICguLi5hcnJheXMpID0+IHtcclxuICAgIGlmIChhcnJheXMubGVuZ3RoID09PSAxKSByZXR1cm4gYXJyYXlzWzBdXHJcbiAgICBjb25zdCBhcmdzID0gQXJyYXkuZnJvbShbLi4uYXJyYXlzXSlcclxuICAgIGxldCBpbml0QXJyYXkgPSBhcmdzWzBdO1xyXG4gICAgbGV0IHNhbWVFbGVtZW50cyA9IG5ldyBTZXQoKTtcclxuICAgIGFyZ3MuZm9yRWFjaChhcnJheSA9PiBpc0FycmF5KGFycmF5KSAmJiBhcmdzLmluZGV4T2YoYXJyYXkpICE9PSAwICYmXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaCh2YWx1ZSA9PiBpbml0QXJyYXkuaW5jbHVkZXModmFsdWUpICYmIHNhbWVFbGVtZW50cy5hZGQodmFsdWUpKSlcclxuICAgIHJldHVybiBBcnJheS5mcm9tKHNhbWVFbGVtZW50cylcclxufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9pc1wiXHJcblxyXG5leHBvcnQgY29uc3Qgc3dpdGNoQnlJbmRleCA9IChhcnJheSwgc3dpdGNoZWRJbmRleCwgc3dpdGNoZXJJbmRleCkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgaWYgKCEoc3dpdGNoZWRJbmRleCA8IGFycmF5Lmxlbmd0aCAmJiBzd2l0Y2hlckluZGV4IDwgYXJyYXkubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmUgb3IgYm90aCBvZiB0aGUgaW5kZXhlcyBhcmUgYmlnIHRoZW4gdGhlIGxlbmd0aCBvZiB0aGUgYXJyYXlcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN3aXRjaGVyID0gYXJyYXlbc3dpdGNoZWRJbmRleF07XHJcbiAgICAgICAgYXJyYXlbc3dpdGNoZWRJbmRleF0gPSBhcnJheVtzd2l0Y2hlckluZGV4XTtcclxuICAgICAgICBhcnJheVtzd2l0Y2hlckluZGV4XSA9IHN3aXRjaGVyO1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3Qgc3dpdGNoQnlWYWx1ZSA9IChhcnJheSwgc3dpdGNoZWRWYWx1ZSwgc3dpdGNoZXJWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkoYXJyYXkpKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKHN3aXRjaGVkVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHN3aXRjaGVySW5kZXggPSBhcnJheS5pbmRleE9mKHN3aXRjaGVyVmFsdWUpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEgfHwgc3dpdGNoZXJJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25lIG9yIGJvdGggb2YgdGhlIHZhbHVlcyBkbyBub3QgZXhpc3QgaW4gdGhlIGFycmF5XCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzd2l0Y2hCeUluZGV4KGFycmF5LCBpbmRleCwgc3dpdGNoZXJJbmRleClcclxuICAgIH1cclxufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9pc1wiXHJcblxyXG5leHBvcnQgY29uc3QgdG9VcHBlckNhc2UgPSBhcnJheSA9PiB7XHJcbiAgICBpZiAoaXNBcnJheShhcnJheSkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkubWFwKHZhbHVlID0+ICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUudG9VcHBlckNhc2UoKSkgfHwgdmFsdWUpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9