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
};

const loseFocusFromGame = () => {
  const game = document.querySelector('.game');
  game.classList.add('lose-focus');
};

const returnFocusToGame = () => {
  const game = document.querySelector('.game');
  game.classList.remove('lose-focus');
  game.classList.add('return-focus');
  game.addEventListener('animationend', () => {
    game.classList.remove('return-focus');
  }, { once: true });
};

const hideDialog = () => {
  const dialogOverlay = document.querySelector('.dialog-overlay');
  dialogOverlay.classList.add('fade-out');
  dialogOverlay.addEventListener('animationend', () => {
    dialogOverlay.classList.remove('fade-out');
    dialogOverlay.remove();
  }, { once: true });
};

const showWinnerDialog = () => {
  const siteContainer = document.querySelector('.site-container');

  const dialogOverlay = document.createElement('div');
  dialogOverlay.classList.add('dialog-overlay');

  const dialogBox = document.createElement('div');
  dialogBox.classList.add('dialog');

  const p1 = document.createElement('p');
  p1.classList.add('sub', 'text');
  p1.textContent = 'All enemy ships destroyed.';

  const p2 = document.createElement('p');
  p2.textContent = `${currentPlayer.name} wins!`;
  p2.classList.add('main', 'text');

  const btnPlayAgain = document.createElement('button');
  btnPlayAgain.classList.add('play', 'button');
  btnPlayAgain.textContent = 'Play Again';

  const btnMenuReturn = document.createElement('button');
  btnMenuReturn.classList.add('menu', 'button');
  btnMenuReturn.textContent = 'Return to Menu';

  dialogBox.appendChild(p1);
  dialogBox.appendChild(p2);
  dialogBox.appendChild(btnPlayAgain);
  dialogBox.appendChild(btnMenuReturn);
  dialogOverlay.appendChild(dialogBox);
  siteContainer.appendChild(dialogOverlay);
};

const checkWinningCondition = () => {
  if (!targetPlayer.board.isFleetOperational()) {
    loseFocusFromGame();
    showWinnerDialog();
    return true;
  }
  return false;
};

const selectShipObject = (player, cell) => {
  const [selectedShip] = player
    .board
    .fleet
    .filter((ship) => ship.type === cell.dataset.ship);
  return selectedShip;
};

const ifSunkExplosion = (cell) => {
  const targetCell = cell;
  if (targetCell.dataset.ship) {
    const targetShip = selectShipObject(targetPlayer, targetCell);
    if (targetShip.hasSunk) {
      const array = [
        [
          +targetCell.dataset.x + 1,
          +targetCell.dataset.y,
        ],
        [
          +targetCell.dataset.x - 1,
          +targetCell.dataset.y,
        ],
        [
          +targetCell.dataset.x,
          +targetCell.dataset.y + 1,
        ],
        [
          +targetCell.dataset.x,
          +targetCell.dataset.y - 1,
        ],
      ];
      targetCell.dataset.ship = '';
      targetCell.classList.add('sunk');

      array.forEach(([x, y]) => {
        const nextCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"][data-player-name="${targetPlayer.name}"][data-ship="${targetShip.type}"]`);
        if (nextCell) hitExplosionEffect(nextCell);
      });
    }
  }
};

const hitExplosionEffect = async (targetCell) => {
  ifSunkExplosion(targetCell);

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
    }, 500);
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

const updateBoard = async ([x, y]) => {
  const targetCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"][data-player-name="${targetPlayer.name}"]`);
  if (targetPlayer.board.getBoard()[x][y].ship) {
    const targetShip = selectShipObject(targetPlayer, targetCell);
    if (targetShip.hasSunk) {
      printSinkingSprite(targetShip);
    }
  }
  await hitExplosionEffect(targetCell);
  if (targetPlayer.board.getBoard()[x][y].ship) {
    targetCell.classList.add('hit');
    if (targetCell.dataset.ship) addFireEffect(targetCell);
  } else {
    targetCell.classList.add('miss');
    addMissMark(targetCell);
  }
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

const printSinkingSprite = (targetShip) => {
  const { x, y } = targetShip.bowCoordinates;
  const bowCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"][data-player-name="${targetPlayer.name}"]`);
  const bowCellChildren = Array.from(bowCell.childNodes);
  if (bowCellChildren.some((child) => child.classList.contains('sprite-container'))) return;
  bowCell.classList.add('ship-bow');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('sprite-container');
  if (targetShip.isHorizontal) spriteContainer.classList.add('horizontal');

  const shipSprite = document.createElement('img');
  shipSprite.src = shipSprites.find((sprite) => sprite.type === targetShip.type).src;
  shipSprite.classList.add('sprite');

  const spriteScale = 0.35 * (parseInt(window.getComputedStyle(bowCell).width, 10) / 60);
  document.documentElement.style.setProperty('--sprite-scale', spriteScale);

  spriteContainer.appendChild(shipSprite);
  bowCell.appendChild(spriteContainer);
};

const printSprites = () => {
  currentPlayer.board.getFleet().forEach((ship) => {
    const { x, y } = ship.bowCoordinates;
    const bowCell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"][data-player-name="${currentPlayer.name}"]`);
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

const resizeSprites = () => {
  const bowCell = document.querySelector('.cell');
  const spriteScale = 0.35 * (parseInt(window.getComputedStyle(bowCell).width, 10) / 60);
  document.documentElement.style.setProperty('--sprite-scale', spriteScale);
};

const clearBoard = () => {
  const boards = document.querySelector('.boards');
  while (boards.firstChild) {
    boards.removeChild(boards.firstChild);
  }
};

const initalizeGameContainer = () => {
  const siteContainer = document.querySelector('.site-container');

  const game = document.createElement('div');
  game.classList.add('game');

  const settingsBtnContainer = document.createElement('div');
  settingsBtnContainer.classList.add('settings-btn-container', 'max-width');

  const settingsBtn = document.createElement('button');
  settingsBtn.classList.add('settings-btn');
  settingsBtn.addEventListener('click', clickPauseMenu);

  const settingsBtnSVG = document.createElement('svg');

  const boards = document.createElement('div');
  boards.classList.add('boards', 'max-width');

  settingsBtn.appendChild(settingsBtnSVG);
  settingsBtnContainer.appendChild(settingsBtn);
  game.appendChild(settingsBtnContainer);
  game.appendChild(boards);
  siteContainer.appendChild(game);

  settingsBtnSVG.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cog</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>';
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
        cell.dataset.ship = player.board.getBoard()[j][i].ship
          ? player.board.getBoard()[j][i].ship.type
          : '';
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

const initializePlayerHP = () => {
  const game = document.querySelector('.game');
  players.forEach((player) => {
    const tag = currentPlayer === player ? 'current' : 'enemy';

    const playerInfo = document.createElement('div');
    playerInfo.classList.add(tag, 'player-info');

    const p1 = document.createElement('p');
    p1.textContent = 'Allied fleet';

    const health = document.createElement('div');
    health.classList.add('health');

    const totalHP = player
      .board
      .fleet
      .reduce((total, ship) => total + ship.length, 0);
    const text = document.createElement('p');
    text.classList.add('text');
    text.textContent = `${totalHP}/${totalHP}`;

    const bar = document.createElement('div');
    bar.classList.add('bar');

    const hit = document.createElement('div');
    hit.classList.add('hit');

    const empty = document.createElement('div');
    empty.classList.add('empty');

    const p2 = document.createElement('p');
    p2.textContent = player.name;

    health.appendChild(text);
    health.appendChild(bar);
    health.appendChild(hit);
    health.appendChild(empty);
    playerInfo.appendChild(p1);
    playerInfo.appendChild(health);
    playerInfo.appendChild(p2);
    game.appendChild(playerInfo);
  });
};

const initializeGame = () => {
  initalizeGameContainer();
  initializePlayerHP();
  initializeBoard();
};

const resumeGame = () => {
  returnFocusToGame();
  hideDialog();
};

const showPauseMenu = () => {
  const siteContainer = document.querySelector('.site-container');

  const dialogOverlay = document.createElement('div');
  dialogOverlay.classList.add('dialog-overlay');

  const dialogBox = document.createElement('div');
  dialogBox.classList.add('dialog');

  const p = document.createElement('p');
  p.textContent = 'Game paused';
  p.classList.add('main', 'text');

  const btnResume = document.createElement('button');
  btnResume.classList.add('button');
  btnResume.textContent = 'Resume';
  btnResume.addEventListener('click', resumeGame);

  const btnRestart = document.createElement('button');
  btnRestart.classList.add('button');
  btnRestart.textContent = 'Restart';

  const btnMenuReturn = document.createElement('button');
  btnMenuReturn.classList.add('button');
  btnMenuReturn.textContent = 'Return to Menu';

  dialogBox.appendChild(p);
  dialogBox.appendChild(btnResume);
  dialogBox.appendChild(btnRestart);
  dialogBox.appendChild(btnMenuReturn);
  dialogOverlay.appendChild(dialogBox);
  siteContainer.appendChild(dialogOverlay);
};

const clickPauseMenu = () => {
  loseFocusFromGame();
  showPauseMenu();
};

window.addEventListener('resize', resizeSprites);

initializeGame();
