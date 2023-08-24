import Ship from './ship';

describe('Tests for Ship class', () => {
  const carrier = new Ship(5);

  test('Creates a new Ship of length 5', () => {
    expect(carrier).toHaveLength(5);
    expect(carrier.hits).toBe(0);
    expect(carrier.hasSunk).toBe(false);
  });

  test('Hit ship once', () => {
    carrier.hit();
    expect(carrier.hits).toBe(1);
  });

  test('Hit ship until sunk', () => {
    while (!carrier.hasSunk) {
      carrier.hit();
    }
    expect(carrier.hits).toBe(carrier.length);
    expect(carrier.hasSunk).toBe(true);
  });
});
