function Component1(a, b) {
  console.log("from comp 1", a, b);
}

function Component2(a) {
  console.log("from comp2", a);
}

function HOCLogging(component) {
  return function wrappedComponet(...args) {
    console.log("from hoc logic");

    component(...args);
  };
}

const wrappedComponent1 = HOCLogging(Component1);
const wrappedComponent2 = HOCLogging(Component2);

wrappedComponent1("hello", "world");
wrappedComponent2("hello");
