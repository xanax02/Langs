package main
import "fmt"

func main() {

	q := []int{2,3,5,7,11,13}
	fmt.Println(q)

	//defaults
	s := []int{1,2,3,4,5,56, 99 ,69}
	s = s[:]
	fmt.Println(s)

	s = s[:5]
	fmt.Println(s)

	s = s[2:]
	fmt.Println(s)

	// len and cap
	fmt.Println("len n cap")
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}