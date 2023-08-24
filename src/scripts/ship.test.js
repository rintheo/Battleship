import Ship from './ship';

describe('Tests for Ship class', () => {
  let carrier;

  beforeEach(() => {
    carrier = new Ship(5);
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
