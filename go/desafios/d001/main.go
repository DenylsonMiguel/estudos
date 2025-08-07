package main
import "fmt"

func main() {
  x := 42
  y := "James Bond"
  z := true
  
  fmt.Printf("x: %d.\ny: %s.\nz: %v.\n", x, y, z)
  fmt.Println("x:", x, "\b.")
  fmt.Println("y:", y, "\b.")
  fmt.Println("z:", z, "\b.")
}