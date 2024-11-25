package main
import "fmt"

func main() {
	ch := make(chan int, 2)

	ch <- 1;
	ch <- 2;

	fmt.Println(<-ch);
	fmt.Println(<-ch);

	message := make(chan string)

	message <- "hello";
	message <- "world";

	fmt.Println(<-message)
	fmt.Println(<-message)

}