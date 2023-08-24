export default class Cell {
  constructor() {
    this.isHit = false;
    this.ship = null;
  }

  hit() {
    this.isHit = true;
    if (this.ship === null) return false;
    return true;
  }

  assign(ship) {
    this.ship = ship;
  }
}
