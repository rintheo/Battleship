import Player from './player';

export default class AI extends Player {
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
