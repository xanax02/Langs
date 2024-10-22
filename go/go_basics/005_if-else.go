package main
import "fmt"

func main() {
	
	//basic example
	if 7%2 == 0 {
		fmt.Println("7 is even")
	} else {
		fmt.Println("7 is odd")
	}

	//vars scoping
	if nums:=9; nums<0 {
		fmt.Println(nums ," is negative")
	} else if nums<10 {
		fmt.Println(nums, " has one digit")
	} else {
		fmt.Println(nums, " has multiple digits")
	}
}