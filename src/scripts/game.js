import Player from './player/player';
import AI from './player/ai';
import GameBoard from './gameBoard';
import Ship from './ship';

export const players = [];

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
  });
};

export const placePlayerShips = (player, ships) => {
  ships.forEach((ship) => {
    player
      .board
      .placeShip(ship.insertCoordinates, new Ship(ship.length, ship.type), ship.horizontal);
  });
};
