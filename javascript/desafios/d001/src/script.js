const box = document.querySelector('div#box');
const date = new Date()
const hours = date.getHours();
const js = document.querySelector('h1#javaScript').style.display = "none"
let horario;
if (hours >= 1 && hours <= 11) {
  horario = "manha";
  document.querySelector('body').style.backgroundColor = "rgb(211,191,94)";
} else if (hours >= 12 && hours <= 18) {
  horario = "tarde";
  document.querySelector('body').style.backgroundColor = "rgb(112,68,47)";
} else {
  horario = "noite";
  document.querySelector('body').style.backgroundColor = "rgb(81,83,111)";
}
if (horario === "manha") {
  extencion = "png"
} else {
  extencion = "jpeg"
}

box.innerHTML =
  `
<p>Agora são ${hours} horas!</p>
<img src="./images/${horario}.${extencion}" alt="${horario}"> 
`;


