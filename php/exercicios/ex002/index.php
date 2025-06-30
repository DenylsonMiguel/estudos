<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PHP</title>
</head>
<body>
  <h1>Exemplo de PHP</h1>
  <?php
  date_default_timezone_set("america/Recife");
  echo("Hoje é meu dia ") . date("d/M/Y");
  echo("<br>");
  echo("e a hora é: ") . date("H:i:s");
  echo("<br>");
  print("hora é muito legal ") . date("d/m/y");

  ?>
</body>
</html>