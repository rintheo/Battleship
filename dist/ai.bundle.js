/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!**********************************!*\
  !*** ./src/scripts/player/ai.js ***!
  \**********************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7O0FBRWYsaUJBQWlCLCtDQUFNO0FBQ3RDO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixVQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFVBQVU7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvcGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3BsYXllci9haS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lID0gJ1BsYXllcicpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYm9hcmQgPSBudWxsO1xuICB9XG5cbiAgYXNzaWduQm9hcmQoZ2FtZUJvYXJkKSB7XG4gICAgdGhpcy5ib2FyZCA9IGdhbWVCb2FyZDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUkgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihkaWZmaWN1bHR5ID0gJ0Vhc3knKSB7XG4gICAgc3VwZXIoYEFJICR7ZGlmZmljdWx0eX1gKTtcbiAgICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xuICAgIHRoaXMubWVtb3J5ID0ge1xuICAgICAgbGFzdEhpdENvb3JkaW5hdGU6IG51bGwsXG4gICAgICBsYXN0SGl0U3VjY2VzczogZmFsc2UsXG4gICAgICBsYXN0SGl0U3Vua0FTaGlwOiBmYWxzZSxcbiAgICAgIHN1Y2Nlc3NmdWxIaXRzOiBbXSxcbiAgICAgIHRvVHJ5Q29vcmRpbmF0ZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjaG9vc2VBdHRhY2tDb29yZGluYXRlcyhwbGF5ZXIpIHtcbiAgICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnRWFzeScpIHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmFsbFVuaGl0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHJldHVybiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlc1tcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMubGVuZ3RoKVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlmZmljdWx0eSA9PT0gJ05vcm1hbCcpIHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkLmFsbFVuaGl0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIGxldCB4O1xuICAgICAgbGV0IHk7XG4gICAgICBpZiAodGhpcy5tZW1vcnkubGFzdEhpdFN1Y2Nlc3MpIHtcbiAgICAgICAgW3gsIHldID0gdGhpcy5tZW1vcnkubGFzdEhpdENvb3JkaW5hdGU7XG4gICAgICAgIHRoaXMubWVtb3J5Lmxhc3RIaXRTdW5rQVNoaXAgPSBwbGF5ZXIuYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5zaGlwLmhhc1N1bms7XG4gICAgICAgIGlmICh0aGlzLm1lbW9yeS5sYXN0SGl0U3Vua0FTaGlwKSB7XG4gICAgICAgICAgdGhpcy5tZW1vcnkudG9UcnlDb29yZGluYXRlcy5sZW5ndGggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5tZW1vcnkuc3VjY2Vzc2Z1bEhpdHNcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgKChpdGVtWzBdID09PSB4IC0gMSkgJiYgKGl0ZW1bMV0gPT09IHkpKVxuICAgICAgICAgICAgICAgICAgICB8fCAoKGl0ZW1bMF0gPT09IHggKyAxKSAmJiAoaXRlbVsxXSA9PT0geSkpXG4gICAgICAgICAgICAgICAgICAgIHx8ICgoaXRlbVswXSA9PT0geCkgJiYgKGl0ZW1bMV0gPT09IHkgLSAxKSlcbiAgICAgICAgICAgICAgICAgICAgfHwgKChpdGVtWzBdID09PSB4KSAmJiAoaXRlbVsxXSA9PT0geSArIDEpKVxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgdGhpcy5tZW1vcnkudG9UcnlDb29yZGluYXRlcy5sZW5ndGggPSAwO1xuICAgICAgICAgIC8vIENoZWNrIGZvciBsaW5lIGFuZCBsaXN0IHBvc3NpYmxlIGF0dGFjayBjb29yZGluYXRlc1xuICAgICAgICAgIGZpbHRlcmVkLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChjb29yZGluYXRlWzBdID09PSB4KSB7XG4gICAgICAgICAgICAgIHRoaXMubWVtb3J5LnRvVHJ5Q29vcmRpbmF0ZXMucHVzaCguLi5hdmFpbGFibGVBdHRhY2tDb29yZGluYXRlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICgoaXRlbVswXSA9PT0gY29vcmRpbmF0ZVswXSkgJiYgKGl0ZW1bMV0gPT09IGNvb3JkaW5hdGVbMV0gLSAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoaXRlbVswXSA9PT0gY29vcmRpbmF0ZVswXSkgJiYgKGl0ZW1bMV0gPT09IGNvb3JkaW5hdGVbMV0gLSAyKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoaXRlbVswXSA9PT0gY29vcmRpbmF0ZVswXSkgJiYgKGl0ZW1bMV0gPT09IGNvb3JkaW5hdGVbMV0gKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoaXRlbVswXSA9PT0gY29vcmRpbmF0ZVswXSkgJiYgKGl0ZW1bMV0gPT09IGNvb3JkaW5hdGVbMV0gKyAyKSlcbiAgICAgICAgICAgICAgICApKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVbMV0gPT09IHkpIHtcbiAgICAgICAgICAgICAgdGhpcy5tZW1vcnkudG9UcnlDb29yZGluYXRlcy5wdXNoKC4uLmF2YWlsYWJsZUF0dGFja0Nvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgKChpdGVtWzBdID09PSBjb29yZGluYXRlWzBdIC0gMSkgJiYgKGl0ZW1bMV0gPT09IGNvb3JkaW5hdGVbMV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKChpdGVtWzBdID09PSBjb29yZGluYXRlWzBdIC0gMikgJiYgKGl0ZW1bMV0gPT09IGNvb3JkaW5hdGVbMV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKChpdGVtWzBdID09PSBjb29yZGluYXRlWzBdICsgMSkgJiYgKGl0ZW1bMV0gPT09IGNvb3JkaW5hdGVbMV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKChpdGVtWzBdID09PSBjb29yZGluYXRlWzBdICsgMikgJiYgKGl0ZW1bMV0gPT09IGNvb3JkaW5hdGVbMV0pKVxuICAgICAgICAgICAgICAgICkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBJZiBwcmV2aW91cyBjaGVjayBkaWQgbm90IHNlZSBhbnkgbGluZXMsXG4gICAgICAgICAgLy8gSnVzdCBjaGVjayBzdXJyb3VuZGluZyA0IGNlbGxzXG4gICAgICAgICAgaWYgKHRoaXMubWVtb3J5LnRvVHJ5Q29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm1lbW9yeS50b1RyeUNvb3JkaW5hdGVzLnB1c2goLi4uYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICgoaXRlbVswXSA9PT0geCAtIDEpICYmIChpdGVtWzFdID09PSB5KSlcbiAgICAgICAgICAgICAgICAgICAgICB8fCAoKGl0ZW1bMF0gPT09IHggKyAxKSAmJiAoaXRlbVsxXSA9PT0geSkpXG4gICAgICAgICAgICAgICAgICAgICAgfHwgKChpdGVtWzBdID09PSB4KSAmJiAoaXRlbVsxXSA9PT0geSAtIDEpKVxuICAgICAgICAgICAgICAgICAgICAgIHx8ICgoaXRlbVswXSA9PT0geCkgJiYgKGl0ZW1bMV0gPT09IHkgKyAxKSlcbiAgICAgICAgICAgICAgKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWVtb3J5LnRvVHJ5Q29vcmRpbmF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBbeCwgeV0gPSB0aGlzLm1lbW9yeS50b1RyeUNvb3JkaW5hdGVzLnBvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgW3gsIHldID0gYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXNbXG4gICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMubGVuZ3RoKVxuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgdGhpcy5tZW1vcnkubGFzdEhpdENvb3JkaW5hdGUgPSBbeCwgeV07XG4gICAgICB0aGlzLm1lbW9yeS5sYXN0SGl0U3VjY2VzcyA9IEJvb2xlYW4ocGxheWVyLmJvYXJkLmdldEJvYXJkKClbeF1beV0uc2hpcCk7XG4gICAgICB0aGlzLm1lbW9yeS5sYXN0SGl0U3Vua0FTaGlwID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5tZW1vcnkubGFzdEhpdFN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5tZW1vcnkuc3VjY2Vzc2Z1bEhpdHMucHVzaCh0aGlzLm1lbW9yeS5sYXN0SGl0Q29vcmRpbmF0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnQ2hlYXQnKSB7XG4gICAgICBjb25zdCBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlcyA9IHBsYXllci5ib2FyZC5hbGxTaGlwQ29vcmRpbmF0ZXMoKTtcbiAgICAgIHJldHVybiBhdmFpbGFibGVBdHRhY2tDb29yZGluYXRlc1tcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrQ29vcmRpbmF0ZXMubGVuZ3RoKVxuICAgICAgXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgYXJyYW5nZVNoaXBzT25Cb2FyZChkYXRhKSB7XG4gICAgY29uc3QgY3VycmVudEFJU2hpcHMgPSBbXTtcbiAgICBjb25zdCBpbWFnaW5hcnlCb2FyZCA9IFtdO1xuXG4gICAgZGF0YS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgbGV0IGhvcml6b250YWwgPSBCb29sZWFuKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpO1xuICAgICAgbGV0IHN0YXJ0ID0gaG9yaXpvbnRhbFxuICAgICAgICA/IHggLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMilcbiAgICAgICAgOiB5IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpO1xuICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgc2hpcC5sZW5ndGggLSAxO1xuXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBob3Jpem9udGFsID8gW2ksIHldIDogW3gsIGldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaW1hZ2luYXJ5Qm9hcmQuc29tZSgoY2VsbCkgPT4gY2VsbFswXSA9PT0gYXJyYXlbMF0gJiYgY2VsbFsxXSA9PT0gYXJyYXlbMV0pXG4gICAgICAgICAgICB8fCBzdGFydCA8IDBcbiAgICAgICAgICAgIHx8IGVuZCA+IDlcbiAgICAgICAgKSB7XG4gICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIGhvcml6b250YWwgPSBCb29sZWFuKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICAgIHN0YXJ0ID0gaG9yaXpvbnRhbFxuICAgICAgICAgICAgPyB4IC0gTWF0aC5mbG9vcihzaGlwLmxlbmd0aCAvIDIpXG4gICAgICAgICAgICA6IHkgLSBNYXRoLmZsb29yKHNoaXAubGVuZ3RoIC8gMik7XG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBzaGlwLmxlbmd0aCAtIDE7XG4gICAgICAgICAgaSA9IHN0YXJ0O1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBhcnJheSA9IGhvcml6b250YWwgPyBbaSwgeV0gOiBbeCwgaV07XG4gICAgICAgIGltYWdpbmFyeUJvYXJkLnB1c2goYXJyYXkpO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50QUlTaGlwcy5wdXNoKHtcbiAgICAgICAgdHlwZTogc2hpcC50eXBlLFxuICAgICAgICBsZW5ndGg6IHNoaXAubGVuZ3RoLFxuICAgICAgICBpbnNlcnRDb29yZGluYXRlczogW3gsIHldLFxuICAgICAgICBob3Jpem9udGFsLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3VycmVudEFJU2hpcHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==