package main
import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	v:= Vertex{1,2}
	fmt.Println(v)

	p := &v
	fmt.Println(*p)
	p.X = 1e9
	fmt.Println(v)
	fmt.Printf("Value of p: %p \n", p)

	q := &Vertex{1,3}
	fmt.Println(q)
}	