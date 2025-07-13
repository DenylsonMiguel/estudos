function somar(n1, n2) {
  event.preventDefault()
  n1 = parseFloat(document.querySelector('input#txtn1').value);
  n2 = parseFloat(document.querySelector('input#txtn2').value);
  let resultado = document.querySelector('output#resultado');
  let mostrarResultado = (n1 + n2);

  resultado.textContent = mostrarResultado;

};

function resetResult() {
  document.getElementById('resultado').textContent = "0";
};