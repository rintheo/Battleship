export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.hasPositioned = false;
    this.hasSunk = false;
  }

  hit() {
    this.hits += 1;
    if (this.length === this.hits) this.isSunk();
  }

  isSunk() {
    this.hasSunk = true;
  }

  isPositioned() {
    this.hasPositioned = true;
  }
}
