package main
import "fmt"

var x int = 42
var y string = "James Bond"
var z bool = true

func main() {
  s := fmt.Sprintf("x: %v\ny: %v\nz: %v", x, y, z)
  fmt.Println(s)
}