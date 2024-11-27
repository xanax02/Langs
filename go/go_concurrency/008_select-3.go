package main
import "fmt"

func main() {
	ch := make(chan int,1)

	select {
	case ch<-69:
		fmt.Println("69 is a nice number")
	default:
		fmt.Println("Channel not ready")
	}

	select {
	case val:=<-ch:
		fmt.Println("Value recieved from channel", val)
	default:
		fmt.Println("reciever not ready")
	}
}