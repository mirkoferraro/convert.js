/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e,n){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(e){return n(e)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):n("undefined"!=typeof exports?exports:e)}(this,function(e){function n(){function e(e){if(void 0===o[e])throw new Error("ConvertTable: invalid name "+e);return o[e]}function n(e,n){if("object"!=typeof n||"string"!=typeof n.match)throw new Error("ConvertTable: invalid conversion object");o[e]=n}function r(n){var r,t={};for(var i in o)if(void 0===u[i]&&(u[i]=new RegExp("(\\d+)?("+o[i].match+")?")),r=u[i].exec(n),r[1]&&(t.value=parseFloat(r[1])),r[2])return t.measure=i,t.conversion=e(i),t;return t}function t(n,r,t){var o=e(r),u=o[t];if("function"!=typeof u)throw new Error("ConvertTable: invalid conversion function [from "+r+" to "+t+"]");return u(n)}var o={},u={};return regexp=new RegExp("(\\d+)?(.+)?"),{get:e,set:n,match:r,convert:t}}function r(){function e(e){if(void 0===e)return u;if("number"!=typeof e)throw new Error('Convert: argument passed to function "value" is not a number');return u=e,this}function n(e){if(void 0===e)return i;if("string"!=typeof e)throw new TypeError('Convert: argument passed to function "measure" is not a string');var n=o.match(e);if(!n.measure)throw new Error('Convert: argument passed to function "measure" is not a valid measure string');return i=n.measure,this}function r(e){if("string"!=typeof e)throw new TypeError("Convert: argument must be a string");var n=o.match(e);if(!n.measure)throw new Error("Convert: conversion "+e+" wasn' matched in conversion table");return o.convert(u,i,n.measure)}var t=Array.prototype.slice.call(arguments),u=0,i=null;return function(){if(t.length){var e=o.match(t[0]);e.value&&(u=e.value),e.measure&&(i=e.measure)}}(),{value:e,measure:n,to:r}}function t(e){return"table"==e.toLowerCase()?o:new r(e)}var o=new n;return o.set("celsius",{match:"°C|celsius",fahrenheit:function(e){return 1.8*e+32},kelvin:function(e){return e+273.15}}),o.set("fahrenheit",{match:"°F|fahrenheit",celsius:function(e){return(e-32)/1.8},kelvin:function(e){return(e+459.67)/1.8}}),o.set("kelvin",{match:"°K|kelvin",celsius:function(e){return(e-32)/1.8},fahrenheit:function(e){return 1.8*e-459.67}}),o.set("grams",{match:"g|grams",pounds:function(e){return.0022046*e},ounces:function(e){return.035274*e}}),o.set("pounds",{match:"lb|pounds",grams:function(e){return e/.0022046},ounces:function(e){return e/.0625}}),o.set("ounces",{match:"oz|ounces",grams:function(e){return e/.035274},pounds:function(e){return.0625*e}}),o.set("metres",{match:"m|metres",yards:function(e){return 1.0936*e},feet:function(e){return 3.2808*e}}),o.set("yards",{match:"yd|yards",metres:function(e){return e/1.0936},feet:function(e){return 3*e}}),o.set("feet",{match:"ft|feet",metres:function(e){return e/3.2808},yards:function(e){return e/3}}),e.convert=t,t});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const convert = __webpack_require__(0)

var
celsius    = '15°C',
temp       = convert(celsius),
kelvin     = temp.to('°K'),
fahrenheit = temp.to('°F')

document.body.innerHTML += '<p>' + temp.value() + '&deg;C = ' + kelvin + '&deg;K' + ' = ' + fahrenheit + '&deg;F' + '</p>'

var
grams  = '35',
temp   = convert(grams).measure('g'),
pounds = temp.to('lb'),
ounces = temp.to('oz')

document.body.innerHTML += '<p>' + temp.value() + 'g = ' + pounds + 'lb' + ' = ' + ounces + 'oz' + '</p>'


convert('table').set('custom1', {
    match: 'c1|custom1',
    custom2: function(val) {
        return (val + 2) * 5
    }
})

convert('table').set('custom2', {
    match: 'c2|custom2',
    custom1: function(val) {
        return val / 5 - 2
    }
})

var
c1   = '35c1',
temp = convert(c1),
c2   = temp.to('c2')

document.body.innerHTML += '<p>' + temp.value() + '(c1) = ' + c2 + '(c2)</p>'

var
c2   = '185c2',
temp = convert(c2),
c1   = temp.to('c1')

document.body.innerHTML += '<p>' + temp.value() + '(c2) = ' + c1 + '(c1)</p>'

/***/ })
/******/ ]);