'use strict';

class Queue {
  constructor() {
    this._length = 0;
  }

  get length() {
    return this._length;
  }
}

module.exports = Queue;
