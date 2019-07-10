'use strict';
const test = require('ava');
const {Queue} = require('../.');

test('enqueue', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.is(queue._head.value, 10);
  t.is(queue._head.next, null);
  t.is(queue._head.prev, null);
  t.is(queue._last.value, 10);
  t.is(queue._last.next, null);
  t.is(queue._last.prev, null);
});

test('length', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.is(queue.length, 1);
});

test('clear', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.deepEqual(queue.clear(), queue);
  t.deepEqual(queue.clear(), new Queue());
  t.is(queue._head, null);
  t.is(queue._last, null);
});

test('forEach', t => {
  const queue = new Queue();
  queue.enqueue(10);
  const array = [];
  t.deepEqual(queue.forEach(x => array.push(x)), queue);
  t.deepEqual(array, [10]);
});

test('includes', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.true(queue.includes(10));
  t.false(queue.includes(20));
});

test('isEmpty', t => {
  const queue = new Queue();
  t.true(queue.isEmpty());
  queue.enqueue(10);
  t.false(queue.isEmpty());
});

test('map', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.deepEqual(queue.map(x => x * 10), queue);
  t.is(queue._head.value, 100);
  t.is(queue._head.next, null);
  t.is(queue._head.prev, null);
  t.is(queue._last.value, 100);
  t.is(queue._last.next, null);
  t.is(queue._last.prev, null);
});

test('nth', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.is(queue.nth(0), 10);
  t.is(queue.nth(1), undefined);
});

test('peekFirst', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.is(queue.peekFirst(), 10);
});

test('peekLast', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.is(queue.peekLast(), 10);
});

test('reverse', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.deepEqual(queue.reverse(), queue);
  t.is(queue._head.value, 10);
  t.is(queue._head.next, null);
  t.is(queue._head.prev, null);
  t.is(queue._last.value, 10);
  t.is(queue._last.next, null);
  t.is(queue._last.prev, null);
});

test('rotateLeft', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.deepEqual(queue.rotateLeft(-1), queue);
  t.is(queue._head.value, 10);
  t.is(queue._head.next, null);
  t.is(queue._head.prev, null);
  t.is(queue._last.value, 10);
  t.is(queue._last.next, null);
  t.is(queue._last.prev, null);
  t.deepEqual(queue.rotateLeft(0), queue);
  t.is(queue._head.value, 10);
  t.is(queue._head.next, null);
  t.is(queue._head.prev, null);
  t.is(queue._last.value, 10);
  t.is(queue._last.next, null);
  t.is(queue._last.prev, null);
  t.deepEqual(queue.rotateLeft(1), queue);
  t.is(queue._head.value, 10);
  t.is(queue._head.next, null);
  t.is(queue._head.prev, null);
  t.is(queue._last.value, 10);
  t.is(queue._last.next, null);
  t.is(queue._last.prev, null);
});

test('rotateRight', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.deepEqual(queue.rotateRight(-1), queue);
  t.is(queue._head.value, 10);
  t.is(queue._head.next, null);
  t.is(queue._head.prev, null);
  t.is(queue._last.value, 10);
  t.is(queue._last.next, null);
  t.is(queue._last.prev, null);
  t.deepEqual(queue.rotateRight(0), queue);
  t.is(queue._head.value, 10);
  t.is(queue._head.next, null);
  t.is(queue._head.prev, null);
  t.is(queue._last.value, 10);
  t.is(queue._last.next, null);
  t.is(queue._last.prev, null);
  t.deepEqual(queue.rotateRight(1), queue);
  t.is(queue._head.value, 10);
  t.is(queue._head.next, null);
  t.is(queue._head.prev, null);
  t.is(queue._last.value, 10);
  t.is(queue._last.next, null);
  t.is(queue._last.prev, null);
});

test('toArray', t => {
  const queue = new Queue();
  queue.enqueue(10);
  t.deepEqual(queue.toArray(), [10]);
});
