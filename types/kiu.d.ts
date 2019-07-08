declare namespace queue {
  export interface Constructor {
    new <T = any>(): Instance<T>;
  }

  export interface Instance<T> {
    readonly length: number;
    clear(): this;
    dequeue(): T | undefined;
    enqueue(value: T): this;
    forEach(fn: (x: T) => void): this;
    includes(value: T): boolean;
    isEmpty(): boolean;
    map<U>(fn: (value: T) => U): Instance<U>;
    peekFirst(): T | undefined;
    peekLast(): T | undefined;
    reverse(): this;
    toArray(): T[];
  }
}

declare namespace kiu {
  export interface Queue<T = any> extends queue.Instance<T> {}
}

declare const kiu: {
  Queue: queue.Constructor;
};

export = kiu;
