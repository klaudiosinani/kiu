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

Come over to [Twitter](https://twitter.com/klaussinani) to share your thoughts on the project.

Visit the [contributing guidelines](https://github.com/klaussinani/kiu/blob/master/contributing.md#translating-documentation) to learn more on how to translate this document into more languages.

## Contents

- [Description](#description)
- [Install](#install)
- [In Depth](#in-depth)
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
