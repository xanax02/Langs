package main
import "fmt"

func main() {
	var s[]int //nil slice
	printSlice(s)

	s = append(s, 0)
	printSlice(s)

	s = append(s,1)
	printSlice(s)

	s = append(s, 2,)
	printSlice(s)
}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}