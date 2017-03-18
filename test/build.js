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
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):n("undefined"!=typeof exports?exports:e)}(this,function(e){function n(){function e(e){if(void 0===o[e])throw new Error("ConvertTable: invalid name "+e);return o[e]}function n(e,n){if("object"!=typeof n||"string"!=typeof n.match)throw new Error("ConvertTable: invalid conversion object");o[e]=n}function r(n){var r,t={};for(var u in o)if(void 0===i[u]&&(i[u]=new RegExp("(\\d+)?("+o[u].match+")?")),r=i[u].exec(n),r[1]&&(t.value=parseFloat(r[1])),r[2])return t.measure=u,t.conversion=e(u),t;return t}function t(n,r,t){var o=e(r),i=o[t];if("function"!=typeof i)throw new Error("ConvertTable: invalid conversion function [from "+r+" to "+t+"]");return i(n)}var o={},i={};return regexp=new RegExp("(\\d+)?(.+)?"),{get:e,set:n,match:r,convert:t}}function r(){function e(e){if(void 0===e)return i;if("number"!=typeof e)throw new Error('Convert: argument passed to function "value" is not a number');return i=e,this}function n(e){if(void 0===e)return u;if("string"!=typeof num)throw new TypeError('Convert: argument passed to function "measure" is not a string');var n=o.match(e);if(!n.measure)throw new Error('Convert: argument passed to function "measure" is not a valid measure string');u=n.measure}function r(e){if("string"!=typeof e)throw new TypeError("Convert: argument must be a string");var n=o.match(e);if(!n.measure)throw new Error("Convert: conversion "+e+" wasn' matched in conversion table");return o.convert(i,u,n.measure)}var t=Array.prototype.slice.call(arguments),i=0,u=null;return function(){if(t.length){var e=o.match(t[0]);e.value&&(i=e.value),e.measure&&(u=e.measure)}}(),{value:e,measure:n,to:r}}function t(e){return"table"==e.toLowerCase()?o:new r(e)}var o=new n;return o.set("celsius",{match:"°C|celsius",fahrenheit:function(e){return 1.8*e+32},kelvin:function(e){return e+273.15}}),o.set("fahrenheit",{match:"°F|fahrenheit",celsius:function(e){return(e-32)/1.8},kelvin:function(e){return(e+459.67)/1.8}}),o.set("kelvin",{match:"°K|kelvin",celsius:function(e){return(e-32)/1.8},fahrenheit:function(e){return 1.8*e-459.67}}),e.convert=t,t});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const convert = __webpack_require__(0)

var
celsius    = '15°C',
temp       = convert(celsius),
kelvin     = temp.to('°K'),
fahrenheit = temp.to('°F')

document.body.innerHTML = temp.value() + '&deg;C = ' + kelvin + '&deg;K' + ' = ' + fahrenheit + '&deg;F'

/***/ })
/******/ ]);