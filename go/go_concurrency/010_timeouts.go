package main

import (
	"fmt"
	"time"
)

func main() {

	c1 := make(chan string ,1)

	go func() {
		time.Sleep(2 * time.Second)
		c1 <- "success"
	}()

	select {
	case <-c1:
		fmt.Println("Value recieved from chan")
	case <-time.After(1* time.Second):
		fmt.Println("Timedout")
	}
}