// basic type alias
type name = string;
let system: name = "alice";

// union type alias
type ID = number | string;

// object type alias
type user = {
    name: string;
    age: number;
    isAdmin: boolean
}

// function type alias
type Greet = (name: string) => string;
const greetUser: Greet = (name) => "hello" + name;

// array and tuple alias
type stringArray = Array<string>
type Point = [number, number]
const coords: Point = [10,20];

//Type Alias with intersection types
type Person = {
    name: string;
    age: number;
}

type Employee = {
    employeeId: number;
    department: string;
}

type Staff = Person & Employee

let StaffMember: Staff = {
    name: "John",
    age: 28,
    employeeId: 69,
    department: "Doe"
}