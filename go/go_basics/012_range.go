package main
import "fmt"

func main() {
	s := make([]int , 8)

	for i := range s {
		s[i] = 1<<uint(i)
	}

	for _, v := range s {
		fmt.Println(v)
	}
}