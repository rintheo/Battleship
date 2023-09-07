import '../style.css';
import players from './game';
import AI from './player/ai';
import Player from './player/player';
import spriteBattleship from '../assets/shipBattleship.png';
import spriteCarrier from '../assets/shipCarrier.png';
import spriteCruiser from '../assets/shipCruiser.png';
import spriteDestroyer from '../assets/shipDestroyer.png';
import spriteSubmarine from '../assets/shipSubmarine.png';
import spriteFire from '../assets/fire.gif';
import spriteExplosion from '../assets/explosion.gif';

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

const updateHP = () => {
  const player = targetPlayer === players[0]
    ? 'current'
    : 'enemy';
  const totalHP = targetPlayer
    .board
    .fleet
    .reduce((total, ship) => total + ship.length, 0);
  const currentHP = targetPlayer
    .board
    .fleet
    .reduce((total, ship) => total - ship.hits, totalHP);
  const health = `${Math.round((currentHP / totalHP) * 100)}%`;
  const hit = `${Math.round((1 / 17) * 100)}%`;
  const empty = `${Math.round((1 - currentHP / totalHP) * 100)}%`;

  const playerHealthText = document.querySelector(`.${player} .health > .text `);
  playerHealthText.textContent = `${currentHP}/${totalHP}`;

  document.documentElement.style.setProperty(`--${player}-health`, health);
  document.documentElement.style.setProperty(`--${player}-hit`, hit);

  const playerHealthBar = document.querySelector(`.${player} .health > .bar `);
  playerHealthBar.addEventListener('transitionend', () => {
    document.documentElement.style.setProperty(`--${player}-hit`, '0%');
    document.documentElement.style.setProperty(`--${player}-empty`, empty);
  }, { once: true });
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
          player === targetPlayer
          && currentPlayer instanceof Player
          && !(currentPlayer instanceof AI)
        ) cell.addEventListener('click', hitCellPlayer);
        board.appendChild(cell);
      }
    }
    boards.appendChild(board);
  });
  printSprites();
};

const hitExplosionEffect = async (targetCell) => {
  const explosionContainer = document.createElement('div');
  explosionContainer.classList.add('explosion-container');

  const explosion = document.createElement('img');
  explosion.src = `${spriteExplosion}?rand=${Math.random()}`;
  explosion.classList.add('explosion');

  const explosionScale = 1.5 * (parseInt(window.getComputedStyle(targetCell).width, 10) / 60);
  document.documentElement.style.setProperty('--explosion-scale', explosionScale);

  explosionContainer.appendChild(explosion);
  targetCell.appendChild(explosionContainer);

  setTimeout(() => {
    targetCell.removeChild(explosionContainer);
  }, 5000);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

const addFireEffect = (targetCell) => {
  const fireContainer = document.createElement('div');
  fireContainer.classList.add('fire-container');

  const fire = document.createElement('img');
  fire.src = `${spriteFire}?rand=${Math.random()}`;
  fire.classList.add('fire');

  fireContainer.appendChild(fire);
  targetCell.appendChild(fireContainer);
};

const addMissMark = (targetCell) => {
  const mark = document.createElement('svg');
  targetCell.appendChild(mark);
  mark.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>miss</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>';
};

const updateBoard = async ([x, y]) => {
  const targetCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"][data-player-name="${targetPlayer.name}"]`);
  await hitExplosionEffect(targetCell);
  if (targetPlayer.board.getBoard()[x][y].ship) {
    targetCell.classList.add('hit');
    addFireEffect(targetCell);
  } else {
    targetCell.classList.add('miss');
    addMissMark(targetCell);
  }
};

const printSprites = () => {
  currentPlayer.board.getFleet().forEach((ship) => {
    const { x, y } = ship.bowCoordinates;
    const bowCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
    bowCell.classList.add('ship-bow');

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

const showInputBlocker = () => {
  const blocker = document.createElement('div');
  blocker.classList.add('blocker');

  const game = document.querySelector('.game');
  game.appendChild(blocker);
};

const hideInputBlocker = () => {
  const blocker = document.querySelector('.blocker');
  const game = document.querySelector('.game');
  game.removeChild(blocker);
};

const processHit = async ([x, y]) => {
  targetPlayer
    .board
    .receiveAttack(
      [x, y],
    );
  showInputBlocker();
  await updateBoard([x, y]);
  if (targetPlayer.board.getBoard()[x][y].ship) updateHP();
  if (checkWinningCondition()) return;
  switchPlayers();
  if (currentPlayer instanceof AI) hitCellAI();
  hideInputBlocker();
};

const hitCellAI = () => {
  const [x, y] = currentPlayer.chooseAttackCoordinates(targetPlayer);
  processHit([x, y]);
};

const hitCellPlayer = (e) => {
  const cell = e.currentTarget;
  const { x } = cell.dataset;
  const { y } = cell.dataset;
  if (
    cell.dataset.playerName === targetPlayer.name
    && !targetPlayer.board.getBoard()[x][y].isHit
  ) {
    processHit([x, y]);
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
