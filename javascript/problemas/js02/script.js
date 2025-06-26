numero = parseFloat(prompt("Digite um número"))

if (numero > 0) {
  console.log("O número é positivo")
} else if (numero === 0) {
  console.log("O número é zero")
} else if (numero < 0) {
  console.log("O número é negativo")
} else {
  console.log("Insira um número válido")
}