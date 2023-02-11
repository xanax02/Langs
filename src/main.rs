fn main() {
    // println!("hello world");
    // let mut str = "abhay";
    // str = "thakur";
    // println!("{}", str);
    // let mut s = String::from("hello");

    // s.push_str(", world!");
    // println!("{}", s);

    // let mut st: &str = "abhay";
    // let st2: String  = String::from("abhay");

    // st = "thakur";

    // let s1: String = String::from("hello");
    // let s2: String = s1;
    // println!("{}",s1);  //this will not work

    let s1: String = String::from("hello");
    let s2: String = s1.clone();

    println!("s1 = {}, s2 = {}", s1,s2);
}