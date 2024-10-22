package main
import "fmt"

type Coords struct {
	X int
	Y int
}

func main() {
	v := Coords{1,3}
	fmt.Println(v)
	fmt.Println("value of X:", v.X)

	//pointer to struct
	p := &v
	(*p).X = 69
	p.Y = 69
	fmt.Println("Coords after updation:", v)
	fmt.Println("The value of p for struct is:", p)
}