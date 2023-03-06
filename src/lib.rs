mod front_of_house 
{
    pub mod hoisting
    {
        pub fn add_to_waitlist() {}
        pub fn seat_at_table() {}
    }

    mod serving
    {
        fn take_order() {}
        fn serve_order() {}
        fn take_payment() {}
    }
}

pub fn eat_in_restaurant() 
{
    //Absolute path
    crate::front_of_house::hoisting::add_to_waitlist();

    //Relative path
    front_of_house::hoisting::add_to_waitlist();
}