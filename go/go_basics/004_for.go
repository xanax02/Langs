package main
import "fmt"

func main() {

	for i := 1; i<10; i++ {
		fmt.Println(i)
	}

	fmt.Println("range")

	// range
	// for i := range 10 {
	// 	fmt.Println(i)
	// }

	// init and post statement are optional
	sum := 1
	for  sum < 30  { // same as while
		sum+=sum
	}

	fmt.Println(sum)
}