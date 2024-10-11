package main
import  "fmt"

func main() {
	primes := [6]int{2, 3, 5, 7, 11, 13}

	var s[]int = primes[1:4]
	fmt.Println(s)

	//slices are like references to array
	//chaging slice changes underlying array

	name := [4]string{
		"John",
		"Paul",
		"George",
		"Ringo",
	}

	a := name[0:2]
	b := name[1:3]
	fmt.Println(a,b)

	b[0] = "XXX"
	fmt.Println(name)
}