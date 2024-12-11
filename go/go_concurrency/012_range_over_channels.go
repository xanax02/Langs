package main

import "fmt"

func main() {

	queue := make(chan string, 2)
	queue <- "one"
	queue <- "two"
	close(queue)

	for rangeWaalaVar := range queue {
		fmt.Println(rangeWaalaVar)
	}

	// fmt.Println(<-queue)
	// fmt.Println(<-queue)
}