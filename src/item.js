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

  set next(item) {
    this._next = item;
  }

  get prev() {
    return this._prev;
  }

  set prev(item) {
    this._prev = item;
  }
}

module.exports = Item;
