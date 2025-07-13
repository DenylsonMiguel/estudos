document.querySelector('main').style.display = "block";
document.querySelector('div#ative').style.display = "none";
const form = document.querySelector('form')
const data = new Date()
const anoAtual = data.getFullYear()
console.log(anoAtual)

form.addEventListener("submit", idade)

function idade(event) {
  // capturar idade e sexo
  event.preventDefault();
  const ano = parseInt(document.querySelector('input#ano').value)
  const sexo = document.getElementsByName("sexo")
  const ageNegativo = (ano - anoAtual)
  const age = ageNegativo - ageNegativo - ageNegativo
  document.querySelector('h3#idade').innerHTML = `Você tem ${age} Anos! ${sexo}`

  // mostrar imagem
};