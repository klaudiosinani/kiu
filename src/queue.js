'use strict';

class Queue {
  constructor() {
    this._head = null;
    this._length = 0;
    this._last = null;
  }

  get length() {
    return this._length;
  }

  _peek(item) {
    if (item) {
      return item.value;
    }

    return undefined;
  }

  peekFirst() {
    return this._peek(this._head);
  }
}

module.exports = Queue;
