package main
import "fmt"

func main() {
	var a[2]string
	a[0] = "Hello"
	a[1] = "World"
	fmt.Println(a)

	primes := [6]int{2,3,5,7,11,13}
	fmt.Println(primes)

	b := [...]int{69,69,69}
	fmt.Println(len(b))
}