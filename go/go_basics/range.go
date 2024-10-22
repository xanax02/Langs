package main
import "fmt"

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}


func main() {
	for index, value := range pow {
		fmt.Println(index, value)
	}

	fmt.Println("Now mapx")

	m := map[string]int{"a": 1, "b": 2, "c": 3}

	for key, value := range m {
		fmt.Println(key, value)
	}
}