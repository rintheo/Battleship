import Player from './player/player';
import AI from './player/ai';
import GameBoard from './gameBoard';
import Ship from './ship';

export const players = [];

const ships = [
  {
    type: 'Carrier',
    length: 5,
    tempCoords: [3, 2],
    tempHori: true,
  },
  {
    type: 'Battleship',
    length: 4,
    tempCoords: [3, 5],
    tempHori: true,
  },
  {
    type: 'Cruiser',
    length: 3,
    tempCoords: [8, 3],
    tempHori: false,
  },
  {
    type: 'Submarine',
    length: 3,
    tempCoords: [6, 7],
    tempHori: false,
  },
  {
    type: 'Destroyer',
    length: 2,
    tempCoords: [1, 9],
    tempHori: true,
  },
];

export const generatePlayers = (inputPlayers) => {
  players.length = 0;

  inputPlayers.forEach((thisPlayer) => {
    const player = thisPlayer.type === 'human' ? new Player(thisPlayer.name)
      : thisPlayer.type === 'AI' ? new AI(thisPlayer.difficulty)
        : null;

    players.push(player);

    const board = new GameBoard();
    board.createBoard();
    player.assignBoard(board);

    ships.forEach((ship) => {
      player
        .board
        .placeShip(ship.tempCoords, new Ship(ship.length, ship.type), ship.tempHori);
    });
  });
};
