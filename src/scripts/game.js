import Player from './player/player';
import AI from './player/ai';
import GameBoard from './gameBoard';
import Ship from './ship';

const players = [];

const temporaryPlayerInput = [
  {
    index: 0,
    type: 'human',
    name: 'Player 1',
    data: null,
  },
  {
    index: 1,
    type: 'AI',
    difficulty: 'Easy',
    data: null,
  },
];

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

const initGame = (inputPlayers) => {
  // temp generate human player and AI easy player

  inputPlayers.forEach((thisPlayer) => {
    const player = thisPlayer.type === 'human' ? new Player(thisPlayer.name)
      : thisPlayer.type === 'AI' ? new AI(thisPlayer.difficulty)
        : null;

    players.push(player);

    const board = new GameBoard();
    board.createBoard();
    player.assignBoard(board);
    // console.log(player);
    // console.log(player.board);

    ships.forEach((ship) => {
      player
        .board
        .placeShip(ship.tempCoords, new Ship(ship.length, ship.type), ship.tempHori);
    });
    // console.table(player.board.getBoard());
  });
};

initGame(temporaryPlayerInput);
// console.log(players);

export default players;
