let counter = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("Only one instance is allowed");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singleCounter = Object.freeze(new Counter());
export default singleCounter;
