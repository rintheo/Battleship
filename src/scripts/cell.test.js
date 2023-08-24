import Cell from './cell';

describe('Tests for class Cell', () => {
  let cell;

  beforeEach(() => {
    cell = new Cell();
  });

  test('Initialize a cell for a new GameBoard', () => {
    expect(cell.isHit).toBe(false);
    expect(cell.ship).toBe(null);
  });

  describe('With no ship', () => {
    test('Cell is hit and misses ship', () => {
      cell.hit();
      expect(cell.ship).toBe(null);
      expect(cell.isHit).toBe(true);
      expect(cell.hit()).toBe(false);
    });
  });

  describe('With a ship', () => {
    beforeEach(() => {
      const ship = 'mock ship';
      cell.assign(ship);
    });

    test('Cell is hit and a ship', () => {
      cell.hit();
      expect(cell.ship).not.toBe(null);
      expect(cell.isHit).toBe(true);
      expect(cell.hit()).toBe(true);
    });
  });
});
