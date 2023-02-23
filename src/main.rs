
fn main() 
{
    //-struct-//

    //program without struct

    fn area(width: i32, height: i32) -> i32
    {
        width*height
    }

    let width1: i32 = 30;
    let height1: i32 = 50;

    println!("the area of rectangle is {} square pixels.", area(width1, height1));

    // refactoring with tuple

    fn area1(dimensions: (u32, u32)) ->u32
    {
        dimensions.0 * dimensions.1
    }

    let rect1: (u32, u32) = (30,50);
    println!("the area of rectangle with tuple refactoring is {} square pixels", area1(rect1));

    // refactoring with struct

    struct Rectangle {
        height: u32,
        width: u32
    }

    fn area2(rectangle: &Rectangle) -> u32
    {
        rectangle.width * rectangle.height
    }

    let rect1: Rectangle = Rectangle {
        width: 50,
        height: 30
    };
    println!("the area of rectangle with struct refactoring is {} square pixels", area2(&rect1));

    

}