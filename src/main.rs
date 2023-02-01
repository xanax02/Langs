use std::io; // std -> standard library containg io library

fn main() {
    
    let x = 5;
    println!("the value of x is {x}");
    //this will not compile
    // x = 6;
    // println!("the value of x is {x}");

    let mut y: u32 =  6;
    println!("the value of y is {y}");
    y = 10;
    println!("the new value of y is {y}");
}

