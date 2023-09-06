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

/***/ "./src/scripts/cell.js":
/*!*****************************!*\
  !*** ./src/scripts/cell.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cell)\n/* harmony export */ });\nclass Cell {\n  constructor() {\n    this.isHit = false;\n    this.ship = null;\n  }\n\n  hit() {\n    this.isHit = true;\n  }\n\n  assign(ship) {\n    this.ship = ship;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/cell.js?");

/***/ }),

/***/ "./src/scripts/gameBoard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./src/scripts/cell.js\");\n\n\nclass GameBoard {\n  constructor() {\n    this.board = [];\n    this.fleet = [];\n  }\n\n  getBoard() {\n    return this.board;\n  }\n\n  getFleet() {\n    return this.fleet;\n  }\n\n  createBoard() {\n    for (let i = 0; i < 10; i += 1) {\n      this.board[i] = [];\n      for (let j = 0; j < 10; j += 1) {\n        this.board[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      }\n    }\n  }\n\n  placeShip([x, y], ship, isPlacedHorizontally = true) {\n    const start = isPlacedHorizontally\n      ? x - Math.floor(ship.length / 2)\n      : y - Math.floor(ship.length / 2);\n    const end = start + ship.length;\n    const bowCoordinates = isPlacedHorizontally\n      ? { x: end - 1, y }\n      : { x, y: end - 1 };\n\n    if (ship.hasPositioned) return;\n    if (start < 0 || end > 9) return;\n    for (let i = start; i < end; i += 1) {\n      if (isPlacedHorizontally && this.board[i][y].ship !== null) return;\n      if (!isPlacedHorizontally && this.board[x][i].ship !== null) return;\n    }\n\n    for (let i = start; i < end; i += 1) {\n      if (isPlacedHorizontally) this.board[i][y].assign(ship);\n      if (!isPlacedHorizontally) this.board[x][i].assign(ship);\n    }\n    this.fleet.push(ship);\n    ship.isPositioned(bowCoordinates, isPlacedHorizontally);\n  }\n\n  receiveAttack([x, y], cb) {\n    this.board[x][y].hit();\n    if (this.board[x][y].ship !== null) {\n      this.board[x][y].ship.hit();\n    }\n    cb([x, y]);\n  }\n\n  isFleetOperational() {\n    return this.fleet.some((ship) => ship.hasSunk === false);\n  }\n\n  allUnhitCoordinates() {\n    const unhitCoordinates = [];\n    for (let i = 0; i < 10; i += 1) {\n      for (let j = 0; j < 10; j += 1) {\n        if (!this.board[i][j].isHit) unhitCoordinates.push([i, j]);\n      }\n    }\n    return unhitCoordinates;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/scripts/gameBoard.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/gameBoard.js");
/******/ 	
/******/ })()
;