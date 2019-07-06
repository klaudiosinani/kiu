'use strict';

class Item {
  constructor(value) {
    this._next = null;
    this._prev = null;
    this._value = value;
  }

  get next() {
    return this._next;
  }
}

module.exports = Item;
