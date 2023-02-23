
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
    

}