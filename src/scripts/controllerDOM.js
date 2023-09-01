import '../style.css';
import players from './game';
import AI from './player/ai';
import Player from './player/player';

let currentPlayer = players[0];
let targetPlayer = players[1];

const switchPlayers = () => {
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  targetPlayer = targetPlayer === players[0] ? players[1] : players[0];

  console.log(`Current Player: ${currentPlayer.name}`);
  console.log(`Target Player: ${targetPlayer.name}`);
};

const checkWinningCondition = () => {
  if (!targetPlayer.board.isFleetOperational()) {
    alert(`${currentPlayer.name} wins!`);
    return true;
  }
  return false;
};

const clearBoard = () => {
  const game = document.querySelector('.game');
  while (game.firstChild) {
    game.removeChild(game.firstChild);
  }
};

const printBoard = () => {
  players.forEach((player) => {
    const game = document.querySelector('.game');
    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');

    for (let i = 9; i >= 0; i -= 1) {
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement('div');
        if (player.board.getBoard()[j][i].isHit) cell.classList.add('hit');
        cell.classList.add('cell');
        cell.dataset.x = j;
        cell.dataset.y = i;
        cell.dataset.playerName = player.name;
        if (player.board.getBoard()[j][i].ship) {
          cell.textContent = player.board.getBoard()[j][i].ship.length;
        }
        if (
          player === targetPlayer
          && currentPlayer instanceof Player
          && !(currentPlayer instanceof AI)
        ) cell.addEventListener('click', hitCell);
        gameboard.appendChild(cell);
      }
    }
    game.appendChild(gameboard);
  });
};

const processHit = () => {
  if (checkWinningCondition()) return;
  switchPlayers();
  clearBoard();
  printBoard();
  if (currentPlayer instanceof AI) {
    targetPlayer
      .board
      .receiveAttack(
        currentPlayer.chooseAttackCoordinates(targetPlayer),
      );
    processHit();
  }
};

const hitCell = (e) => {
  const cell = e.currentTarget;
  const { x } = cell.dataset;
  const { y } = cell.dataset;
  if (
    cell.dataset.playerName === targetPlayer.name
    && !targetPlayer.board.getBoard()[x][y].isHit
  ) {
    targetPlayer
      .board
      .receiveAttack(
        [x, y],
      );
    processHit();
  }
};

printBoard();

console.log(`Current Player: ${currentPlayer.name}`);
console.log(`Target Player: ${targetPlayer.name}`);

export default printBoard;
