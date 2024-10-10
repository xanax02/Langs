package main
import "fmt"

func main() {
	i, j := 42, 270;
	p := &i;
	fmt.Println(*p)

	p = &j
	fmt.Println(*p)

	*p = 69
	fmt.Println(j)
}