export default class Cell {
  constructor() {
    this.isHit = false;
    this.ship = null;
  }

  hit() {
    this.isHit = true;
  }

  assign(ship) {
    this.ship = ship;
  }
}
