// use std::io; // std -> standard library containg io library

fn main() {

    // variables and mutability //

    // let x: u32= 5;
    // println!("the value of x is {x}");
    // //this will not compile
    // // x = 6;
    // // println!("the value of x is {x}");
//     let mut y: u32 =  6;
//     println!("the value of y is {y}");
//     y = 10;
//     println!("the new value of y is {y}");
//     //constant
//     const THREE_HOURS_IN_SEC: u32 = 60*60*3;
//    //shadowing
//     let z: u32 = 69;
//     let z: u32 = z+1;
//     {
//         let z: u32 = z*2;
//         println!("the value of z is {z}");
//     }
//     println!("the value of z is {z}");
//     // mut vs shadowing
//     let a: &str = "abcd";
//     let a: u32= 123;
//     let mut b: &str= "abcd";
//     // b = 123;  // this will give compile time error

//     // ---------------------------- //

//     // -DataTypes- //

//     // Scaler Type
//     //Interger
//     let guess: u32 = "42".parse().expect("not a number");
//     //Floats
//     let x = 2.0; //f64;
//     let x: f32 = 3.0; //f32;
//     //Boolean
//     let f: bool = true;
//     let u = false;
//     //Character
//     let c: char = 'Z';

//     // Compund Type
//     // Tuple
//     let tup: (i32, f64, u8) = (500, 6.1, 1);
//     let (x,y,z) = tup;
//     println!("the value of y is {y}");
//     //Array
//     let arr = [1,2,3,4,5];
//     let arr: [usize; 6] = [1,2,3,4,5,6];
//     //
//     println!("please enter the index");
//     let mut index: String = String::new();
//     io::stdin()
//         .read_line(&mut index)
//         .expect("failed to read the line");
//     let index: usize = index.trim().parse().expect("Please enter the valid number");
//     let element: usize = arr[index];
//     println!("the value at index {index} is {element}")



//     // ---------------------------- //

//     // -Functions- //

//    println!("Hello, world!");
//    another_function();
//    //paramatric functions
//    another_function2(5);
//    //statement & expressions
//    let x: i32 = 6; // this whole is statement but 6 is expression
//    let y = {
//        let x: i32 = 3;
//        x+1
//    };
//    println!("value of x is {x}");
//    println!("value of y is {y}");
//    //return type
    let x = five();
    println!("the value of x is {x}");

    fn five() -> i32 {
        5
    }
    
    
}

fn another_function()
{
    println!("Another Function");
}

//paramatric function
fn another_function2(x: i32)
{
    println!("the value of param is {x}");
}

