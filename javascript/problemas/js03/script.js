numero = parseFloat(prompt("Digite um número:"))


if (numero % 5 === 0 && numero % 3 === 0) {
  console.log("O número é múltiplo de 3 e de 5!")
} else {
  console.log("O número não é múltiplo de 3 e 5.")
}