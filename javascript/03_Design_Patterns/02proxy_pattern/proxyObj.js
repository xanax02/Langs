const person = {
  name: "abhay",
  age: 23,
  nationality: "indian",
};

const proxyPerson = new Proxy(person, {
  get(obj, prop) {
    return obj[prop];
  },
  set(obj, prop, value) {
    obj[prop] = value;
  },
});

proxyPerson.age = 24;
console.log(proxyPerson.age);
