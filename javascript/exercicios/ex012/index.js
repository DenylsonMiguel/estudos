let data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();
let falarMinutos;
if (minutos == 30) {
  falarMinutos = `e meia`;
} else if (minutos != 0) {
  falarMinutos = `e ${minutos}`;
} else {
  falarMinutos = ``;
};

let horario;
if (hora >= 0 && hora < 12) {
  horario = "manhã";
} else if (hora >= 13 && hora <= 18) {
  horario = "tarde";
} else {
  horario = "noite";
};

console.log(`Agora é ${hora} ${falarMinutos} da ${horario}`);

setInterval(function () {
  console.log(`Agora é ${hora} ${falarMinutos} da ${horario}`);
}, 10000);