import GameBoard from './gameBoard';
import Ship from './ship';
import Cell from './cell';

describe('Tests for GameBoard class', () => {
  let board;
  let carrier;
  let battleship;
  let cruiser;
  let submarine;
  let destroyer;

  beforeEach(() => {
    board = new GameBoard();
    board.createBoard();
  });

  test('Creates a 10x10 board with Cell Objects', () => {
    expect(board.board).toHaveLength(10);
    for (let i = 0; i < 10; i += 1) {
      expect(board.getBoard()[i]).toHaveLength(10);
    }
  });

  test('Board has Cell Object', () => {
    expect(board.getBoard()[0][0]).toStrictEqual(new Cell());
    expect(board.getBoard()[9][9]).toStrictEqual(new Cell());
  });

  describe('Ships placement', () => {
    beforeEach(() => {
      carrier = new Ship(5);
      battleship = new Ship(4);
      cruiser = new Ship(3);
      destroyer = new Ship(2);
    });

    test('Place a carrier on valid tiles horizontally', () => {
      board.placeShip([5, 5], carrier, true);
      expect(board.getBoard()[3][5].ship).toBe(carrier);
      expect(board.getBoard()[4][5].ship).toBe(carrier);
      expect(board.getBoard()[5][5].ship).toBe(carrier);
      expect(board.getBoard()[6][5].ship).toBe(carrier);
      expect(board.getBoard()[7][5].ship).toBe(carrier);
    });

    test('Place a carrier on valid tiles vertically', () => {
      board.placeShip([3, 2], carrier, false);
      expect(board.getBoard()[3][0].ship).toBe(carrier);
      expect(board.getBoard()[3][1].ship).toBe(carrier);
      expect(board.getBoard()[3][2].ship).toBe(carrier);
      expect(board.getBoard()[3][3].ship).toBe(carrier);
      expect(board.getBoard()[3][4].ship).toBe(carrier);
    });

    test('Place a battleship on valid tiles vertically', () => {
      board.placeShip([6, 5], battleship, false);
      expect(board.getBoard()[6][3].ship).toBe(battleship);
      expect(board.getBoard()[6][4].ship).toBe(battleship);
      expect(board.getBoard()[6][5].ship).toBe(battleship);
      expect(board.getBoard()[6][6].ship).toBe(battleship);
    });

    test('Place a cruiser on valid tiles horizontally', () => {
      board.placeShip([1, 2], cruiser, true);
      expect(board.getBoard()[0][2].ship).toBe(cruiser);
      expect(board.getBoard()[1][2].ship).toBe(cruiser);
      expect(board.getBoard()[2][2].ship).toBe(cruiser);
    });

    test('Place a destroyer on valid tiles horizontally', () => {
      board.placeShip([7, 7], destroyer, true);
      expect(board.getBoard()[6][7].ship).toBe(destroyer);
      expect(board.getBoard()[7][7].ship).toBe(destroyer);
    });

    test('Disallow placing already placed ship (avoid duplicate)', () => {
      board.placeShip([5, 5], carrier, true);
      expect(board.getBoard()[3][5].ship).toBe(carrier);
      expect(board.getBoard()[4][5].ship).toBe(carrier);
      expect(board.getBoard()[5][5].ship).toBe(carrier);
      expect(board.getBoard()[6][5].ship).toBe(carrier);
      expect(board.getBoard()[7][5].ship).toBe(carrier);

      board.placeShip([4, 4], carrier, true);
      expect(board.getBoard()[2][4].ship).toBe(null);
      expect(board.getBoard()[3][4].ship).toBe(null);
      expect(board.getBoard()[4][4].ship).toBe(null);
      expect(board.getBoard()[5][4].ship).toBe(null);
      expect(board.getBoard()[6][4].ship).toBe(null);
    });

    test('Disallow ship placement if it overlaps another ship', () => {
      board.placeShip([5, 5], carrier, true);
      expect(board.getBoard()[3][5].ship).toBe(carrier);
      expect(board.getBoard()[4][5].ship).toBe(carrier);
      expect(board.getBoard()[5][5].ship).toBe(carrier);
      expect(board.getBoard()[6][5].ship).toBe(carrier);
      expect(board.getBoard()[7][5].ship).toBe(carrier);

      board.placeShip([6, 5], battleship, false);
      expect(board.getBoard()[6][3].ship).toBe(null);
      expect(board.getBoard()[6][4].ship).toBe(null);
      expect(board.getBoard()[6][5].ship).toBe(carrier);
      expect(board.getBoard()[6][6].ship).toBe(null);

      board.placeShip([8, 5], destroyer, true);
      expect(board.getBoard()[7][5].ship).toBe(carrier);
      expect(board.getBoard()[8][5].ship).toBe(null);
    });

    test('Disallow placing ship out of bounds', () => {
      board.placeShip([6, 9], battleship, false);
      expect(board.getBoard()[6][7].ship).toBe(null);
      expect(board.getBoard()[6][8].ship).toBe(null);
      expect(board.getBoard()[6][9].ship).toBe(null);
      // gameboard.getBoard()[6][10] is out of bounds north

      board.placeShip([4, 0], destroyer, false);
      // gameboard.getBoard()[4][-1] is out of bounds south
      expect(board.getBoard()[4][0].ship).toBe(null);

      board.placeShip([9, 5], carrier, true);
      expect(board.getBoard()[7][5].ship).toBe(null);
      expect(board.getBoard()[8][5].ship).toBe(null);
      expect(board.getBoard()[9][5].ship).toBe(null);
      // gameboard.getBoard()[10][5] is out of bounds east
      // gameboard.getBoard()[11][5] is out of bounds east

      board.placeShip([0, 2], cruiser, true);
      // gameboard.getBoard()[-1][2] is out of bounds west
      expect(board.getBoard()[0][2].ship).toBe(null);
      expect(board.getBoard()[1][2].ship).toBe(null);
    });
  });

  describe('Receiving attacks', () => {
    beforeEach(() => {
      carrier = new Ship(5);
      board.placeShip([5, 5], carrier, true);
    });

    test('Receive an attack but misses a ship', () => {
      board.receiveAttack([1, 1]);
      expect(board.getBoard()[1][1].isHit).toBe(true);
      expect(board.getBoard()[1][1].ship).toBe(null);
      expect(board.getBoard()[4][5].ship.hits).toBe(0);
    });

    test('Receive an attack and hit a ship', () => {
      board.receiveAttack([4, 5]);
      expect(board.getBoard()[4][5].isHit).toBe(true);
      expect(board.getBoard()[4][5].ship).toBe(carrier);
      expect(board.getBoard()[4][5].ship.hits).toBe(1);
    });
  });

  describe('Reporting fleet status', () => {
    beforeEach(() => {
      carrier = new Ship(5);
      battleship = new Ship(4);
      cruiser = new Ship(3);
      submarine = new Ship(3);
      destroyer = new Ship(2);
      board.placeShip([5, 3], carrier, true);
      board.placeShip([5, 4], battleship, true);
      board.placeShip([5, 5], cruiser, true);
      board.placeShip([5, 6], submarine, true);
      board.placeShip([5, 7], destroyer, true);
    });

    test('Checks true if there are still any ship operational', () => {
      expect(board.isFleetOperational()).toBe(true);

      battleship.isSunk();
      expect(board.isFleetOperational()).toBe(true);

      carrier.isSunk();
      cruiser.isSunk();
      expect(board.isFleetOperational()).toBe(true);

      submarine.isSunk();
      expect(board.isFleetOperational()).toBe(true);
    });

    test('Checks false if all ships have sunk', () => {
      battleship.isSunk();
      carrier.isSunk();
      cruiser.isSunk();
      submarine.isSunk();
      destroyer.isSunk();
      expect(board.isFleetOperational()).toBe(false);
    });
  });

  describe('Listing unhit coordinates', () => {
    test('Return unhit coordinates as game progresses', () => {
      expect(board.allUnhitCoordinates()).toContainEqual([0, 0]);
      board.receiveAttack([0, 0]);
      expect(board.allUnhitCoordinates()).not.toContainEqual([0, 0]);
    });
  });
});
