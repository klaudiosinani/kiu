'use strict';
const Item = require('./item');

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

  enqueue(value) {
    const item = new Item(value);

    if (this.isEmpty()) {
      this._head = item;
    } else {
      item.prev = this._last;
      this._last.next = item;
    }

    this._last = item;
    this._length += 1;
    return this;
  }

  forEach(fn) {
    let {_head: item} = this;

    while (item) {
      fn(item.value);
      item = item.next;
    }

    return this;
  }

  includes(value) {
    let {_head: item} = this;

    while (item) {
      if (item.value === value) {
        return true;
      }

      item = item.next;
    }

    return false;
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
