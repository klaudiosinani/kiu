'use strict';
const test = require('ava');
const {Queue} = require('../.');

const queue = new Queue();

test('length', t => {
  t.is(queue.length, 0);
});

test('clear', t => {
  t.deepEqual(queue.clear(), queue);
  t.deepEqual(queue.clear(), new Queue());
  t.is(queue.length, 0);
  t.is(queue._head, null);
  t.is(queue._last, null);
});

test('dequeue', t => {
  t.is(queue.dequeue(), undefined);
  t.is(queue._head, null);
  t.is(queue._last, null);
});

test('forEach', t => {
  const array = [];
  t.deepEqual(queue.forEach(x => array.push(x)), queue);
  t.deepEqual(array, []);
  t.is(queue._head, null);
  t.is(queue._last, null);
});

test('includes', t => {
  t.false(queue.includes(10));
});

test('isEmpty', t => {
  t.true(queue.isEmpty());
});

test('map', t => {
  t.deepEqual(queue.map(x => x * 10), queue);
  t.is(queue._head, null);
  t.is(queue._last, null);
});

test('nth', t => {
  t.is(queue.nth(0), undefined);
  t.is(queue.nth(1), undefined);
});

test('peekFirst', t => {
  t.is(queue.peekFirst(), undefined);
});

test('peekLast', t => {
  t.is(queue.peekLast(), undefined);
});

test('reverse', t => {
  t.deepEqual(queue.reverse(), queue);
});

test('rotateLeft', t => {
  t.deepEqual(queue.rotateLeft(-1), queue);
  t.deepEqual(queue.rotateLeft(0), queue);
  t.deepEqual(queue.rotateLeft(1), queue);
});

test('rotateRight', t => {
  t.deepEqual(queue.rotateRight(-1), queue);
  t.deepEqual(queue.rotateRight(0), queue);
  t.deepEqual(queue.rotateRight(1), queue);
});

test('toArray', t => {
  t.deepEqual(queue.toArray(), []);
});
