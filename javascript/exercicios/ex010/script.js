


form = document.querySelector('form')


form.addEventListener("submit", country)

function country(event) {
  event.preventDefault()

  let name = document.querySelector('input#name').value
  let country = document.querySelector('input#country').value
  let sexo = country[country.length - 1]

  if (sexo != "a" && sexo != "o") {
    sexo = "o"
  }

  document.querySelector(`h3#resposta`).innerHTML = `Olá <strong>${name}</strong> você mora n${sexo} <strong>${country}</strong>`

}

