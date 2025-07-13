// rgb(42, 139, 42)

var numero = 0;

function entrou() {
  document.querySelector('div#area').style.backgroundColor = "rgb(42, 139, 42)";
};

function saiu() {
  document.querySelector('div#area').style.backgroundColor = "transparent";
};

function clicar() {
  let area = document.querySelector('div#segundaArea');

  area.innerText = "Clicou!";


}

function mudar() {
  let area = document.querySelector('div#segundaArea');
  area.innerText = "interaja";
};

setInterval(function () {
  mudar();
}, 4000);

addEventListener("mousemove", aumentar);

function aumentar() {

  const terceiraArea = document.querySelector('div#terceiraArea');

  numero += 0.5;

  terceiraArea.innerText = numero;
};

