package main

import "fmt"

func main() {

	jobs := make(chan int, 5)
	done := make(chan bool)

	go func() {
		for {
			j, more := <- jobs;
			if more {
				fmt.Println("recieved job", j)
			} else {
				fmt.Println("recieved all jobs")
				done <- true
				return
			}
		}
	}()

	for j := 1; j <=3; j++ {
		jobs<-j;
		fmt.Println("Jobs sent")
	}
	close (jobs)
	fmt.Println("closed all jobs")

	<-done

	_,ok := <-jobs
	fmt.Println("recieved more jobs", ok)
}