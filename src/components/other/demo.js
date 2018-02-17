const API = 'http://...';

export default class Box {
  constructor() {
    this.x = 2;
    this.y = 5;
  }

  getDimensions() {
    return this.x * this.y;
  }
}

