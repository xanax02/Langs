// 1. basic example of creating user object
interface User1 {
  name: string;
  age: number;
  address?: {
    city: string;
    pin: number;
    country: string;
  };
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

//
