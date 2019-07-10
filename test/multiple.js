'use strict';
const test = require('ava');
const {Queue} = require('../.');

test('enqueue', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.is(queue._head.value, 10);
  t.is(queue._head.next.value, 20);
  t.is(queue._head.next.next.value, 30);
  t.is(queue._head.next.next.next.value, 40);
  t.is(queue._head.next.next.next.next.value, 50);
  t.is(queue._head.next.next.next.next.next, null);
  t.is(queue._last.value, 50);
  t.is(queue._last.prev.value, 40);
  t.is(queue._last.prev.prev.value, 30);
  t.is(queue._last.prev.prev.prev.value, 20);
  t.is(queue._last.prev.prev.prev.prev.value, 10);
  t.is(queue._last.prev.prev.prev.prev.prev, null);
});

test('length', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.is(queue.length, 5);
});

test('clear', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.deepEqual(queue.clear(), queue);
  t.deepEqual(queue.clear(), new Queue());
  t.is(queue._head, null);
  t.is(queue._last, null);
});

test('dequeue', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.is(queue.dequeue(), 10);

  t.is(queue._head.value, 20);
  t.is(queue._head.next.value, 30);
  t.is(queue._head.next.next.value, 40);
  t.is(queue._head.next.next.next.value, 50);
  t.is(queue._head.next.next.next.next, null);
  t.is(queue._last.value, 50);
  t.is(queue._last.prev.value, 40);
  t.is(queue._last.prev.prev.value, 30);
  t.is(queue._last.prev.prev.prev.value, 20);
  t.is(queue._last.prev.prev.prev.prev, null);

  t.is(queue.dequeue(), 20);

  t.is(queue._head.value, 30);
  t.is(queue._head.next.value, 40);
  t.is(queue._head.next.next.value, 50);
  t.is(queue._head.next.next.next, null);
  t.is(queue._last.value, 50);
  t.is(queue._last.prev.value, 40);
  t.is(queue._last.prev.prev.value, 30);
  t.is(queue._last.prev.prev.prev, null);

  t.is(queue.dequeue(), 30);

  t.is(queue._head.value, 40);
  t.is(queue._head.next.value, 50);
  t.is(queue._head.next.next, null);
  t.is(queue._last.value, 50);
  t.is(queue._last.prev.value, 40);
  t.is(queue._last.prev.prev, null);

  t.is(queue.dequeue(), 40);

  t.is(queue._head.value, 50);
  t.is(queue._head.next, null);
  t.is(queue._last.value, 50);
  t.is(queue._last.prev, null);

  t.is(queue.dequeue(), 50);

  t.is(queue._head, null);
  t.is(queue._last, null);

  t.is(queue.dequeue(), undefined);
});

test('forEach', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  const array = [];
  t.deepEqual(queue.forEach(x => array.push(x)), queue);
  t.deepEqual(array, [10, 20, 30, 40, 50]);
});

test('includes', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.true(queue.includes(10));
  t.true(queue.includes(20));
  t.false(queue.includes(80));
});

test('isEmpty', t => {
  const queue = new Queue();
  t.true(queue.isEmpty());
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.false(queue.isEmpty());
});

test('map', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.deepEqual(queue.map(x => x * 10), queue);
  t.is(queue._head.value, 100);
  t.is(queue._head.next.value, 200);
  t.is(queue._head.next.next.value, 300);
  t.is(queue._head.next.next.next.value, 400);
  t.is(queue._head.next.next.next.next.value, 500);
  t.is(queue._head.next.next.next.next.next, null);
  t.is(queue._last.value, 500);
  t.is(queue._last.prev.value, 400);
  t.is(queue._last.prev.prev.value, 300);
  t.is(queue._last.prev.prev.prev.value, 200);
  t.is(queue._last.prev.prev.prev.prev.value, 100);
  t.is(queue._last.prev.prev.prev.prev.prev, null);
});

test('nth', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.is(queue.nth(-1), undefined);
  t.is(queue.nth(0), 10);
  t.is(queue.nth(1), 20);
  t.is(queue.nth(2), 30);
  t.is(queue.nth(3), 40);
  t.is(queue.nth(4), 50);
  t.is(queue.nth(5), undefined);
});

test('peekFirst', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.is(queue.peekFirst(), 10);
});

test('peekLast', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.is(queue.peekLast(), 50);
});

test('reverse', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.deepEqual(queue.reverse(), queue);
  t.is(queue._head.value, 50);
  t.is(queue._head.next.value, 40);
  t.is(queue._head.next.next.value, 30);
  t.is(queue._head.next.next.next.value, 20);
  t.is(queue._head.next.next.next.next.value, 10);
  t.is(queue._head.next.next.next.next.next, null);
  t.is(queue._last.value, 10);
  t.is(queue._last.prev.value, 20);
  t.is(queue._last.prev.prev.value, 30);
  t.is(queue._last.prev.prev.prev.value, 40);
  t.is(queue._last.prev.prev.prev.prev.value, 50);
  t.is(queue._last.prev.prev.prev.prev.prev, null);
});

test('rotateLeft', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.deepEqual(queue.rotateLeft(2), queue);
  t.is(queue._head.value, 40);
  t.is(queue._head.next.value, 50);
  t.is(queue._head.next.next.value, 10);
  t.is(queue._head.next.next.next.value, 20);
  t.is(queue._head.next.next.next.next.value, 30);
  t.is(queue._head.next.next.next.next.next, null);
  t.is(queue._last.value, 30);
  t.is(queue._last.prev.value, 20);
  t.is(queue._last.prev.prev.value, 10);
  t.is(queue._last.prev.prev.prev.value, 50);
  t.is(queue._last.prev.prev.prev.prev.value, 40);
  t.is(queue._last.prev.prev.prev.prev.prev, null);
  t.deepEqual(queue.toArray(), [40, 50, 10, 20, 30]);
});

test('rotateRight', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.deepEqual(queue.rotateRight(2), queue);
  t.is(queue._head.value, 30);
  t.is(queue._head.next.value, 40);
  t.is(queue._head.next.next.value, 50);
  t.is(queue._head.next.next.next.value, 10);
  t.is(queue._head.next.next.next.next.value, 20);
  t.is(queue._head.next.next.next.next.next, null);
  t.is(queue._last.value, 20);
  t.is(queue._last.prev.value, 10);
  t.is(queue._last.prev.prev.value, 50);
  t.is(queue._last.prev.prev.prev.value, 40);
  t.is(queue._last.prev.prev.prev.prev.value, 30);
  t.is(queue._last.prev.prev.prev.prev.prev, null);
  t.deepEqual(queue.toArray(), [30, 40, 50, 10, 20]);
});

test('toArray', t => {
  const queue = new Queue();
  queue
    .enqueue(10)
    .enqueue(20)
    .enqueue(30)
    .enqueue(40)
    .enqueue(50);

  t.deepEqual(queue.toArray(), [10, 20, 30, 40, 50]);
});
