package main
import (
	"fmt"
	"strings"
	"slices"
)

func main() {
	names := [4]string{
		"John",
		"Paul",
		"George",
		"Ringo",
	}

	fmt.Println("Array names is:", names)

	a := names[0:2]
	b := names[1:3]
	b[0] = "ABCDE"
	fmt.Println("Slice a is:", a)
	fmt.Println("slice b is:", b)

	//slice litrals
	q := []int{2,3,5,7,11}
	fmt.Println("Slice litral q:",q)

	//make function
	sm1 := make([]int, 5)
	printSlice("sm1", sm1)

	//slice of slice
	twoDSlice := [][]string {
		[]string{"_","_","_",},
		[]string{"_","_","_",},
		[]string{"_","_","_",},
	}

	twoDSlice[0][0] = "X"
	twoDSlice[2][2] = "O"
	twoDSlice[1][2] = "X"
	twoDSlice[1][0] = "O"
	twoDSlice[0][2] = "X"

	for i:=0; i<len(twoDSlice); i++ {
		fmt.Printf("%s\n", strings.Join(twoDSlice[i], " "))
	}

	//appending to slice
	var sa []int
	fmt.Println(sa, len(sa), cap(sa))

	sa = append(sa, 0,1,2,3,4)
	fmt.Println("After appeding", sa, len(sa), cap(sa))

	//copy
	sc := []int{1,2,32,4}
	sc1 := make([]int, len(sc))
	copy(sc1, sc)
	fmt.Println("sc slice is:", sc)
	fmt.Println("Copying sc to sc1:", sc1)

	//slice.Equal
	t := []string{"g", "h", "i"}
	t2 := []string{"g", "i", "h"}
	fmt.Println(slices.Equal(t,t2))
}

func printSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n",
		s, len(x), cap(x), x)
}