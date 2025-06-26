idade = parseInt(prompt("Qual a sua idade?"))

if (idade <= 12 && idade >= 1) {
  console.log("Você é uma criança.")
} else if (idade <= 17 && idade > 12) {
  console.log("Você é um adolescente.")
} else if (idade >= 18 && idade <= 59) {
  console.log("Você é um adulto.")
} else if (idade >= 60) {
  console.log("Você é um idoso.")
} else {
  console.log("Idade inválida.")
}