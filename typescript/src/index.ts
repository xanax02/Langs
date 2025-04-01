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