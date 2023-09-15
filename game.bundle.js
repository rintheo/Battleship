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
    this.memory = {
      lastHitCoordinate: null,
      lastHitSuccess: false,
      lastHitSunkAShip: false,
      successfulHits: [],
      toTryCoordinates: [],
    };
  }

  chooseAttackCoordinates(player) {
    if (this.difficulty === 'Easy') {
      const availableAttackCoordinates = player.board.allUnhitCoordinates();
      return availableAttackCoordinates[
        Math.floor(Math.random() * availableAttackCoordinates.length)
      ];
    }
    if (this.difficulty === 'Normal') {
      const availableAttackCoordinates = player.board.allUnhitCoordinates();
      let x;
      let y;
      if (this.memory.lastHitSuccess) {
        [x, y] = this.memory.lastHitCoordinate;
        this.memory.lastHitSunkAShip = player.board.getBoard()[x][y].ship.hasSunk;
        if (this.memory.lastHitSunkAShip) {
          this.memory.toTryCoordinates.length = 0;
        } else {
          const filtered = this.memory.successfulHits
            .filter((item) => (
              ((item[0] === x - 1) && (item[1] === y))
                    || ((item[0] === x + 1) && (item[1] === y))
                    || ((item[0] === x) && (item[1] === y - 1))
                    || ((item[0] === x) && (item[1] === y + 1))
            ));
          this.memory.toTryCoordinates.length = 0;
          // Check for line and list possible attack coordinates
          filtered.forEach((coordinate) => {
            if (coordinate[0] === x) {
              this.memory.toTryCoordinates.push(...availableAttackCoordinates
                .filter((item) => (
                  ((item[0] === coordinate[0]) && (item[1] === coordinate[1] - 1))
                        || ((item[0] === coordinate[0]) && (item[1] === coordinate[1] - 2))
                        || ((item[0] === coordinate[0]) && (item[1] === coordinate[1] + 1))
                        || ((item[0] === coordinate[0]) && (item[1] === coordinate[1] + 2))
                )));
            } else if (coordinate[1] === y) {
              this.memory.toTryCoordinates.push(...availableAttackCoordinates
                .filter((item) => (
                  ((item[0] === coordinate[0] - 1) && (item[1] === coordinate[1]))
                        || ((item[0] === coordinate[0] - 2) && (item[1] === coordinate[1]))
                        || ((item[0] === coordinate[0] + 1) && (item[1] === coordinate[1]))
                        || ((item[0] === coordinate[0] + 2) && (item[1] === coordinate[1]))
                )));
            }
          });
          // If previous check did not see any lines,
          // Just check surrounding 4 cells
          if (this.memory.toTryCoordinates.length === 0) {
            this.memory.toTryCoordinates.push(...availableAttackCoordinates
              .filter((item) => (
                ((item[0] === x - 1) && (item[1] === y))
                      || ((item[0] === x + 1) && (item[1] === y))
                      || ((item[0] === x) && (item[1] === y - 1))
                      || ((item[0] === x) && (item[1] === y + 1))
              )));
          }
        }
      }
      if (this.memory.toTryCoordinates.length > 0) {
        [x, y] = this.memory.toTryCoordinates.pop();
      } else {
        [x, y] = availableAttackCoordinates[
          Math.floor(Math.random() * availableAttackCoordinates.length)
        ];
      }
      this.memory.lastHitCoordinate = [x, y];
      this.memory.lastHitSuccess = Boolean(player.board.getBoard()[x][y].ship);
      this.memory.lastHitSunkAShip = false;
      if (this.memory.lastHitSuccess) {
        this.memory.successfulHits.push(this.memory.lastHitCoordinate);
      }
      return [x, y];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ1I7QUFDTztBQUNWOztBQUVuQjs7QUFFQTtBQUNQOztBQUVBO0FBQ0EscURBQXFELHNEQUFNO0FBQzNELHVDQUF1QyxrREFBRTtBQUN6Qzs7QUFFQTs7QUFFQSxzQkFBc0Isa0RBQVM7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw2Q0FBSTtBQUNqRCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvY2VsbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wbGF5ZXIvYWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3BsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzSGl0ID0gZmFsc2U7XG4gICAgdGhpcy5qdXN0R290SGl0ID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwID0gbnVsbDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmlzSGl0ID0gdHJ1ZTtcbiAgICB0aGlzLmp1c3RHb3RIaXQgPSB0cnVlO1xuICB9XG5cbiAgcmVzZXRKdXN0R290SGl0KCkge1xuICAgIHRoaXMuanVzdEdvdEhpdCA9IGZhbHNlO1xuICB9XG5cbiAgYXNzaWduKHNoaXApIHtcbiAgICB0aGlzLnNoaXAgPSBzaGlwO1xuICB9XG59XG4iLCJpbXBvcnQgQ2VsbCBmcm9tICcuL2NlbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy5mbGVldCA9IFtdO1xuICB9XG5cbiAgZ2V0Qm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cblxuICBnZXRGbGVldCgpIHtcbiAgICByZXR1cm4gdGhpcy5mbGVldDtcbiAgfVxuXG4gIGVtcHR5RmxlZXQoKSB7XG4gICAgdGhpcy5mbGVldC5sZW5ndGggPSAwO1xuICB9XG5cbiAgY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmJvYXJkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IG5ldyBDZWxsKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwKFt4LCB5XSwgc2hpcCwgaXNQbGFjZWRIb3Jpem9udGFsbHkgPSB0cnVlKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpc1BsYWNlZEhvcml6b250YWxseVxuICAgICAgPyB4IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpXG4gICAgICA6IHkgLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMik7XG4gICAgY29uc3QgZW5kID0gc3RhcnQgKyBzaGlwLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgYm93Q29vcmRpbmF0ZXMgPSBpc1BsYWNlZEhvcml6b250YWxseVxuICAgICAgPyB7IHg6IGVuZCwgeSB9XG4gICAgICA6IHsgeCwgeTogZW5kIH07XG5cbiAgICBpZiAoc2hpcC5oYXNQb3NpdGlvbmVkKSByZXR1cm47XG4gICAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiA5KSByZXR1cm47XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgICBpZiAoaXNQbGFjZWRIb3Jpem9udGFsbHkgJiYgdGhpcy5ib2FyZFtpXVt5XS5zaGlwICE9PSBudWxsKSByZXR1cm47XG4gICAgICBpZiAoIWlzUGxhY2VkSG9yaXpvbnRhbGx5ICYmIHRoaXMuYm9hcmRbeF1baV0uc2hpcCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgICAgaWYgKGlzUGxhY2VkSG9yaXpvbnRhbGx5KSB0aGlzLmJvYXJkW2ldW3ldLmFzc2lnbihzaGlwKTtcbiAgICAgIGlmICghaXNQbGFjZWRIb3Jpem9udGFsbHkpIHRoaXMuYm9hcmRbeF1baV0uYXNzaWduKHNoaXApO1xuICAgIH1cbiAgICB0aGlzLmZsZWV0LnB1c2goc2hpcCk7XG4gICAgc2hpcC5pc1Bvc2l0aW9uZWQoYm93Q29vcmRpbmF0ZXMsIGlzUGxhY2VkSG9yaXpvbnRhbGx5KTtcbiAgfVxuXG4gIHJlc2V0Q2VsbHNKdXN0R290SGl0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0ucmVzZXRKdXN0R290SGl0KCk7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnNoaXAucmVzZXRKdXN0U3VuaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVjZWl2ZUF0dGFjayhbeCwgeV0pIHtcbiAgICB0aGlzLnJlc2V0Q2VsbHNKdXN0R290SGl0KCk7XG4gICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQoKTtcbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XS5zaGlwICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLnNoaXAuaGl0KCk7XG4gICAgfVxuICB9XG5cbiAgaXNGbGVldE9wZXJhdGlvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLmZsZWV0LnNvbWUoKHNoaXApID0+IHNoaXAuaGFzU3VuayA9PT0gZmFsc2UpO1xuICB9XG5cbiAgYWxsVW5oaXRDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCB1bmhpdENvb3JkaW5hdGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvYXJkW2ldW2pdLmlzSGl0KSB1bmhpdENvb3JkaW5hdGVzLnB1c2goW2ksIGpdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuaGl0Q29vcmRpbmF0ZXM7XG4gIH1cblxuICBhbGxTaGlwQ29vcmRpbmF0ZXMoKSB7XG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0uc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtpXVtqXS5pc0hpdCkge1xuICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW2ksIGpdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXBDb29yZGluYXRlcztcbiAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFJIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZGlmZmljdWx0eSA9ICdFYXN5Jykge1xuICAgIHN1cGVyKGBBSSAke2RpZmZpY3VsdHl9YCk7XG4gICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcbiAgICB0aGlzLm1lbW9yeSA9IHtcbiAgICAgIGxhc3RIaXRDb29yZGluYXRlOiBudWxsLFxuICAgICAgbGFzdEhpdFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbGFzdEhpdFN1bmtBU2hpcDogZmFsc2UsXG4gICAgICBzdWNjZXNzZnVsSGl0czogW10sXG4gICAgICB0b1RyeUNvb3JkaW5hdGVzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY2hvb3NlQXR0YWNrQ29vcmRpbmF0ZXMocGxheWVyKSB7XG4gICAgaWYgKHRoaXMuZGlmZmljdWx0eSA9PT0gJ0Vhc3knKSB7XG4gICAgICBjb25zdCBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5hbGxVbmhpdENvb3JkaW5hdGVzKCk7XG4gICAgICByZXR1cm4gYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXNbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzLmxlbmd0aClcbiAgICAgIF07XG4gICAgfVxuICAgIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09ICdOb3JtYWwnKSB7XG4gICAgICBjb25zdCBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5hbGxVbmhpdENvb3JkaW5hdGVzKCk7XG4gICAgICBsZXQgeDtcbiAgICAgIGxldCB5O1xuICAgICAgaWYgKHRoaXMubWVtb3J5Lmxhc3RIaXRTdWNjZXNzKSB7XG4gICAgICAgIFt4LCB5XSA9IHRoaXMubWVtb3J5Lmxhc3RIaXRDb29yZGluYXRlO1xuICAgICAgICB0aGlzLm1lbW9yeS5sYXN0SGl0U3Vua0FTaGlwID0gcGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcC5oYXNTdW5rO1xuICAgICAgICBpZiAodGhpcy5tZW1vcnkubGFzdEhpdFN1bmtBU2hpcCkge1xuICAgICAgICAgIHRoaXMubWVtb3J5LnRvVHJ5Q29vcmRpbmF0ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMubWVtb3J5LnN1Y2Nlc3NmdWxIaXRzXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICgoaXRlbVswXSA9PT0geCAtIDEpICYmIChpdGVtWzFdID09PSB5KSlcbiAgICAgICAgICAgICAgICAgICAgfHwgKChpdGVtWzBdID09PSB4ICsgMSkgJiYgKGl0ZW1bMV0gPT09IHkpKVxuICAgICAgICAgICAgICAgICAgICB8fCAoKGl0ZW1bMF0gPT09IHgpICYmIChpdGVtWzFdID09PSB5IC0gMSkpXG4gICAgICAgICAgICAgICAgICAgIHx8ICgoaXRlbVswXSA9PT0geCkgJiYgKGl0ZW1bMV0gPT09IHkgKyAxKSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICAgIHRoaXMubWVtb3J5LnRvVHJ5Q29vcmRpbmF0ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAvLyBDaGVjayBmb3IgbGluZSBhbmQgbGlzdCBwb3NzaWJsZSBhdHRhY2sgY29vcmRpbmF0ZXNcbiAgICAgICAgICBmaWx0ZXJlZC5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29vcmRpbmF0ZVswXSA9PT0geCkge1xuICAgICAgICAgICAgICB0aGlzLm1lbW9yeS50b1RyeUNvb3JkaW5hdGVzLnB1c2goLi4uYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAoKGl0ZW1bMF0gPT09IGNvb3JkaW5hdGVbMF0pICYmIChpdGVtWzFdID09PSBjb29yZGluYXRlWzFdIC0gMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoKGl0ZW1bMF0gPT09IGNvb3JkaW5hdGVbMF0pICYmIChpdGVtWzFdID09PSBjb29yZGluYXRlWzFdIC0gMikpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoKGl0ZW1bMF0gPT09IGNvb3JkaW5hdGVbMF0pICYmIChpdGVtWzFdID09PSBjb29yZGluYXRlWzFdICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoKGl0ZW1bMF0gPT09IGNvb3JkaW5hdGVbMF0pICYmIChpdGVtWzFdID09PSBjb29yZGluYXRlWzFdICsgMikpXG4gICAgICAgICAgICAgICAgKSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb29yZGluYXRlWzFdID09PSB5KSB7XG4gICAgICAgICAgICAgIHRoaXMubWVtb3J5LnRvVHJ5Q29vcmRpbmF0ZXMucHVzaCguLi5hdmFpbGFibGVBdHRhY2tDb29yZGluYXRlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICgoaXRlbVswXSA9PT0gY29vcmRpbmF0ZVswXSAtIDEpICYmIChpdGVtWzFdID09PSBjb29yZGluYXRlWzFdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoaXRlbVswXSA9PT0gY29vcmRpbmF0ZVswXSAtIDIpICYmIChpdGVtWzFdID09PSBjb29yZGluYXRlWzFdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoaXRlbVswXSA9PT0gY29vcmRpbmF0ZVswXSArIDEpICYmIChpdGVtWzFdID09PSBjb29yZGluYXRlWzFdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoaXRlbVswXSA9PT0gY29vcmRpbmF0ZVswXSArIDIpICYmIChpdGVtWzFdID09PSBjb29yZGluYXRlWzFdKSlcbiAgICAgICAgICAgICAgICApKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gSWYgcHJldmlvdXMgY2hlY2sgZGlkIG5vdCBzZWUgYW55IGxpbmVzLFxuICAgICAgICAgIC8vIEp1c3QgY2hlY2sgc3Vycm91bmRpbmcgNCBjZWxsc1xuICAgICAgICAgIGlmICh0aGlzLm1lbW9yeS50b1RyeUNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5tZW1vcnkudG9UcnlDb29yZGluYXRlcy5wdXNoKC4uLmF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAoKGl0ZW1bMF0gPT09IHggLSAxKSAmJiAoaXRlbVsxXSA9PT0geSkpXG4gICAgICAgICAgICAgICAgICAgICAgfHwgKChpdGVtWzBdID09PSB4ICsgMSkgJiYgKGl0ZW1bMV0gPT09IHkpKVxuICAgICAgICAgICAgICAgICAgICAgIHx8ICgoaXRlbVswXSA9PT0geCkgJiYgKGl0ZW1bMV0gPT09IHkgLSAxKSlcbiAgICAgICAgICAgICAgICAgICAgICB8fCAoKGl0ZW1bMF0gPT09IHgpICYmIChpdGVtWzFdID09PSB5ICsgMSkpXG4gICAgICAgICAgICAgICkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1lbW9yeS50b1RyeUNvb3JkaW5hdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgW3gsIHldID0gdGhpcy5tZW1vcnkudG9UcnlDb29yZGluYXRlcy5wb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFt4LCB5XSA9IGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzW1xuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzLmxlbmd0aClcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWVtb3J5Lmxhc3RIaXRDb29yZGluYXRlID0gW3gsIHldO1xuICAgICAgdGhpcy5tZW1vcnkubGFzdEhpdFN1Y2Nlc3MgPSBCb29sZWFuKHBsYXllci5ib2FyZC5nZXRCb2FyZCgpW3hdW3ldLnNoaXApO1xuICAgICAgdGhpcy5tZW1vcnkubGFzdEhpdFN1bmtBU2hpcCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMubWVtb3J5Lmxhc3RIaXRTdWNjZXNzKSB7XG4gICAgICAgIHRoaXMubWVtb3J5LnN1Y2Nlc3NmdWxIaXRzLnB1c2godGhpcy5tZW1vcnkubGFzdEhpdENvb3JkaW5hdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlmZmljdWx0eSA9PT0gJ0NoZWF0Jykge1xuICAgICAgY29uc3QgYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmQuYWxsU2hpcENvb3JkaW5hdGVzKCk7XG4gICAgICByZXR1cm4gYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXNbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzLmxlbmd0aClcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3RhdGljIGFycmFuZ2VTaGlwc09uQm9hcmQoZGF0YSkge1xuICAgIGNvbnN0IGN1cnJlbnRBSVNoaXBzID0gW107XG4gICAgY29uc3QgaW1hZ2luYXJ5Qm9hcmQgPSBbXTtcblxuICAgIGRhdGEuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGxldCBob3Jpem9udGFsID0gQm9vbGVhbihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKTtcbiAgICAgIGxldCBzdGFydCA9IGhvcml6b250YWxcbiAgICAgICAgPyB4IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpXG4gICAgICAgIDogeSAtIE1hdGguZmxvb3Ioc2hpcC5sZW5ndGggLyAyKTtcbiAgICAgIGxldCBlbmQgPSBzdGFydCArIHNoaXAubGVuZ3RoIC0gMTtcblxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gaG9yaXpvbnRhbCA/IFtpLCB5XSA6IFt4LCBpXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGltYWdpbmFyeUJvYXJkLnNvbWUoKGNlbGwpID0+IGNlbGxbMF0gPT09IGFycmF5WzBdICYmIGNlbGxbMV0gPT09IGFycmF5WzFdKVxuICAgICAgICAgICAgfHwgc3RhcnQgPCAwXG4gICAgICAgICAgICB8fCBlbmQgPiA5XG4gICAgICAgICkge1xuICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICBob3Jpem9udGFsID0gQm9vbGVhbihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKTtcbiAgICAgICAgICBzdGFydCA9IGhvcml6b250YWxcbiAgICAgICAgICAgID8geCAtIE1hdGguZmxvb3Ioc2hpcC5sZW5ndGggLyAyKVxuICAgICAgICAgICAgOiB5IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpO1xuICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgc2hpcC5sZW5ndGggLSAxO1xuICAgICAgICAgIGkgPSBzdGFydDtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBob3Jpem9udGFsID8gW2ksIHldIDogW3gsIGldO1xuICAgICAgICBpbWFnaW5hcnlCb2FyZC5wdXNoKGFycmF5KTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudEFJU2hpcHMucHVzaCh7XG4gICAgICAgIHR5cGU6IHNoaXAudHlwZSxcbiAgICAgICAgbGVuZ3RoOiBzaGlwLmxlbmd0aCxcbiAgICAgICAgaW5zZXJ0Q29vcmRpbmF0ZXM6IFt4LCB5XSxcbiAgICAgICAgaG9yaXpvbnRhbCxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRBSVNoaXBzO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lID0gJ1BsYXllcicpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYm9hcmQgPSBudWxsO1xuICB9XG5cbiAgYXNzaWduQm9hcmQoZ2FtZUJvYXJkKSB7XG4gICAgdGhpcy5ib2FyZCA9IGdhbWVCb2FyZDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgdHlwZSkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5oYXNQb3NpdGlvbmVkID0gZmFsc2U7XG4gICAgdGhpcy5oYXNTdW5rID0gZmFsc2U7XG4gICAgdGhpcy5qdXN0U3VuayA9IGZhbHNlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5ib3dDb29yZGluYXRlcyA9IG51bGw7XG4gICAgdGhpcy5pc0hvcml6b250YWwgPSBudWxsO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSB0aGlzLmlzU3VuaygpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHRoaXMuaGFzU3VuayA9IHRydWU7XG4gICAgdGhpcy5qdXN0U3VuayA9IHRydWU7XG4gIH1cblxuICByZXNldEp1c3RTdW5rKCkge1xuICAgIHRoaXMuanVzdFN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGlzUG9zaXRpb25lZChib3dDb29yZGluYXRlcywgaXNIb3Jpem9udGFsKSB7XG4gICAgdGhpcy5oYXNQb3NpdGlvbmVkID0gdHJ1ZTtcbiAgICB0aGlzLmJvd0Nvb3JkaW5hdGVzID0gYm93Q29vcmRpbmF0ZXM7XG4gICAgdGhpcy5pc0hvcml6b250YWwgPSBpc0hvcml6b250YWw7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllci9wbGF5ZXInO1xuaW1wb3J0IEFJIGZyb20gJy4vcGxheWVyL2FpJztcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGNvbnN0IHBsYXllcnMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUGxheWVycyA9IChpbnB1dFBsYXllcnMpID0+IHtcbiAgcGxheWVycy5sZW5ndGggPSAwO1xuXG4gIGlucHV0UGxheWVycy5mb3JFYWNoKCh0aGlzUGxheWVyKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpc1BsYXllci50eXBlID09PSAnaHVtYW4nID8gbmV3IFBsYXllcih0aGlzUGxheWVyLm5hbWUpXG4gICAgICA6IHRoaXNQbGF5ZXIudHlwZSA9PT0gJ0FJJyA/IG5ldyBBSSh0aGlzUGxheWVyLmRpZmZpY3VsdHkpXG4gICAgICAgIDogbnVsbDtcblxuICAgIHBsYXllcnMucHVzaChwbGF5ZXIpO1xuXG4gICAgY29uc3QgYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgYm9hcmQuY3JlYXRlQm9hcmQoKTtcbiAgICBwbGF5ZXIuYXNzaWduQm9hcmQoYm9hcmQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwbGFjZVBsYXllclNoaXBzID0gKHBsYXllciwgc2hpcHMpID0+IHtcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHBsYXllclxuICAgICAgLmJvYXJkXG4gICAgICAucGxhY2VTaGlwKHNoaXAuaW5zZXJ0Q29vcmRpbmF0ZXMsIG5ldyBTaGlwKHNoaXAubGVuZ3RoLCBzaGlwLnR5cGUpLCBzaGlwLmhvcml6b250YWwpO1xuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=