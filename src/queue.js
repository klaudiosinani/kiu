'use strict';

class Queue {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  get length() {
    return this._length;
  }
}

module.exports = Queue;
