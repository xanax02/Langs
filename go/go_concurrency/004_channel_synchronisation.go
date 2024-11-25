package main

import (
	"fmt"
	"time"
)

func worker(done chan bool) {
	fmt.Print("Working...")
	time.Sleep(time.Second)
	fmt.Println("DONE")

	done <- true
}

func main() {

	done := make(chan bool,1)

	go worker(done)
	<-done // synchronising go routines
	
	fmt.Println("Exited main routine")

}