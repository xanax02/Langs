//numeric contants
package main
import "fmt"

const (
	veryBigNumber = 1<<100
	smallNumber = veryBigNumber >> 99
)

func main() {
	fmt.Println(veryBigNumber)
	fmt.Println(smallNumber)
}