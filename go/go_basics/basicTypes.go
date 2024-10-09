package main
import (
	"fmt"
	"math/cmplx"
)

// go basic types
// bool

// string

// int int8 int16 int 32 int64
// uint uint8 uint16 int32 int64 intptr

// byte -> uint8
// rune -> uint32

// float32 float64

// complex64 complex128

var(
	flag bool = false
	maxInt uint64 = 1<<64 -1
	z complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
	fmt.Println("Basic Types")
	fmt.Printf("Type %T Value: %v\n", flag, flag)
	fmt.Printf("Type %T Value: %v\n", maxInt, maxInt)
	fmt.Printf("Type %T Value: %v\n", z, z)
}