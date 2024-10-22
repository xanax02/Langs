package main
import "fmt"

type Coords struct {
	Lat, Long float64
}

func main() {
	m := make(map[string]int)

	m["k1"] = 12
	m["k3"] = 15

	fmt.Println("map m:", m)
	v := m["k2"]
	fmt.Println("value of v:",v)

	// delete function
	delete(m, "k3")
	fmt.Println("map m after deletion", m)

	// clear to remove all key value
	clear(m)
	fmt.Println("map m after clear", m)

	// second arg returned val
	_, pres := m["k1"]
	fmt.Println("key is present:", pres)

	//map litrals
	ms := map[string]Coords {
		"Bella Labs": Coords{40.68433, -74.39967},
		"Google": Coords{37.42202, -122.08408},
	}

	fmt.Println("amp of string and struct", ms)

	str = "hello world"
	for i:=range str
}