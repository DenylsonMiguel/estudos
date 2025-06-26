function verificarDestino() {
  let nome = document.getElementById('nome').value
  let idade = parseInt(document.getElementById('idade').value)

  if (idade >= 18) {
    document.getElementById('text').textContent = `Seja bem-vindo(a), ${nome}. A Guilda dos Devs te recebe de braços abertos!`
  } else if (idade <= 18) {
    document.getElementById('text').textContent = `Sinto muito, ${nome}, você ainda não tem idade suficiente para entrar na Guilda.`
  } else {
    document.getElementById('text').textContent = `Insira uma idade válida, ${nome}`
  }
}