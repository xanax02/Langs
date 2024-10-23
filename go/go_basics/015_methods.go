package main
import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

//method
func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

//custom type method
type MyFloat float64;

func (f MyFloat) Abs() float64 {
	if f<0 {
		return float64(-f)
	} else {
		return float64(f)
	}
} 

func (v *Vertex) Scale(f float64) {
	v.X *= f
	v.Y *= f
}

//main
func main() {
	v := Vertex{5,12}
	fmt.Println(v.Abs())

	//custom type method
	f := MyFloat(-math.Sqrt(2))
	fmt.Println(f.Abs())

	//pointer reciever method
	v.Scale(2)
	fmt.Println("Scale have pointer reciver", v)
}