var medida = parseInt(prompt("Escolha até onde vai o nosso desafio, de 1 a:"))

var numEscondido = (Math.floor(Math.random() * medida) + 1)

var tentyn = (confirm('limite de tentativas?'))

if (tentyn === true) {
  var limiteTentativas = parseInt(prompt('Defina um limite de tentativas'))
} else {
  var limiteTentativas = Infinity
}
if (isNaN(limiteTentativas)) {
  console.log("Programa finalizado")
  flag
}

var numero = parseInt(prompt(`Me diga um numero de 1 a ${medida}`))

var contador = 1

for (contador = 1; numero != numEscondido; contador++) {
  if (numero < numEscondido) {
    numero = parseInt(prompt("Mais alto!"))
  } else if (numero > numEscondido) {
    numero = parseInt(prompt("Mais baixo!"))
  }
  if (contador >= limiteTentativas) {
    console.log(`Você perdeu, o numero era ${numEscondido}`)
    break
  }
  if (isNaN(numero)) {
    console.log("Programa finalizado")
    break
  }
}


if (numero === numEscondido) {
  console.log(`Parabéns você descobriu um numero de 1 a ${medida} com ${contador} tentativas!`)
}

