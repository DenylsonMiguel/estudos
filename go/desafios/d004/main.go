package main
import "fmt"

type likeInt int
var x likeInt

func main() {
  fmt.Printf("x:\nvalue: %v\ntype: %T\n", x, x)
  x = 42
  fmt.Println("x:", x)
}