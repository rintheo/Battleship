/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/cell.js":
/*!*****************************!*\
  !*** ./src/scripts/cell.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cell)
/* harmony export */ });
class Cell {
  constructor() {
    this.isHit = false;
    this.justGotHit = false;
    this.ship = null;
  }

  hit() {
    this.isHit = true;
    this.justGotHit = true;
  }

  resetJustGotHit() {
    this.justGotHit = false;
  }

  assign(ship) {
    this.ship = ship;
  }
}


/***/ }),

/***/ "./src/scripts/gameBoard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/scripts/cell.js");


class GameBoard {
  constructor() {
    this.board = [];
    this.fleet = [];
  }

  getBoard() {
    return this.board;
  }

  getFleet() {
    return this.fleet;
  }

  emptyFleet() {
    this.fleet.length = 0;
  }

  createBoard() {
    for (let i = 0; i < 10; i += 1) {
      this.board[i] = [];
      for (let j = 0; j < 10; j += 1) {
        this.board[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"]();
      }
    }
  }

  placeShip([x, y], ship, isPlacedHorizontally = true) {
    const start = isPlacedHorizontally
      ? x - Math.floor(ship.length / 2)
      : y - Math.floor(ship.length / 2);
    const end = start + ship.length - 1;
    const bowCoordinates = isPlacedHorizontally
      ? { x: end, y }
      : { x, y: end };

    if (ship.hasPositioned) return;
    if (start < 0 || end > 9) return;
    for (let i = start; i <= end; i += 1) {
      if (isPlacedHorizontally && this.board[i][y].ship !== null) return;
      if (!isPlacedHorizontally && this.board[x][i].ship !== null) return;
    }

    for (let i = start; i <= end; i += 1) {
      if (isPlacedHorizontally) this.board[i][y].assign(ship);
      if (!isPlacedHorizontally) this.board[x][i].assign(ship);
    }
    this.fleet.push(ship);
    ship.isPositioned(bowCoordinates, isPlacedHorizontally);
  }

  resetCellsJustGotHit() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        this.board[i][j].resetJustGotHit();
        if (this.board[i][j].ship !== null) {
          this.board[i][j].ship.resetJustSunk();
        }
      }
    }
  }

  async receiveAttack([x, y]) {
    this.resetCellsJustGotHit();
    this.board[x][y].hit();
    if (this.board[x][y].ship !== null) {
      this.board[x][y].ship.hit();
    }
  }

  isFleetOperational() {
    return this.fleet.some((ship) => ship.hasSunk === false);
  }

  allUnhitCoordinates() {
    const unhitCoordinates = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (!this.board[i][j].isHit) unhitCoordinates.push([i, j]);
      }
    }
    return unhitCoordinates;
  }

  allShipCoordinates() {
    const shipCoordinates = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (this.board[i][j].ship !== null) {
          if (!this.board[i][j].isHit) {
            shipCoordinates.push([i, j]);
          }
        }
      }
    }
    return shipCoordinates;
  }
}


/***/ }),

/***/ "./src/scripts/player/ai.js":
/*!**********************************!*\
  !*** ./src/scripts/player/ai.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AI)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/player/player.js");


class AI extends _player__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(difficulty = 'Easy') {
    super(`AI ${difficulty}`);
    this.difficulty = difficulty;
  }

  chooseAttackCoordinates(player) {
    if (this.difficulty === 'Easy') {
      const availableAttackCoordinates = player.board.allUnhitCoordinates();
      return availableAttackCoordinates[
        Math.floor(Math.random() * availableAttackCoordinates.length)
      ];
    }
    // Normal Placeholder, same as easy
    if (this.difficulty === 'Normal') {
      const availableAttackCoordinates = player.board.allUnhitCoordinates();
      return availableAttackCoordinates[
        Math.floor(Math.random() * availableAttackCoordinates.length)
      ];
    }
    if (this.difficulty === 'Cheat') {
      const availableAttackCoordinates = player.board.allShipCoordinates();
      return availableAttackCoordinates[
        Math.floor(Math.random() * availableAttackCoordinates.length)
      ];
    }
    return null;
  }

  static arrangeShipsOnBoard(data) {
    const currentAIShips = [];
    const imaginaryBoard = [];

    data.forEach((ship) => {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let horizontal = Boolean(Math.round(Math.random()));
      let start = horizontal
        ? x - Math.floor(ship.length / 2)
        : y - Math.floor(ship.length / 2);
      let end = start + ship.length - 1;

      for (let i = start; i <= end; i += 1) {
        const array = horizontal ? [i, y] : [x, i];
        if (
          imaginaryBoard.some((cell) => cell[0] === array[0] && cell[1] === array[1])
            || start < 0
            || end > 9
        ) {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
          horizontal = Boolean(Math.round(Math.random()));
          start = horizontal
            ? x - Math.floor(ship.length / 2)
            : y - Math.floor(ship.length / 2);
          end = start + ship.length - 1;
          i = start;
          continue;
        }
      }

      for (let i = start; i <= end; i += 1) {
        const array = horizontal ? [i, y] : [x, i];
        imaginaryBoard.push(array);
      }

      currentAIShips.push({
        type: ship.type,
        length: ship.length,
        insertCoordinates: [x, y],
        horizontal,
      });
    });

    return currentAIShips;
  }
}


/***/ }),

/***/ "./src/scripts/player/player.js":
/*!**************************************!*\
  !*** ./src/scripts/player/player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
  constructor(name = 'Player') {
    this.name = name;
    this.board = null;
  }

  assignBoard(gameBoard) {
    this.board = gameBoard;
  }
}


/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, type) {
    this.length = length;
    this.hits = 0;
    this.hasPositioned = false;
    this.hasSunk = false;
    this.justSunk = false;
    this.type = type;
    this.bowCoordinates = null;
    this.isHorizontal = null;
  }

  hit() {
    this.hits += 1;
    if (this.length === this.hits) this.isSunk();
  }

  isSunk() {
    this.hasSunk = true;
    this.justSunk = true;
  }

  resetJustSunk() {
    this.justSunk = false;
  }

  isPositioned(bowCoordinates, isHorizontal) {
    this.hasPositioned = true;
    this.bowCoordinates = bowCoordinates;
    this.isHorizontal = isHorizontal;
  }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePlayers: () => (/* binding */ generatePlayers),
/* harmony export */   placePlayerShips: () => (/* binding */ placePlayerShips),
/* harmony export */   players: () => (/* binding */ players)
/* harmony export */ });
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/player */ "./src/scripts/player/player.js");
/* harmony import */ var _player_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/ai */ "./src/scripts/player/ai.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameBoard */ "./src/scripts/gameBoard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.js");





const players = [];

const generatePlayers = (inputPlayers) => {
  players.length = 0;

  inputPlayers.forEach((thisPlayer) => {
    const player = thisPlayer.type === 'human' ? new _player_player__WEBPACK_IMPORTED_MODULE_0__["default"](thisPlayer.name)
      : thisPlayer.type === 'AI' ? new _player_ai__WEBPACK_IMPORTED_MODULE_1__["default"](thisPlayer.difficulty)
        : null;

    players.push(player);

    const board = new _gameBoard__WEBPACK_IMPORTED_MODULE_2__["default"]();
    board.createBoard();
    player.assignBoard(board);
  });
};

const placePlayerShips = (player, ships) => {
  ships.forEach((ship) => {
    player
      .board
      .placeShip(ship.insertCoordinates, new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](ship.length, ship.type), ship.horizontal);
  });
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkIwQjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QiwrQkFBK0IsNkNBQUk7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixVQUFVOztBQUVWO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25HOEI7O0FBRWYsaUJBQWlCLCtDQUFNO0FBQ3RDO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixVQUFVO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNSO0FBQ087QUFDVjs7QUFFbkI7O0FBRUE7QUFDUDs7QUFFQTtBQUNBLHFEQUFxRCxzREFBTTtBQUMzRCx1Q0FBdUMsa0RBQUU7QUFDekM7O0FBRUE7O0FBRUEsc0JBQXNCLGtEQUFTO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsNkNBQUk7QUFDakQsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2NlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcGxheWVyL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0hpdCA9IGZhbHNlO1xuICAgIHRoaXMuanVzdEdvdEhpdCA9IGZhbHNlO1xuICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5pc0hpdCA9IHRydWU7XG4gICAgdGhpcy5qdXN0R290SGl0ID0gdHJ1ZTtcbiAgfVxuXG4gIHJlc2V0SnVzdEdvdEhpdCgpIHtcbiAgICB0aGlzLmp1c3RHb3RIaXQgPSBmYWxzZTtcbiAgfVxuXG4gIGFzc2lnbihzaGlwKSB7XG4gICAgdGhpcy5zaGlwID0gc2hpcDtcbiAgfVxufVxuIiwiaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMuZmxlZXQgPSBbXTtcbiAgfVxuXG4gIGdldEJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG5cbiAgZ2V0RmxlZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxlZXQ7XG4gIH1cblxuICBlbXB0eUZsZWV0KCkge1xuICAgIHRoaXMuZmxlZXQubGVuZ3RoID0gMDtcbiAgfVxuXG4gIGNyZWF0ZUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgdGhpcy5ib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSBuZXcgQ2VsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcChbeCwgeV0sIHNoaXAsIGlzUGxhY2VkSG9yaXpvbnRhbGx5ID0gdHJ1ZSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaXNQbGFjZWRIb3Jpem9udGFsbHlcbiAgICAgID8geCAtIE1hdGguZmxvb3Ioc2hpcC5sZW5ndGggLyAyKVxuICAgICAgOiB5IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpO1xuICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgc2hpcC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGJvd0Nvb3JkaW5hdGVzID0gaXNQbGFjZWRIb3Jpem9udGFsbHlcbiAgICAgID8geyB4OiBlbmQsIHkgfVxuICAgICAgOiB7IHgsIHk6IGVuZCB9O1xuXG4gICAgaWYgKHNoaXAuaGFzUG9zaXRpb25lZCkgcmV0dXJuO1xuICAgIGlmIChzdGFydCA8IDAgfHwgZW5kID4gOSkgcmV0dXJuO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgICAgaWYgKGlzUGxhY2VkSG9yaXpvbnRhbGx5ICYmIHRoaXMuYm9hcmRbaV1beV0uc2hpcCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgaWYgKCFpc1BsYWNlZEhvcml6b250YWxseSAmJiB0aGlzLmJvYXJkW3hdW2ldLnNoaXAgIT09IG51bGwpIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICAgIGlmIChpc1BsYWNlZEhvcml6b250YWxseSkgdGhpcy5ib2FyZFtpXVt5XS5hc3NpZ24oc2hpcCk7XG4gICAgICBpZiAoIWlzUGxhY2VkSG9yaXpvbnRhbGx5KSB0aGlzLmJvYXJkW3hdW2ldLmFzc2lnbihzaGlwKTtcbiAgICB9XG4gICAgdGhpcy5mbGVldC5wdXNoKHNoaXApO1xuICAgIHNoaXAuaXNQb3NpdGlvbmVkKGJvd0Nvb3JkaW5hdGVzLCBpc1BsYWNlZEhvcml6b250YWxseSk7XG4gIH1cblxuICByZXNldENlbGxzSnVzdEdvdEhpdCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnJlc2V0SnVzdEdvdEhpdCgpO1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXS5zaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXS5zaGlwLnJlc2V0SnVzdFN1bmsoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlY2VpdmVBdHRhY2soW3gsIHldKSB7XG4gICAgdGhpcy5yZXNldENlbGxzSnVzdEdvdEhpdCgpO1xuICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5zaGlwLmhpdCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzRmxlZXRPcGVyYXRpb25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5mbGVldC5zb21lKChzaGlwKSA9PiBzaGlwLmhhc1N1bmsgPT09IGZhbHNlKTtcbiAgfVxuXG4gIGFsbFVuaGl0Q29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3QgdW5oaXRDb29yZGluYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmICghdGhpcy5ib2FyZFtpXVtqXS5pc0hpdCkgdW5oaXRDb29yZGluYXRlcy5wdXNoKFtpLCBqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmhpdENvb3JkaW5hdGVzO1xuICB9XG5cbiAgYWxsU2hpcENvb3JkaW5hdGVzKCkge1xuICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuYm9hcmRbaV1bal0uaXNIaXQpIHtcbiAgICAgICAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFtpLCBqXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaGlwQ29vcmRpbmF0ZXM7XG4gIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBSSBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGRpZmZpY3VsdHkgPSAnRWFzeScpIHtcbiAgICBzdXBlcihgQUkgJHtkaWZmaWN1bHR5fWApO1xuICAgIHRoaXMuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XG4gIH1cblxuICBjaG9vc2VBdHRhY2tDb29yZGluYXRlcyhwbGF5ZXIpIHtcbiAgICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnRWFzeScpIHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmFsbFVuaGl0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHJldHVybiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlc1tcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMubGVuZ3RoKVxuICAgICAgXTtcbiAgICB9XG4gICAgLy8gTm9ybWFsIFBsYWNlaG9sZGVyLCBzYW1lIGFzIGVhc3lcbiAgICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnTm9ybWFsJykge1xuICAgICAgY29uc3QgYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuYWxsVW5oaXRDb29yZGluYXRlcygpO1xuICAgICAgcmV0dXJuIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzW1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcy5sZW5ndGgpXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnQ2hlYXQnKSB7XG4gICAgICBjb25zdCBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5hbGxTaGlwQ29vcmRpbmF0ZXMoKTtcbiAgICAgIHJldHVybiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlc1tcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMubGVuZ3RoKVxuICAgICAgXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgYXJyYW5nZVNoaXBzT25Cb2FyZChkYXRhKSB7XG4gICAgY29uc3QgY3VycmVudEFJU2hpcHMgPSBbXTtcbiAgICBjb25zdCBpbWFnaW5hcnlCb2FyZCA9IFtdO1xuXG4gICAgZGF0YS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgbGV0IGhvcml6b250YWwgPSBCb29sZWFuKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpO1xuICAgICAgbGV0IHN0YXJ0ID0gaG9yaXpvbnRhbFxuICAgICAgICA/IHggLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMilcbiAgICAgICAgOiB5IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpO1xuICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgc2hpcC5sZW5ndGggLSAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBob3Jpem9udGFsID8gW2ksIHldIDogW3gsIGldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaW1hZ2luYXJ5Qm9hcmQuc29tZSgoY2VsbCkgPT4gY2VsbFswXSA9PT0gYXJyYXlbMF0gJiYgY2VsbFsxXSA9PT0gYXJyYXlbMV0pXG4gICAgICAgICAgICB8fCBzdGFydCA8IDBcbiAgICAgICAgICAgIHx8IGVuZCA+IDlcbiAgICAgICAgKSB7XG4gICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIGhvcml6b250YWwgPSBCb29sZWFuKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICAgIHN0YXJ0ID0gaG9yaXpvbnRhbFxuICAgICAgICAgICAgPyB4IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpXG4gICAgICAgICAgICA6IHkgLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMik7XG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBzaGlwLmxlbmd0aCAtIDE7XG4gICAgICAgICAgaSA9IHN0YXJ0O1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBhcnJheSA9IGhvcml6b250YWwgPyBbaSwgeV0gOiBbeCwgaV07XG4gICAgICAgIGltYWdpbmFyeUJvYXJkLnB1c2goYXJyYXkpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50QUlTaGlwcy5wdXNoKHtcbiAgICAgICAgdHlwZTogc2hpcC50eXBlLFxuICAgICAgICBsZW5ndGg6IHNoaXAubGVuZ3RoLFxuICAgICAgICBpbnNlcnRDb29yZGluYXRlczogW3gsIHldLFxuICAgICAgICBob3Jpem9udGFsLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3VycmVudEFJU2hpcHM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnUGxheWVyJykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ib2FyZCA9IG51bGw7XG4gIH1cblxuICBhc3NpZ25Cb2FyZChnYW1lQm9hcmQpIHtcbiAgICB0aGlzLmJvYXJkID0gZ2FtZUJvYXJkO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCB0eXBlKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLmhhc1Bvc2l0aW9uZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc1N1bmsgPSBmYWxzZTtcbiAgICB0aGlzLmp1c3RTdW5rID0gZmFsc2U7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmJvd0Nvb3JkaW5hdGVzID0gbnVsbDtcbiAgICB0aGlzLmlzSG9yaXpvbnRhbCA9IG51bGw7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHRoaXMuaXNTdW5rKCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgdGhpcy5oYXNTdW5rID0gdHJ1ZTtcbiAgICB0aGlzLmp1c3RTdW5rID0gdHJ1ZTtcbiAgfVxuXG4gIHJlc2V0SnVzdFN1bmsoKSB7XG4gICAgdGhpcy5qdXN0U3VuayA9IGZhbHNlO1xuICB9XG5cbiAgaXNQb3NpdGlvbmVkKGJvd0Nvb3JkaW5hdGVzLCBpc0hvcml6b250YWwpIHtcbiAgICB0aGlzLmhhc1Bvc2l0aW9uZWQgPSB0cnVlO1xuICAgIHRoaXMuYm93Q29vcmRpbmF0ZXMgPSBib3dDb29yZGluYXRlcztcbiAgICB0aGlzLmlzSG9yaXpvbnRhbCA9IGlzSG9yaXpvbnRhbDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyL3BsYXllcic7XG5pbXBvcnQgQUkgZnJvbSAnLi9wbGF5ZXIvYWknO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVCb2FyZCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgY29uc3QgcGxheWVycyA9IFtdO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQbGF5ZXJzID0gKGlucHV0UGxheWVycykgPT4ge1xuICBwbGF5ZXJzLmxlbmd0aCA9IDA7XG5cbiAgaW5wdXRQbGF5ZXJzLmZvckVhY2goKHRoaXNQbGF5ZXIpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzUGxheWVyLnR5cGUgPT09ICdodW1hbicgPyBuZXcgUGxheWVyKHRoaXNQbGF5ZXIubmFtZSlcbiAgICAgIDogdGhpc1BsYXllci50eXBlID09PSAnQUknID8gbmV3IEFJKHRoaXNQbGF5ZXIuZGlmZmljdWx0eSlcbiAgICAgICAgOiBudWxsO1xuXG4gICAgcGxheWVycy5wdXNoKHBsYXllcik7XG5cbiAgICBjb25zdCBib2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICBib2FyZC5jcmVhdGVCb2FyZCgpO1xuICAgIHBsYXllci5hc3NpZ25Cb2FyZChib2FyZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHBsYWNlUGxheWVyU2hpcHMgPSAocGxheWVyLCBzaGlwcykgPT4ge1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgcGxheWVyXG4gICAgICAuYm9hcmRcbiAgICAgIC5wbGFjZVNoaXAoc2hpcC5pbnNlcnRDb29yZGluYXRlcywgbmV3IFNoaXAoc2hpcC5sZW5ndGgsIHNoaXAudHlwZSksIHNoaXAuaG9yaXpvbnRhbCk7XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==