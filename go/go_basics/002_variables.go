package main
import "fmt"

var c, python, java bool = true, false, false

func main() {

	fmt.Println(c, python, java)
	
	var a = "intial";

	var b int;

	//type inference
	c := "abhay"

	fmt.Println(a,b,c);

	var x,y int = 1,4
	fmt.Println(x,y)

	// type conversions

	i := 42
	j := float64(i)
	u := uint(j)

	fmt.Printf("i type is %T \n", i)
	fmt.Printf("j type is %T \n", j)
	fmt.Printf("u type is %T \n", u)


}