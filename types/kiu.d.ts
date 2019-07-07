declare namespace queue {
  export interface Constructor {
    new <T = any>(): Instance<T>;
  }

  export interface Instance<T> {
    peekFirst(): T | undefined;
  }
}

declare namespace kiu {
  export interface Queue<T = any> extends queue.Instance<T> {}
}

declare const kiu: {
  Queue: queue.Constructor;
};

export = kiu;
