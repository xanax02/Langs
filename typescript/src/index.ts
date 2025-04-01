const x: number = 1

function greet(name: string): string {
    return "hello" + name;
}

function runAfter1Sec(fn: () => void): void {
    setTimeout(() => {
        fn()
    }, 1000)
}


//interfaces
interface Address {
  pin: number;
  city: string;
  country: string;
}

interface User {
    name: string
    age: number,
    address?: Address
}

let user1: User = {
    name: 'abhay',
    age: 22,
    address: {
        pin: 121212,
        city: 'Pune',
        country: 'India'
    }
}

let user2: User = {
    name: "Thakur",
    age: 22
}

const isLegal = (user: User): boolean => {
    return user.age >= 18 ? true : false
}

interface Office {
    address: Address
}

// Implementing interface
interface Person {
    name: string,
    age: number,
    // greet: () => string,
    isLegal(): boolean,

    // greet2(): string
}

// const person1: Person = {
//     name: "Abhay",
//     age: 22,
//     // greet: () => "HEllo"
// }

// console.log(person1.greet())


// class implementing interface
class Manager implements Person {

    // name: string;
    // age: number;
    // number: string; //can have extra fields

    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    //     this.number = "1234567890"
    // }

    constructor(public name: string, public age: number) {} //both means same

    isLegal(): boolean {
        return this.age > 18
    }

}

class Ceo extends Manager {
    constructor() {
        super("thakur", 25)
    }
}

//object of Manger class
let userManager = new Manager("John", 30)
console.log("age", userManager.age)