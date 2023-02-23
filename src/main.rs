
// fn main() 
// {
    //-struct-//

    //program without struct

    // fn area(width: i32, height: i32) -> i32
    // {
    //     width*height
    // }

    // let width1: i32 = 30;
    // let height1: i32 = 50;

    // println!("the area of rectangle is {} square pixels.", area(width1, height1));

    // // refactoring with tuple

    // fn area1(dimensions: (u32, u32)) ->u32
    // {
    //     dimensions.0 * dimensions.1
    // }

    // let rect1: (u32, u32) = (30,50);
    // println!("the area of rectangle with tuple refactoring is {} square pixels", area1(rect1));

    // refactoring with struct
    // #[derive(Debug)]
    // struct Rectangle {
    //     height: u32,
    //     width: u32
    // }

    // fn area2(rectangle: &Rectangle) -> u32
    // {
    //     rectangle.width * rectangle.height
    // }

    // let scale: u32 = 2; 
    // let rect1: Rectangle = Rectangle {
    //     width: 50,
    //     height: dbg!(scale*30)
    // };
    // println!("the area of rectangle with struct refactoring is {} square pixels", area2(&rect1));

    // println!("rect1 is {:#?}", rect1);
    // dbg!(&rect1);
// }


//Method Syntax//

#[derive(Debug)]
struct Rectangle {
    height: u32,
    width: u32
}

impl Rectangle {
    // fn area(&self) -> u32
    // {
    //     self.height * self.width
    // }
    fn can_hold(&self, other: &Rectangle) -> bool
    {
        self.width > other.width && self.height > other.height
    }
}

impl Rectangle {
    fn area(&self) ->u32{
        self.height * self.width
    }
}

fn main ()
{
    let rect1: Rectangle = Rectangle{
        height: 30,
        width: 50,
    };
    println!("the area of rect1 is {}", rect1.area());
    let rect2: Rectangle = Rectangle { height: 10, width: 40 };
    let rect3: Rectangle = Rectangle { height: 40, width: 60 };
    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));
}