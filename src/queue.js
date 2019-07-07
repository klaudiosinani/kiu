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

  clear() {
    this._head = null;
    this._last = null;
    this._length = 0;
    return this;
  }

  isEmpty() {
    return !this._head && !this._last && this._length === 0;
  }

  peekFirst() {
    return this._peek(this._head);
  }

  peekLast() {
    return this._peek(this._last);
  }
}

module.exports = Queue;
