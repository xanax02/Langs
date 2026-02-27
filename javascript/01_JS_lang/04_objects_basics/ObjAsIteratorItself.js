let range = {
  from: 1,
  to: 10,

  [Symbol.iterator]: function () {
    this.current = this.from;
    this.last = this.to;
    return this;
  },

  next() {
    if (this.current <= this.last) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  console.log(num);
}
