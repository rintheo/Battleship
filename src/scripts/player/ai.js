import Player from './player';

export default class AI extends Player {
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
