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

  _nthItem(n) {
    const {length} = this;

    if (n >= 0 && n < length) {
      if (n <= Math.floor(length / 2)) {
        return this._traverse(n);
      }

      return this._traverseRight(n);
    }
  }

  _traverse(n) {
    let count = 0;
    let {_head: item} = this;

    while (n !== count) {
      item = item.next;
      count += 1;
    }

    return item;
  }

  _traverseRight(n) {
    let count = this.length - (n + 1);
    let {_last: item} = this;

    while (count !== 0) {
      item = item.prev;
      count -= 1;
    }

    return item;
  }

  clear() {
    this._head = null;
    this._last = null;
    this._length = 0;
    return this;
  }

  dequeue() {
    const {_head} = this;

    if (_head) {
      const {next, value} = _head;

      if (next) {
        next.prev = null;
      } else {
        this._last = null;
      }

      this._head = next;
      this._length -= 1;
      return value;
    }

    return undefined;
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

  map(fn) {
    let {_head: current} = this;

    while (current) {
      const {next, value} = current;
      current.value = fn(value);
      current = next;
    }

    return this;
  }

  peekFirst() {
    return this._peek(this._head);
  }

  peekLast() {
    return this._peek(this._last);
  }

  reverse() {
    let {_head: current} = this;

    while (current) {
      const {prev, next} = current;
      current.next = prev;
      current.prev = next;

      if (!prev) {
        this._last = current;
      }

      if (!next) {
        this._head = current;
      }

      current = next;
    }

    return this;
  }

  toArray() {
    const array = [];
    this.forEach(x => array.push(x));
    return array;
  }
}

module.exports = Queue;
