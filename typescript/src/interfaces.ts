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
