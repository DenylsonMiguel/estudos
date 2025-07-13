let form = document.querySelector("form")
form.addEventListener("submit", conferir)

function conferir(event) {
  event.preventDefault()
  let vel = parseInt(document.querySelector("input#txtvel").value)
  let resultado = document.querySelector('h3#resultado')
  if (vel > 60) {
    return resultado.innerText = "Este cidadão deverá receber multa"
  }
  return resultado.innerText = "Tudo certo por aqui"
}

