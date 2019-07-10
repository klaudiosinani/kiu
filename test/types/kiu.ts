import { Queue } from '../..';

const queue = new Queue<number>();
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
