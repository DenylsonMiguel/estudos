package main
import (
"fmt"
)

type hotdog int // tipo hotdog criado com base no int
var typeHotdog hotdog = 69 // variavel typeHotdog do tipo hotdog criada
var typeInt int = 8 // variavel typeInt com o tipo int criada

func main() {
  fmt.Printf("%v, %T\n", typeHotdog, typeHotdog) // mostra o valor e logo depois o tipo da typeHotdog
  fmt.Printf("%v, %T\n", typeInt, typeInt) // mostra o valor e logo depois o tipo da typeInt
  typeInt, typeHotdog = int(typeHotdog), hotdog(typeInt) // atribui o valor da typeHotdog transformada no tipo hotdog, na typeHotdog, e visse versa
  fmt.Printf("%v, %T\n", typeHotdog, typeHotdog) // mostra o valor e logo depois o tipo da typeHotdog
  fmt.Printf("%v, %T\n", typeInt, typeInt) // mostra o valor e logo depois o tipo da typeInt
}