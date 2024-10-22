package main
import "fmt"

func main() {
	// //declaration
	// var p *int
	// //initialization
	// a := 42
	// p = &a
	// fmt.Println(p)

	i, j := 42, 2701
	p := &i
	fmt.Println(*p)

	*p = 21
	fmt.Println("value of i", i)
	fmt.Println("value of j", j)

	p = &j
	*p = *p/37
	fmt.Println("value of j after operations", j)

	fmt.Printf("%T\n", p)
}