package main
import (
	"time"
	"fmt"
)

func main() {
	ch := make(chan string)
	// chmainrouting := make(chan int)

	// chmainrouting <- 1

	go func() {
		time.Sleep(time.Second * 2)
		ch <- "HELLO"
	}()

	message := <- ch;
	fmt.Println(message);
	// num := <- chmainrouting;
	// fmt.Println(num)

	close(ch)
	// close(chmainrouting)
}