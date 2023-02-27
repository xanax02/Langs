fn main ()
{
    enum IpAddKind {
        V4,
        V6,
    }

    let four = IpAddKind::V4;
    let six = IpAddKind::V6;

    fn route(IpAdd: IpAddKind) {}

    route(IpAddKind::V4);

    enum IpAddKind2 {
        V4(u8,u8,u8,u8),
        V6(String),
    }

    let four = IpAddKind2::V4(127,0,0,1);
    let six: IpAddKind2 = IpAddKind2::V6(String::from("::1"));

    enum Message {
        Quit,
        Move{x: i32, y: i32},
        Write(String),
        ChangeColor(i32, i32, i32),
    }

    impl Message {
        fn call(&self)
        {
            // method body would be defined here
        }
    }

    let m = Message::Write(String::from("hello"));
    m.call();


}