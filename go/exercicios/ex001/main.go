package main
import "fmt"

func main() {
  _, errors := fmt.Println("Hello, World!", "Hi peploes", 22)
  // Não pode ter váriaveis não utilizadas
  
  fmt.Println(errors)
}