package main
import "fmt"

var z float64 = 78

/*
o operador := é usado para declarar váriareis enquanto o = é usado para mudar o valor de variaveis
*/

func main() {
  x := 22
  y := "bom dia"
  
  fmt.Printf("x: %v, %T\n", x, x)
  fmt.Printf("y: %s, %T\n", y, y)
  
  x /= 10
  
  fmt.Printf("x/10: %v, %T\n", x, x)
  fmt.Printf("z: %.2f, %T\n", z, z)
  
  z /= 10
  
  fmt.Printf("z/10: %.2f, %T\n", z, z)
  
  fmt.Println(isThan10(z))
  fmt.Println(isThan10(float64(x)))
}

func isThan10(value float64) bool {
  return value < 10
}