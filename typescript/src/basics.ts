let obj:any = {x: 0}
// obj.foo();

/////////////////// string
const sysName = "alice"; // auto inferred

///////////////////// functions
function greet(name: string) {
    console.log("HELLO " + name.toUpperCase() + "!!")
}
greet("alice")

function genRandom(): number {
    return Math.random()*10;
}
console.log(genRandom());

///////////////////// contextual typing
const names = ["Alice", "Bob", "Eve"]
names.forEach((name) => {
    console.log(name);
})

//////////////////////  objects
function printName(obj: { first: string; last?: string }) {
    //
}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });