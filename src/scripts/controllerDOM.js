import '../style.css';
import players from './game';
import AI from './player/ai';
import Player from './player/player';
import spriteBattleship from '../assets/shipBattleship.png';
import spriteCarrier from '../assets/shipCarrier.png';
import spriteCruiser from '../assets/shipCruiser.png';
import spriteDestroyer from '../assets/shipDestroyer.png';
import spriteSubmarine from '../assets/shipSubmarine.png';

const shipSprites = [
  {
    type: 'Battleship',
    src: spriteBattleship,
  },
  {
    type: 'Carrier',
    src: spriteCarrier,
  },
  {
    type: 'Cruiser',
    src: spriteCruiser,
  },
  {
    type: 'Destroyer',
    src: spriteDestroyer,
  },
  {
    type: 'Submarine',
    src: spriteSubmarine,
  },
];

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
  const boards = document.querySelector('.boards');
  while (boards.firstChild) {
    boards.removeChild(boards.firstChild);
  }
};

const initializeBoard = () => {
  players.forEach((player) => {
    const boards = document.querySelector('.boards');
    const board = document.createElement('div');
    board.classList.add('board');
    if (player === currentPlayer) board.classList.add('current');
    if (player === targetPlayer) board.classList.add('target');

    for (let i = 9; i >= 0; i -= 1) {
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.x = j;
        cell.dataset.y = i;
        cell.dataset.playerName = player.name;
        if (
          player.board.getBoard()[j][i].ship
          && player === targetPlayer
        ) {
          cell.textContent = player.board.getBoard()[j][i].ship.length;
        }
        if (
          player === targetPlayer
          && currentPlayer instanceof Player
          && !(currentPlayer instanceof AI)
        ) cell.addEventListener('click', hitCell);
        board.appendChild(cell);
      }
    }
    boards.appendChild(board);
  });
  printSprites();
};

const updateBoard = ([x, y]) => {
  const targetCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"][data-player-name="${targetPlayer.name}"]`);
  if (targetPlayer.board.getBoard()[x][y].ship) {
    targetCell.classList.add('hit');
  } else {
    targetCell.classList.add('miss');
  }
};

const printSprites = () => {
  currentPlayer.board.getFleet().forEach((ship) => {
    const { x, y } = ship.bowCoordinates;
    const bowCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('sprite-container');
    if (ship.isHorizontal) spriteContainer.classList.add('horizontal');

    const shipSprite = document.createElement('img');
    shipSprite.src = shipSprites.find((sprite) => sprite.type === ship.type).src;
    shipSprite.classList.add('sprite');

    const spriteScale = 0.35 * (parseInt(window.getComputedStyle(bowCell).width, 10) / 60);
    document.documentElement.style.setProperty('--sprite-scale', spriteScale);

    spriteContainer.appendChild(shipSprite);
    bowCell.appendChild(spriteContainer);
  });
};

const processHit = () => {
  if (checkWinningCondition()) return;
  switchPlayers();
  if (currentPlayer instanceof AI) {
    targetPlayer
      .board
      .receiveAttack(
        currentPlayer.chooseAttackCoordinates(targetPlayer),
        updateBoard,
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
        updateBoard,
      );
    processHit();
  }
};

const resizeSprites = () => {
  const bowCell = document.querySelector('.cell');
  const spriteScale = 0.35 * (parseInt(window.getComputedStyle(bowCell).width, 10) / 60);
  document.documentElement.style.setProperty('--sprite-scale', spriteScale);
};

window.addEventListener('resize', resizeSprites);

initializeBoard();

console.log(`Current Player: ${currentPlayer.name}`);
console.log(`Target Player: ${targetPlayer.name}`);
