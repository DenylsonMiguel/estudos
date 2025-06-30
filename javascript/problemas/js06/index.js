let palavra = prompt("Digite uma palavra")

let contadorVogais = 0

for (let i = 0; i <= palavra.length; i++) {
  let letra = palavra[i].toLowerCase()
  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    contadorVogais = + 1
  }
}

console.log(`A palavra ${palavra} tem ${contadorVogais} vogais.`)