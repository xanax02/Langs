// A mixin is an object that we can use in order to add reusable functionality to another object or class,
//  without using inheritance.
// We can’t use mixins on their own:
// their sole purpose is to add functionality to objects or classes without inheritance.

// core class
class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogMixin = {
  bark() {
    console.log("bark");
  },
  play() {
    console.log("play");
  },
  walk() {
    super.walk();
  },
};

// Object.assign(Dog.prototype, dogMixin);

//mixin themself can use inheritance
const mammalMixin = {
  walk() {
    console.log("walk");
  },
  sleep() {
    console.log("sleep");
  },
};

Object.assign(dogMixin, mammalMixin);

Object.assign(Dog.prototype, dogMixin);

const dog = new Dog("Buddy");
dog.bark();
dog.walk();
dog.sleep();

// An example of a mixin in the real world is visible on the Window interface in a browser environment.
// The Window object implements many of its properties from the WindowOrWorkerGlobalScope and WindowEventHandlers mixins,
// which allow us to have access to properties such as setTimeout and setInterval, indexedDB, and isSecureContext.

// Mixins allow us to easily add functionality to objects without inheritance by
// injecting functionality into an object’s prototype. Modifying an object’s prototype
// is seen as bad practice, as it can lead to prototype pollution and a level of uncertainty
// regarding the origin of our functions.
