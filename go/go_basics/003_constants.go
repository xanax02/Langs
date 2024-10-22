package main
import "fmt"

const (
	x = 100000000
	y = 69
	z = "stirng"
)

const (
	aa = iota
	bb
	cc
)

func main() {
	var a int = x
	var c string = z

	fmt.Println(a,c)

	fmt.Println(aa,bb, cc)
}