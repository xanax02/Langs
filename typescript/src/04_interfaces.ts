// Basic Interface
interface UserBasic {
    name: string;
    age: number;
    isAdmin: boolean;
}
const userBasic: UserBasic ={ name: "John", age: 69, isAdmin: true }

// Optional Props
interface UserOptional {
    name: string;
    age: number;
    isAdmin? : boolean
}
const userOPtional: UserOptional = { name: "John", age: 69 }

// ReadOnly 
interface UserReadOnly {
    readonly id: number;
    name: string;
    age: number;
}
const userReadOnly: UserReadOnly = { id: 1234, name: "John", age: 69 }
userReadOnly.age = 70;
// userReadOnly.id = 1; will give error

// Entending interface
interface PersonParent {
    name: string;
    age: number;
}

interface EmployeeChild extends PersonParent {
    employeeId :number;
}

const employeeExnteded: EmployeeChild = {
   name: "John",
   age: 69,
   employeeId: 1234
}

// class Interface

interface AnimalInterface {
    name: string;
    sound(): void;
}

class DogInterfacedClass implements AnimalInterface {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log("Woof")
    }
}