// function type exression
let greeter: (a: string) => string;
greeter = ( a: string ) => "world"

// call signature
type DescribableFunction = {
    description: string;
    (args: number): boolean
}

const describeFunction = (fn: DescribableFunction) => {
    console.log(fn.description);
    fn(6)
}

const myFunc = (arg:number) => true;
myFunc.description = "this is always return true"

describeFunction(myFunc);