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

fn deliver_order() {}

mod back_of_house
{
    fn fix_incorrect() {
        cook_order();
        super::deliver_order();
    }

    fn cook_order() {}

    pub struct Breakfast {
        pub toast: String,
        seasonal_fruit: String,
    }

    impl Breakfast {
        pub fn summer(toast: &str) -> Breakfast {
            Breakfast { toast: String::from(toast), seasonal_fruit: String::from("Peaches") }
        }
    }
}

pub fn eat_in_restaurant() 
{
    //Absolute path
    crate::front_of_house::hoisting::add_to_waitlist();

    //Relative path
    front_of_house::hoisting::add_to_waitlist();

    let mut meal = back_of_house::Breakfast::summer("Rye");
    meal.toast = String::from("Wheat");
    println!("I'd like {} toast please", meal.toast);
}