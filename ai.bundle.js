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

/***/ "./src/scripts/player/ai.js":
/*!**********************************!*\
  !*** ./src/scripts/player/ai.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AI)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player/player.js\");\n\n\nclass AI extends _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(difficulty = 'Easy') {\n    super(`AI ${difficulty}`);\n    this.difficulty = difficulty;\n  }\n\n  chooseAttackCoordinates(player) {\n    if (this.difficulty === 'Easy') {\n      const availableAttackCoordinates = player.board.allUnhitCoordinates();\n      return availableAttackCoordinates[\n        Math.floor(Math.random() * availableAttackCoordinates.length)\n      ];\n    }\n    // Normal Placeholder, same as easy\n    if (this.difficulty === 'Normal') {\n      const availableAttackCoordinates = player.board.allUnhitCoordinates();\n      return availableAttackCoordinates[\n        Math.floor(Math.random() * availableAttackCoordinates.length)\n      ];\n    }\n    if (this.difficulty === 'Cheat') {\n      const availableAttackCoordinates = player.board.allShipCoordinates();\n      return availableAttackCoordinates[\n        Math.floor(Math.random() * availableAttackCoordinates.length)\n      ];\n    }\n    return null;\n  }\n\n  static arrangeShipsOnBoard(data) {\n    const currentAIShips = [];\n    const imaginaryBoard = [];\n\n    data.forEach((ship) => {\n      let x = Math.floor(Math.random() * 10);\n      let y = Math.floor(Math.random() * 10);\n      let horizontal = Boolean(Math.round(Math.random()));\n      let start = horizontal\n        ? x - Math.floor(ship.length / 2)\n        : y - Math.floor(ship.length / 2);\n      let end = start + ship.length - 1;\n\n      for (let i = start; i <= end; i += 1) {\n        const array = horizontal ? [i, y] : [x, i];\n        if (\n          imaginaryBoard.some((cell) => cell[0] === array[0] && cell[1] === array[1])\n            || start < 0\n            || end > 9\n        ) {\n          x = Math.floor(Math.random() * 10);\n          y = Math.floor(Math.random() * 10);\n          horizontal = Boolean(Math.round(Math.random()));\n          start = horizontal\n            ? x - Math.floor(ship.length / 2)\n            : y - Math.floor(ship.length / 2);\n          end = start + ship.length - 1;\n          i = start;\n          continue;\n        }\n      }\n\n      for (let i = start; i <= end; i += 1) {\n        const array = horizontal ? [i, y] : [x, i];\n        imaginaryBoard.push(array);\n      }\n\n      currentAIShips.push({\n        type: ship.type,\n        length: ship.length,\n        insertCoordinates: [x, y],\n        horizontal,\n      });\n    });\n\n    return currentAIShips;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/player/ai.js?");

/***/ }),

/***/ "./src/scripts/player/player.js":
/*!**************************************!*\
  !*** ./src/scripts/player/player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n  constructor(name = 'Player') {\n    this.name = name;\n    this.board = null;\n  }\n\n  assignBoard(gameBoard) {\n    this.board = gameBoard;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/player/player.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/player/ai.js");
/******/ 	
/******/ })()
;