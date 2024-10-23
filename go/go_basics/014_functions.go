package main
import (
	"fmt"
	"math"
)

// func as args
func compute(fn func(float64, float64) float64) float64 {
	return fn(3,4)
}

func adder() func(int) int{
	sum:= 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func fibonacci() func() int {
	prev1, prev2 := 0, 1
	return func() int {
		sum := prev1
		prev1, prev2 = prev2, prev1 + prev2
		return sum
	}
}

func main() {
	//function values
	hypot := func(x,y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}

	fmt.Println(hypot(5, 12))
	fmt.Println(compute(hypot))

	//closures
	pos, neg := adder(), adder()
	for i:= 0; i<10; i++ {
		fmt.Println(
			pos(i),
			neg(-2*i),
		)
	}

	//fibonacci
	f := fibonacci()
	for i:=0; i< 10; i++ {
		fmt.Println(f())
	}
}