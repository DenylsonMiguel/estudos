

function tocarclick() {
  let click = new Audio('audio/click.mp3')
  click.currentTime = 0
  click.play()
}

function tocarwin() {
  let win = new Audio('audio/win.mp3')
  win.currentTime = 0
  win.play()
}

var moeda = 0;
var numero = 0;

function clicou() {
  var melhorNumero = 0;


  const numeroSalvo = localStorage.getItem('MelhorNumero');
  if (numeroSalvo) {
    melhorNumero = parseInt(numeroSalvo);
  };


  let melhoria = document.getElementById('melhoria')

  let valor = 1

  let cansou = null

  let melhor = document.getElementById('melhor')

  melhor.textContent = `Seu melhor numero foi: ${melhorNumero} cliques`;

  let botao = document.getElementById('clique');

  let tempoIntervalo = 1000

  

  let melhorias = [20, 80, 200, 250, 350, 500, 1200, 2000, 2500, 3200, 5000, 10000, 20000, 50000, 100000, 1000000];

  let proxMelhoria = document.getElementById('prox');

  let quantidade = document.getElementById('quantidade');


  numero += valor;
  moeda += valor / 2;
  quantidade.textContent = String(`${numero} cliques`);
  tempo = 10;

  melhor.textContent = `Seu melhor foi: ${melhorNumero} cliques`;

  var proxima = melhorias.find(m => m > numero);

  if (melhorNumero < numero) {
    melhorNumero = (numero + 1)
  }

  if (proxima !== undefined) {
    proxMelhoria.textContent = `Faltam ${proxima - numero} cliques para a próxima melhoria`;
  } else {
    proxMelhoria.textContent = `Você desbloqueou tudo!`;
  }

  localStorage.setItem('MelhorNumero', melhorNumero.toString());

  tocarclick()

  if (numero === 20) {
    tempoIntervalo = 800
    melhoria.textContent = ("O auto clique melhorou")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf1').style.backgroundColor = ('#57d7dd')
    tocarwin()
    proxMelhoria.style.display = "block"
  }

  if (numero === 80) {
    tempoIntervalo = 650
    melhoria.textContent = ("O auto clique melhorou")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf2').style.backgroundColor = ('#3cb3dd')
    tocarwin()
  }

  if (numero === 200) {
    tempoIntervalo = 500
    melhoria.textContent = ("O auto clique melhorou")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf3').style.backgroundColor = ('#2396dd')
    tocarwin()
  }

  if (numero === 250) {
    botao.style.width = ('200px')
    botao.style.height = ('180px')
    melhoria.textContent = ("O botão aumentou")
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf4').style.backgroundColor = ('#a2ea92')
    tocarwin()
  }

  if (numero === 350) {
    tempoIntervalo = 300
    melhoria.textContent = ("O auto clique melhorou")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf5').style.backgroundColor = ('#2970e1')
    tocarwin()
  }

  if (numero === 500) {
    tempoIntervalo = 200
    melhoria.textContent = ("O auto clique melhorou")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf6').style.backgroundColor = ('#213fe3')
    tocarwin()
  }

  if (numero === 1200) {
    tempoIntervalo = 100
    melhoria.textContent = ("O auto clique melhorou")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf7').style.backgroundColor = ('#182c9b')
    tocarwin()
  }

  if (numero === 2000) {
    const areas = document.getElementsByClassName('area2');
    for (let i = 0; i < areas.length; i++) {
      areas[i].style.display = "flex";
    }
    melhoria.style.color = ('#d37272')
    melhoria.textContent = "Nova área desbloqueada!"
    setTimeout(function () {
      melhoria.textContent = ""
    }, 2500)
    document.getElementById('mf8').style.backgroundColor = "#d37272"
    tocarwin()
  }

  if (numero === 2500) {
    botao.style.width = ('90%')
    botao.style.height = ('300px')
    melhoria.textContent = ("O botão aumentou")
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf9').style.backgroundColor = ('#2f861f')
    tocarwin()
  }

  if (numero === 3200) {
    tempoIntervalo = 25
    melhoria.textContent = ("O auto clique melhorou")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf10').style.backgroundColor = ('#3725ba')
    tocarwin()
  }

  if (numero === 5000) {
    tempoIntervalo = 1
    melhoria.textContent = ("O auto clique melhorou")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf11').style.backgroundColor = ('#2b207a')
    tocarwin()
  }

  if (numero === 10000) {
    melhoria.textContent = ("Parabens você ganhou!")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 15000);
    document.getElementById('mf12').style.backgroundColor = ('#ede678')
    tocarwin()
  }

  if (numero === 20000) {
    tempoIntervalo = 0.1
    melhoria.textContent = ("você encontrou um extra, Parabéns")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf13').style.backgroundColor = ('#efe655')
    tocarwin()
  }

  if (numero === 50000) {
    tempoIntervalo = 0.01
    melhoria.textContent = ("você encontrou um extra, Parabéns")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf14').style.backgroundColor = ('#e4d811')
    tocarwin()
  }

  if (numero === 100000) {
    tempoIntervalo = 0.001
    melhoria.textContent = ("você encontrou um extra, Parabéns")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf15').style.backgroundColor = ('#b9af10')
    tocarwin()
  }

  if (numero === 1000000) {
    tempoIntervalo = 0.00000001
    melhoria.textContent = ("você chegou ao final parabéns")
    clearInterval(autoClique)
    setTimeout(function () {
      melhoria.textContent = ("")
    }, 2500);
    document.getElementById('mf16').style.backgroundColor = ('#000')
    tocarwin()
  }


}

var tempo = 10;
cansou = setInterval(function () {
  tempo--
  if (tempo <= 0) {
    quantidade.textContent = ("Eai, já cansou?")

  }
}, 400);

var autoClique = null

function auto() {
  clearInterval(autoClique)
  autoClique = setInterval(clicou, tempoIntervalo)
}

function pararAuto() {
  clearInterval(autoClique)
}

function senha() {
  const senhaAd = "deny1234"
  var valorSenha = document.getElementById('senha').value
  if (senhaAd === valorSenha) {
    let tamanho = parseInt(prompt('Insira um valor'))
    valor = tamanho
  }
}

function fechar() {
  document.getElementById('adm').style.display = "none"
}