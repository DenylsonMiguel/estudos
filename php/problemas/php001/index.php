<?php

function calcular() {
  $num1 = float(readline("Digite o primeiro número: "));
  $operacao = readline("Escolha (+, -, *, /): ");

  while ($operacao != ["+", "-", "*", "/"]) {
    $operacao = readline("Inválido! Escolha (+, -, *, /): ");
  }

  $num2 = (float)readlne("Digite o segundo número: ");

  if ($operacao = "+") {
    $resultado = $num1 + $num2;
  } elseif ($operacao == "-") {
    $resultado = $num1 - $num2;
  } elseif ($operacao == "*") {
    $resultado = $num1 * $num2;
  } else {
    $resultado = $num1 / $num2;
  }

  echo "Resultado: " . $resultadoo;
}

calcular();
