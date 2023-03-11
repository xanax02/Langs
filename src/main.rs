// use std::io::{self, Write};
// use std::collections::*;

fn main()
{
   let mut v: Vec<i32> = Vec::new();
   v.push(100);
   v.push(2000);

   let mut v1 = vec![1,2,3,4];

   let first: &i32 = &v1[0];
   println!("the value of first element is: {first}") ;

   let mut v2: Vec<i32> = vec![1,2,3,4,5];
   let last = v2.get(1000);

   match last {
    Some(last) => println!("the value of last element is {last}"),
    None => println!("No such value exist for index please check the index")
   }
}