var medida = parseInt(prompt("Escolha até onde vai o nosso desafio, de 1 a:"))

if (isNaN(medida)) {
  console.error("Ocorreu algum erro durante a execução do programa.")
}

var numEscondido = (Math.floor(Math.random() * medida))

var tentyn = (confirm('limite de tentativas?'))

if (tentyn === true) {
  var limiteTentativas = parseInt(prompt('Defina um limite de tentativas'))
} else {
  var limiteTentativas = Infinity
}
if (isNaN(limiteTentativas) || limiteTentativas <= 0) {
  throw "Ocorreu algum erro durante a execyção do programa."

}

let numero = parseInt(prompt(`Me diga um numero de 1 a ${medida}`))

let contador = 1

let vitoria = false

let derrota = false

for (contador = 1; numero != numEscondido; contador++) {
  if (numero < numEscondido) {
    numero = parseInt(prompt("Mais alto!"))
  } else if (numero > numEscondido) {
    numero = parseInt(prompt("Mais baixo!"))
  }
  if (contador === limiteTentativas) {
    derrota = true
    vitoria = false
  }
  if (isNaN(numero)) {
    console.error("Ocorreu algum erro durante a execução do programa.")
  }
  if (numero === numEscondido) {
    vitoria = true;
    break;
  }

  if (contador === limiteTentativas) {
    derrota = true;
    break;
  }



}

if (vitoria == true) {
  console.log(`Parabéns você descobriu o numero ${numEscondido} que estava entre 1 e ${medida}, com ${contador} tentativas, e com um limite de ${limiteTentativas} tentativas!`);
}