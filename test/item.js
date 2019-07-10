'use strict';
const test = require('ava');
const Item = require('../src/item');

test('value', t => {
  const item = new Item(10);
  t.is(item.value, 10);
  item.value = 20;
  t.is(item.value, 20);
});

test('next', t => {
  const item = new Item(10);
  t.is(item.next, null);
  item.next = new Item(20);
  t.deepEqual(item.next, new Item(20));
  t.is(item.next.value, 20);
  t.is(item.next.next, null);
});

test('prev', t => {
  const item = new Item(10);
  t.is(item.prev, null);
  item.prev = new Item(20);
  t.deepEqual(item.prev, new Item(20));
  t.is(item.prev.value, 20);
  t.is(item.prev.prev, null);
});
