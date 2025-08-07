package main
import "fmt"
  // fora de uma func sempre será necessario declarar com var:
  // var 
func main() {
  // Variáveis com var:
  // var name string = "Denylson"
  var age = 8.99 // Não é necessario usar tipos
  ageString := fmt.Sprint(age)
  ageString += " anos"
  fmt.Println(ageString)
}