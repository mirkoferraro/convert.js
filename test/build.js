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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(n,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(n){return e(n)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e("undefined"!=typeof exports?exports:n)}(this,function(n){function e(){function n(n){if(void 0===o[n])throw new Error("ConvertTable: invalid name "+n);return o[n]}function e(n,e){if("object"!=typeof e||"string"!=typeof e.match)throw new Error("ConvertTable: invalid conversion object");o[n]=e}function r(e){var r,t={};for(var i in o)if(void 0===u[i]&&(u[i]=new RegExp("(\\d+)?("+o[i].match+")?")),r=u[i].exec(e),r[1]&&(t.value=parseFloat(r[1])),r[2])return t.measure=i,t.conversion=n(i),t;return t}function t(e,r,t){var o=n(r),u=o[t];if("function"!=typeof u)throw new Error("ConvertTable: invalid conversion function [from "+r+" to "+t+"]");return u(e)}var o={},u={};return regexp=new RegExp("(\\d+)?(.+)?"),{get:n,set:e,match:r,convert:t}}function r(){function n(n){if(void 0===n)return u;if("number"!=typeof n)throw new Error('Convert: argument passed to function "value" is not a number');return u=n,this}function e(n){if(void 0===n)return i;if("string"!=typeof n)throw new TypeError('Convert: argument passed to function "measure" is not a string');var e=o.match(n);if(!e.measure)throw new Error('Convert: argument passed to function "measure" is not a valid measure string');return i=e.measure,this}function r(n){if("string"!=typeof n)throw new TypeError("Convert: argument must be a string");var e=o.match(n);if(!e.measure)throw new Error("Convert: conversion "+n+" wasn' matched in conversion table");return o.convert(u,i,e.measure)}var t=Array.prototype.slice.call(arguments),u=0,i=null;return function(){if(t.length){var n=o.match(t[0]);n.value&&(u=n.value),n.measure&&(i=n.measure)}}(),{value:n,measure:e,to:r}}function t(n){return"table"==n.toLowerCase()?o:new r(n)}var o=new e;return o.set("celsius",{match:"°C|celsius",fahrenheit:function(n){return 1.8*n+32},kelvin:function(n){return n+273.15}}),o.set("fahrenheit",{match:"°F|fahrenheit",celsius:function(n){return(n-32)/1.8},kelvin:function(n){return(n+459.67)/1.8}}),o.set("kelvin",{match:"°K|kelvin",celsius:function(n){return(n-32)/1.8},fahrenheit:function(n){return 1.8*n-459.67}}),o.set("grams",{match:"g|grams",pounds:function(n){return.0022046*n},ounces:function(n){return.035274*n}}),o.set("pounds",{match:"lb|pounds",grams:function(n){return n/.0022046},ounces:function(n){return n/.0625}}),o.set("ounces",{match:"oz|ounces",grams:function(n){return n/.035274},pounds:function(n){return.0625*n}}),n.convert=t,t});

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

/***/ })
/******/ ]);