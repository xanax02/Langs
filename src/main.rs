use std::io;

fn main() {

    println!("Guess the number");
    println!("Please input your guess");

    let mut guess: String = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to get the line");

    println!("You have guessed {guess}");

}