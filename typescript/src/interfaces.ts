//2. interface for other interface
interface Address {
  city: string;
  pin: number;
  country: string;
}

// 1. basic example of creating user object
interface User1 {
  name: string;
  age: number;
  address?: Address;
}

let user: User1 = {
  name: "abhay",
  age: 22,
  address: {
    city: "pune",
    pin: 411061,
    country: "india",
  },
};

//optional fields
let user2: User1 = {
  name: "ahbay",
  age: 22,
};

///////////////////////
// ../
//

// implementing interfaces
// interfaces can be used to create objects as well as classes

interface People1 {
  name: string;
  age: number;
  greet: () => string;
  //or
  // greet(): string
}

let user3: People1 = {
  name: "abay",
  age: 22,
  greet: () => "hello",
};

//class implementing People1
class Manager1 implements People1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    //can add extra things aprt from interface datatypes
  }

  greet() {
    return "hello" + this.name;
  }
}

let manager1 = new Manager1("John", 30);
console.log(manager1.age);

//shorthand for implentation
class Manager2 implements People1 {
  constructor(public name: string, public age: number) {}

  greet = () => "string";
}

////////////

// only interfaces are implemented
// classes and interface can be extended but to the class and interface respectively .]
// not from class to interface or vice verse
