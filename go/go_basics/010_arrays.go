package main
import "fmt"

// declaration
// var a [10]int
// initializatiohn
// var primes = [5]int{2,3,5,7,11}

func main() {
	var a [5]int
	fmt.Println("declared array a", a)

	b := [5]int{1,2,3,4,5}
	fmt.Println("array b init",b)

	// ...
	c := [...]int{10,20,30,40,50,60}
	fmt.Println(len(c))

	//indices specification
	d := [...]int{1,2, 6: 69}
	fmt.Println("Specified indices", d)

	//2d Arrays
	var twoD [2][3]int
	for i:=0; i<2; i++ {
		for j:=0; j<3; j++ {
			twoD[i][j] = i+j
		}
	}
	fmt.Println("2d Array is", twoD)

	twoD = [2][3]int {
		{1,2,3},
		{4,5,6},
	}
	fmt.Println("2d Array after updation", twoD)
}