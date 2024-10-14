package main
import "fmt"
import "strings"

func main() {
	board := [][]string{
		[]string{"_","_","_"},
		[]string{"_","_","_"},
		[]string{"_","_","_"},
	}

	board[0][0] = "X"
	board[2][2] = "O"
	board[1][2] = "X"
	board[1][0] = "O"
	board[0][2] = "X"

	fmt.Printf("%s\n", strings.Join(board[0], " "))

	// for i:=0; i<len(board); i++ {
	// 	fmt.Printf("%s\n", strings.Join(board[i], " "))
	// }
}