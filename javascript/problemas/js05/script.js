function calcular() {
  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  let operacao = prompt("Escolha (+, -, *, /)");

  while (!["+", "-", "*", "/"].includes(operacao)) {
    operacao = prompt("Inválido! Escolha (+, -, *, /)");
  }

  const num2 = parseFloat(prompt("Digite o segundo número:"));
  let resultado;

  if (operacao === "+") {
    resultado = (num1 + num2);
  } else if (operacao === "-") {
    resultado = (num1 - num2);
  } else if (operacao === "*") {
    resultado = (num1 * num2);
  } else {
    resultado = (num1 / num2);
  }

  console.log(`Resultado:  ${resultado}`);
}

calcular();