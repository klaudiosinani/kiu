<h1 align="center">
  Kiu
</h1>

<h4 align="center">
  FIFO Queues for ES6
</h4>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/kiu">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/kiu.svg?branch=master">
  </a>
  <a href='https://coveralls.io/github/klaussinani/kiu?branch=master'>
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/klaussinani/kiu/badge.svg?branch=master">
  </a>
</p>

## Description

ES6 implementation of the FIFO queue data structure with TypeScript support.

Visit the [contributing guidelines](https://github.com/klaussinani/kiu/blob/master/contributing.md#translating-documentation) to learn more on how to translate this document into more languages.

## Contents

- [Description](#description)
- [Install](#install)
- [In Depth](#in-depth)
- [Usage](#usage)
- [Development](#development)
- [Related](#related)
- [Team](#team)
- [License](#license)

## Install

### Yarn

```bash
yarn add kiu
```

### NPM

```bash
npm install kiu
```

## In Depth

A queue is a linear data structure, or more abstractly a sequential collection, in which the entities are kept in order and the principal operations are the addition of entities to the rear terminal position, known as `enqueue`, and removal of entities from the front terminal position, known as `dequeue`. This makes the queue a `FIFO`, First-In-First-Out, data structure. In this FIFO data structure, the first element added to the queue will be the first one to be removed. Once a new element is added, all elements that were added previously have to be removed before the new one can. Additionally, a `peekFirst` operation returns the value of the front element without dequeuing it, and a `peakLast` operation returns the value of the rear element, without mutating the queue as well. Kiu FIFO queues use a linear doubly linked list as their backbone, giving an efficient `O(1)` performance for the enqueuing and dequeuing operations.

## Usage

Kiu exposes a chainable API, that can be utilized through a simple and minimal syntax, allowing you to combine methods effectively.

Usage examples can be also found at the [`test`](https://github.com/klaussinani/kiu/tree/master/test) directory.

```js
'use strict';
const {Queue} = require('kiu');

const queue = new Queue();
//=> Queue { head: null, last: null, length: 0 }

queue.isEmpty();
//=> true

queue.enqueue(10);
//=> Queue {
// head: Item { value: 10, next: null, prev: null },
// last: Item { value: 10, next: null, prev: null },
// length: 1 }

queue.isEmpty();
//=> false

queue.peekFirst();
//=> 10

queue
  .enqueue(20)
  .enqueue(30)
  .enqueue(40)
  .enqueue(50);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 50, next: null, prev:
//   Item { value: 40, next: [Circular], prev: [Item] } },
// length: 5 }

queue.includes(30);
//=> true

queue.includes(60);
//=> false

queue.dequeue();
//=> 10

queue.peekFirst();
//=> 20

queue.peekLast();
//=> 50

queue.toArray();
//=> [ 20, 30, 40, 50 ]

queue.rotateRight(1);
//=> Queue {
// head:
//   Item { value: 30, prev: null, next:
//   Item { value: 40, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 20, next: null, prev:
//   Item { value: 50, next: [Circular], prev: [Item] } },
// length: 4 }

queue.toArray();
//=> [ 30, 40, 50, 20 ]

queue.rotateLeft(3);
//=> Queue {
// head:
//   Item { value: 40, prev: null, next:
//   Item { value: 50, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 30, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 4 }

queue.toArray();
//=> [ 40, 50, 20, 30 ]

queue
  .reverse()
  .map(x => x * 10)
  .toArray();
//=> [ 300, 200, 500, 400 ]

queue.nth(2);
//=> 500
```

## API

#### queue.`length`

- Return Type: `Number`

Returns the total number of values in the queue.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: null } },
// last:
//   Item { value: 20, next: null, prev:
//   Item { value: 10, next: [Circular], prev: null } },
// length: 2 }
queue.length;
//=> 2
```

#### queue.`clear()`

- Return Type: `Queue`

Mutates the queue by removing all residing values and returns it empty.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20)
  .enqueue(30);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 30, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 3 }
queue.length;
//=> 3
queue.clear();
//=> Queue { head: null, last: null, length: 0 }
queue.length;
//=> 0
```

#### queue.`dequeue()`

- Return Type: `Any | undefined`

Mutates the queue by removing the value located at the front terminal position. Returns the removed value, if the queue is not empty, or `undefined` if it is.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue.enqueue(10);
//=> Queue {
// head: Item { value: 10, prev: null, next: null }
// last: Item { value: 10, prev: null, next: null }
// length: 1 }
queue.dequeue();
//=> 10
queue.dequeue();
//=> undefined
```

#### queue.`enqueue(value)`

- Return Type: `Queue`

Mutates the queue by inserting a new value at the rear terminal position. Returns the queue itself.

##### **`value`**

- Type: `Any`

Value to insert.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue.enqueue(10);
//=> Queue {
// head: Item { value: 10, prev: null, next: null }
// last: Item { value: 10, prev: null, next: null }
// length: 1 }
queue.enqueue(20).enqueue(30);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 30, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 3 }
queue.length;
//=> 3
```

#### queue.`forEach(fn)`

- Return Type: `Queue`

Traverses the queue, from the front to the rear, and executes the provided `fn` function once for each traversed value, without mutating the queue. Returns the queue itself at the end of the traversal.

##### **`fn`**

- Type: `Function`

Unary function to execute for each traversed value.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20)
  .enqueue(30);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 30, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 3 }
queue.forEach(console.log);
//=> 10
// 20
// 20
```

#### queue.`includes(value)`

- Return Type: `Boolean`

Determines whether the queue includes a certain value, returning `true` or `false` as appropriate.

##### **`value`**

- Type: `Any`

Value to search for.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20)
  .enqueue(30);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 30, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 3 }
queue.includes(10);
//=> true
queue.includes(40);
//=> false
queue.includes(20);
//=> true
```

#### queue.`isEmpty()`

- Return Type: `Boolean`

Determines whether the queue is empty, returning `true` or `false` as appropriate.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue.isEmpty();
//=> true
queue.enqueue(10);
//=> Queue {
// head: Item { value: 10, prev: null, next: null }
// last: Item { value: 10, prev: null, next: null }
// length: 1 }
queue.isEmpty();
//=> false
```

#### queue.`map(fn)`

- Return Type: `Queue`

Traverses the queue, from front to rear, and mutates it by updating each stored value with the result of calling once the provided `fn` function on it. Returns the in-place mutated queue at the end of the traversal.

##### **`fn`**

- Type: `Function`

Unary function that produces a value of the mutated queue.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20)
  .enqueue(30);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 30, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 3 }
queue.map(x => x * 10);
//=> Queue {
// head:
//   Item { value: 100, prev: null, next:
//   Item { value: 200, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 300, next: null, prev:
//   Item { value: 200, next: [Circular], prev: [Item] } },
// length: 3 }
```

#### queue.`nth(n)`

- Return Type: `Any | undefined`

Traverses the queue, from front to rear, and returns the nth value. If the value does not exist, then `undefined` is returned. The queue values follow zero-based numbering, thus the first/initial value corresponds to index 0.

##### **`n`**

- Type: `Number`

Zero-based queue index number.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20)
  .enqueue(30);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 30, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 3 }
queue.nth(0);
//=> 10
queue.nth(2);
//=> 30
queue.nth(3);
//=> undefined
```

#### queue.`peekFirst()`

- Return Type: `Any | undefined`

Returns the first value, located at the front of the queue, without mutating the queue itself. If the queue is empty, then `undefined` is returned.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20)
  .enqueue(30);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 30, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 3 }
queue.peekFirst();
//=> 10
```

#### queue.`peekLast()`

- Return Type: `Any | undefined`

Returns the last value, located at the rear of the queue, without mutating the queue itself. If the queue is empty, then `undefined` is returned.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20)
  .enqueue(30);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 30, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 3 }
queue.peekLast();
//=> 30
```

#### queue.`reverse()`

- Return Type: `Queue`

Mutates the queue by reversing in-place the residing values. The first value becomes the last one, and the last one becomes the first. Returns the reversed queue.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20)
  .enqueue(30);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 30, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 3 }
queue.toArray();
//=> [ 10, 20, 30 ]
queue.reverse();
//=> Queue {
// head:
//   Item { value: 30, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 10, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 3 }
queue.toArray();
//=> [ 30, 20, 10 ]
```

#### queue.`rotateLeft(n)`

- Return Type: `Queue`

Mutates the queue by moving the `n` rear-most values to the front of the queue in a rotating fashion. Returns the queue itself.

##### **`n`**

- Type: `Number`

Number of rear-most values to be rotated.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20)
  .enqueue(30)
  .enqueue(40)
  .enqueue(50);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 50, next: null, prev:
//   Item { value: 40, next: [Circular], prev: [Item] } },
// length: 5 }
queue.toArray();
//=> [ 10, 20, 30, 40, 50 ]
queue.rotateLeft(2);
//=> Queue {
// head:
//   Item { value: 40, prev: null, next:
//   Item { value: 50, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 30, next: null, prev:
//   Item { value: 20, next: [Circular], prev: [Item] } },
// length: 5 }
queue.toArray();
//=> [ 40, 50, 10, 20, 30 ]
```

#### queue.`rotateRight(n)`

- Return Type: `Queue`

Mutates the queue by moving the `n` front-most items to the rear of the queue in a rotating fashion. Returns the queue itself.

##### **`n`**

- Type: `Number`

Number of front-most values to be rotated.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20)
  .enqueue(30)
  .enqueue(40)
  .enqueue(50);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 50, next: null, prev:
//   Item { value: 40, next: [Circular], prev: [Item] } },
// length: 5 }
queue.toArray();
//=> [ 10, 20, 30, 40, 50 ]
queue.rotateRight(2);
//=> Queue {
// head:
//   Item { value: 30, prev: null, next:
//   Item { value: 40, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 20, next: null, prev:
//   Item { value: 10, next: [Circular], prev: [Item] } },
// length: 5 }
queue.toArray();
//=> [ 30, 40, 50, 10, 20 ]
```

#### queue.`toArray()`

- Return Type: `Array<Any>`

The method traverses the queue, from front to rear, and stores each traversed value in an array. The array is returned at the end of the traversal.

```js
const {Queue} = require('kiu');

const queue = new Queue();

queue
  .enqueue(10)
  .enqueue(20)
  .enqueue(30)
  .enqueue(40)
  .enqueue(50);
//=> Queue {
// head:
//   Item { value: 10, prev: null, next:
//   Item { value: 20, prev: [Circular], next: [Item] } },
// last:
//   Item { value: 50, next: null, prev:
//   Item { value: 40, next: [Circular], prev: [Item] } },
// length: 5 }
queue.toArray();
//=> [ 10, 20, 30, 40, 50 ]
```

## Development

For more info on how to contribute to the project, please read the [contributing guidelines](https://github.com/klaussinani/kiu/blob/master/contributing.md).

- Fork the repository and clone it to your machine
- Navigate to your local fork: `cd kiu`
- Install the project dependencies: `npm install` or `yarn install`
- Lint the code and run the tests: `npm test` or `yarn test`

## Related

- [avlbinstree](https://github.com/klaussinani/avlbinstree) - AVL self-balancing binary search trees for ES6
- [binstree](https://github.com/klaussinani/binstree) - Binary search trees for ES6
- [doublie](https://github.com/klaussinani/doublie) - Doubly circular & linear linked lists for ES6
- [mheap](https://github.com/klaussinani/mheap) - Binary min & max heaps for ES6
- [prioqueue](https://github.com/klaussinani/prioqueue) - Priority queues for ES6
- [shtack](https://github.com/klaussinani/shtack) - LIFO Stacks for ES6
- [singlie](https://github.com/klaussinani/singlie) - Singly circular & linear linked lists for ES6

## Team

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)

## License

[MIT](https://github.com/klaussinani/kiu/blob/master/license.md)
