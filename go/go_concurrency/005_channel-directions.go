package main

import "fmt"

func ping(pings chan <- string, msg string) { //only accept sending value
	pings <- msg;
}

func pong(pings <-chan string, pongs chan<- string) {
	msg := <-pings
	pongs<- msg
}

func main() {
	pings := make(chan string, 1)
	pongs := make(chan string, 1)

	ping(pings, "Message Passed")
	pong(pings, pongs)

	fmt.Println(<-pongs)
}