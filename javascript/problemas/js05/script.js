numeroSecreto = 7

chute = parseInt(prompt("Adivinhe o número mágico entre 1 e 10"))

if (chute === numeroSecreto) {
  console.log("Parabéns! Você acertou o número secreto!")
} else if (isNaN(chute) || chute > 10 || chute < 1) {
  console.log("Número invalido")
} else {
  console.log("Errou! Tente novamente.")
}