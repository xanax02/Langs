package main
import (
	"fmt"
)

//interface
type Speaker interface {
	Speak() string
}

type Dog struct {}

//dog will implement Speaker interface by providing the speak method
func (d Dog) Speak() string {
	return "WOOF.."
}

func main() {
	var s Speaker
	s = Dog{} // s can hold dog as it has implemented Speaker interface
	fmt.Println(s.Speak())
}