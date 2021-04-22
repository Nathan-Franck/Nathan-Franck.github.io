/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./firebase-messaging-sw.ts":
/*!**********************************!*\
  !*** ./firebase-messaging-sw.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar compat_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/compat'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\ncompat_1[\"default\"].initializeApp({\r\n    apiKey: \"AIzaSyBhbxJ2LCX0iD298QVVsNHGbfJ7v3N-ajk\",\r\n    authDomain: \"chill-point.firebaseapp.com\",\r\n    projectId: \"chill-point\",\r\n    storageBucket: \"chill-point.appspot.com\",\r\n    messagingSenderId: \"399143735956\",\r\n    appId: \"1:399143735956:web:10eb8083ae993ccf99da81\"\r\n});\r\ncompat_1[\"default\"].messaging().onBackgroundMessage(function (payload) {\r\n    console.log('[firebase-messaging-sw.js] Received background message ', payload);\r\n    // Customize notification here\r\n    var notificationTitle = 'Background Message Title';\r\n    var notificationOptions = {\r\n        body: 'Background Message body.',\r\n        icon: '/firebase-logo.png'\r\n    };\r\n    self.registration.showNotification(notificationTitle, notificationOptions);\r\n});\r\n\n\n//# sourceURL=webpack://investment-app/./firebase-messaging-sw.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./firebase-messaging-sw.ts");
/******/ 	
/******/ })()
;