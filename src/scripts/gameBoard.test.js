import GameBoard from './gameBoard';
import Ship from './ship';
import Cell from './cell';

describe('Tests for GameBoard class', () => {
  let gameBoard;
  let carrier;
  let battleship;
  let cruiser;
  let destroyer;

  beforeEach(() => {
    gameBoard = new GameBoard();
    gameBoard.createBoard();
  });

  test('Creates a 10x10 board with Cell Objects', () => {
    expect(gameBoard.board).toHaveLength(10);
    for (let i = 0; i < 10; i += 1) {
      expect(gameBoard.board[i]).toHaveLength(10);
    }
  });

  test('Board has Cell Object', () => {
    expect(gameBoard.board[0][0]).toStrictEqual(new Cell());
    expect(gameBoard.board[9][9]).toStrictEqual(new Cell());
  });

  describe('Ships placement', () => {
    beforeEach(() => {
      carrier = new Ship(5);
      battleship = new Ship(4);
      cruiser = new Ship(3);
      destroyer = new Ship(2);
    });

    test('Place a carrier on valid tiles horizontally', () => {
      gameBoard.placeShip([5, 5], carrier, true);
      expect(gameBoard.board[3][5].ship).toBe(carrier);
      expect(gameBoard.board[4][5].ship).toBe(carrier);
      expect(gameBoard.board[5][5].ship).toBe(carrier);
      expect(gameBoard.board[6][5].ship).toBe(carrier);
      expect(gameBoard.board[7][5].ship).toBe(carrier);
    });

    test('Place a carrier on valid tiles vertically', () => {
      gameBoard.placeShip([3, 2], carrier, false);
      expect(gameBoard.board[3][0].ship).toBe(carrier);
      expect(gameBoard.board[3][1].ship).toBe(carrier);
      expect(gameBoard.board[3][2].ship).toBe(carrier);
      expect(gameBoard.board[3][3].ship).toBe(carrier);
      expect(gameBoard.board[3][4].ship).toBe(carrier);
    });

    test('Place a battleship on valid tiles vertically', () => {
      gameBoard.placeShip([6, 5], battleship, false);
      expect(gameBoard.board[6][3].ship).toBe(battleship);
      expect(gameBoard.board[6][4].ship).toBe(battleship);
      expect(gameBoard.board[6][5].ship).toBe(battleship);
      expect(gameBoard.board[6][6].ship).toBe(battleship);
    });

    test('Place a cruiser on valid tiles horizontally', () => {
      gameBoard.placeShip([1, 2], cruiser, true);
      expect(gameBoard.board[0][2].ship).toBe(cruiser);
      expect(gameBoard.board[1][2].ship).toBe(cruiser);
      expect(gameBoard.board[2][2].ship).toBe(cruiser);
    });

    test('Place a destroyer on valid tiles horizontally', () => {
      gameBoard.placeShip([7, 7], destroyer, true);
      expect(gameBoard.board[6][7].ship).toBe(destroyer);
      expect(gameBoard.board[7][7].ship).toBe(destroyer);
    });

    test('Disallow placing already placed ship (avoid duplicate)', () => {
      gameBoard.placeShip([5, 5], carrier, true);
      expect(gameBoard.board[3][5].ship).toBe(carrier);
      expect(gameBoard.board[4][5].ship).toBe(carrier);
      expect(gameBoard.board[5][5].ship).toBe(carrier);
      expect(gameBoard.board[6][5].ship).toBe(carrier);
      expect(gameBoard.board[7][5].ship).toBe(carrier);

      gameBoard.placeShip([4, 4], carrier, true);
      expect(gameBoard.board[2][4].ship).toBe(null);
      expect(gameBoard.board[3][4].ship).toBe(null);
      expect(gameBoard.board[4][4].ship).toBe(null);
      expect(gameBoard.board[5][4].ship).toBe(null);
      expect(gameBoard.board[6][4].ship).toBe(null);
    });

    test('Disallow ship placement if it overlaps another ship', () => {
      gameBoard.placeShip([5, 5], carrier, true);
      expect(gameBoard.board[3][5].ship).toBe(carrier);
      expect(gameBoard.board[4][5].ship).toBe(carrier);
      expect(gameBoard.board[5][5].ship).toBe(carrier);
      expect(gameBoard.board[6][5].ship).toBe(carrier);
      expect(gameBoard.board[7][5].ship).toBe(carrier);

      gameBoard.placeShip([6, 5], battleship, false);
      expect(gameBoard.board[6][3].ship).toBe(null);
      expect(gameBoard.board[6][4].ship).toBe(null);
      expect(gameBoard.board[6][5].ship).toBe(carrier);
      expect(gameBoard.board[6][6].ship).toBe(null);

      gameBoard.placeShip([8, 5], destroyer, true);
      expect(gameBoard.board[7][5].ship).toBe(carrier);
      expect(gameBoard.board[8][5].ship).toBe(null);
    });

    test('Disallow placing ship out of bounds', () => {
      gameBoard.placeShip([6, 9], battleship, false);
      expect(gameBoard.board[6][7].ship).toBe(null);
      expect(gameBoard.board[6][8].ship).toBe(null);
      expect(gameBoard.board[6][9].ship).toBe(null);
      // gameBoard.board[6][10] is out of bounds north

      gameBoard.placeShip([4, 0], destroyer, false);
      // gameBoard.board[4][-1] is out of bounds south
      expect(gameBoard.board[4][0].ship).toBe(null);

      gameBoard.placeShip([9, 5], carrier, true);
      expect(gameBoard.board[7][5].ship).toBe(null);
      expect(gameBoard.board[8][5].ship).toBe(null);
      expect(gameBoard.board[9][5].ship).toBe(null);
      // gameBoard.board[10][5] is out of bounds east
      // gameBoard.board[11][5] is out of bounds east

      gameBoard.placeShip([0, 2], cruiser, true);
      // gameBoard.board[-1][2] is out of bounds west
      expect(gameBoard.board[0][2].ship).toBe(null);
      expect(gameBoard.board[1][2].ship).toBe(null);
    });
  });
});
