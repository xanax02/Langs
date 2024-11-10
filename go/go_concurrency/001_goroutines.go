package main
import (
	"fmt"
	"time"
)

func f(str string) {
	for i:= 0; i<3; i++ {
		fmt.Println(str, ":", i)
	}
}

func main() {
	f("direct")

	go f("goroutine")

	go func(msg string) {
		fmt.Println(msg)
	}("Going")

	time.Sleep(time.Second)
	fmt.Println("done")
}