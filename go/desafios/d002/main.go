package main
import "fmt"

var x int
var f float64
var y string
var z bool

func main() {
  fmt.Printf("x: %v\nf: %.1f\ny: \"%v\"\nz: %v\n", x, f, y, z)
  fmt.Println("Todos eles são os \"Valores zero\"")
}