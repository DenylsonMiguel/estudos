function iniciarJornada() {
  let nome = document.getElementById('nome').value
  let idade = document.getElementById('idade').value
  document.getElementById('text').textContent = `Olá ${nome}! Vejo que você tem ${idade} anos. Que comece sua jornada!`
}