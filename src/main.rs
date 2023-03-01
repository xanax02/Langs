fn main ()
{
    /* ENUM */
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

    /* MATCH CONTROL FLOW */
    enum Coin {
        Penny,
        Nickle,
        Dime,
        Quater
    }

    fn value_in_cents(coin: Coin) -> u8
    {
        match coin 
        {
            Coin::Penny => 1,
            Coin::Nickle=>5,
            Coin::Dime=>10,
            Coin::Quater=>25,
        }
    }

    // Pattern that bind to values
    #[derive(Debug)]
    enum UsState {
        Alabama,
        Alaska,
        // --smip
    }

    enum Coin2 {
        Penny,
        Nickle,
        Dime,
        Quater(UsState)
    }

    fn value_in_cents2(coin: Coin2) -> u8
    {
        match coin {
            Coin2::Penny => 1,
            Coin2::Nickle => 5,
            Coin2::Dime => 10,
            Coin2::Quater(state) => {
                println!("State quater from {:?}!", state);
                25
            }
        }
    }

    //Catch-all pattern and _ placeholder
    let dice_roll = 9;
    match dice_roll {
        3 => add_fancy_hat(),
        7 => remove_fancy_hat(),
        other => move_player(other), // when we are binding the value to move_player function
        _ => reroll(), // when catch_all values are not required
        _ => () // when nothing is required to be done for catch all values
    }

    fn add_fancy_hat() {}
    fn remove_fancy_hat() {}
    fn move_player(num: i32) {}
    fn reroll() {}

    /* CONCISE CONTROL FLOW WITH IF LET */
    let configure_max = Some(3u8);
    match configure_max {
        Some(max) => println!("The maximum is configured to be {}", max),
        _ => (),
    }

}