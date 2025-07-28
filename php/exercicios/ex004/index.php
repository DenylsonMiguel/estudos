<!--
Variaveis sempre começam com $
Aceita caracteres [a-z], [A-Z], [0-9] e [_]
Aceita caracteres da tabela ASCII a partir do 128
Aceita caracteres acentuados como ã, õ, ç
A linguagem é case sentive em relação aos nomes
Nomes especiais como $this não podem ser usados
-->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Variaveis e Constantes</title>
</head>
<body>
  <h2>
    Regras:
  </h2>
  <ul>
    <li>Variaveis sempre começam com $</li>
    <li>Aceita caracterea [a-z], [A-Z], [0-9] e [_]</li>
    <li>Aceita caracteres da tabela ASCII a partir do 128</li>
    <li>Aceita caracteres acentuados como ã, õ, ç</li>
    <li>A linguagem é case sentive em relação aos nomes</li>
    <li>Nomes especiais como $this não podem ser usados</li>
  </ul>
  <?php
  $nomeπ = "Deny";
  $nomeDoCliente = "Guanabara";
  const ID_CLIENTE = 1285;
  ?>
  <p>
    Seu nome é: <?= $nomeπ ?>?
  </p>

  <h2>
    Recomendações:
  </h2>
  <ul>
    <li>Tente dar nomes claros e de fácil identificação</li>
    <li>Evite nomes curtos ou muito longos</li>
    <li>Defina um padrão e siga em todo o projeto</li>
    <li>Para Variaveis, dê preferencias a letras minusculas</li>
    <li>Para Constantes, dê preferencias a letras maiusculas</li>
    <li>Ise camelCase para métodos e funções</li>
    <li>Use SNAKE_CASE para nomear constantes</li>
  </ul>

  <p>
    Variavel com camelCase: <?=$nomeDoCliente ?>
  </p>

  <p>
    Constante com SNAKE_CASE: <?=ID_CLIENTE ?>
  </p>
</body>
</html>