package main
import (
	"fmt"
	"math"
)

func add(x , y int) int {
	return x+y
}

func anyNumberResult(x,y string) (string, string) {
	return y,x
}

func nakedReturn(sum int) (x, y int) {
	x = sum*4/9
	y = sum-x
	return
}

func main() {
	fmt.Printf("hwllo %g problems. \n", math.Sqrt(7))
	fmt.Println(add(42, 13))
	
	a,b := anyNumberResult("Hello", "World")
	fmt.Println(a,b)

	fmt.Println(nakedReturn(69))
}
