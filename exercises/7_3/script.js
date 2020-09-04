const CARTAS = ['cinco-de-ouros', 'nove-de-espadas', 'quatro-de-paus', 
                'seis-de-copas', 'sete-de-espadas', 'sete-de-paus', 'tres-de-ouros'];
const ANIMACAO = ['roda', 'cresce', 'translada'];
const DAR_CARTAS = document.getElementsByClassName('carta-para-baixo')[0];
const GRID = document.getElementsByClassName('grid')[0];

function puxaCarta() {
  let sorteio = 0;
  sorteio = Math.floor(Math.random() * CARTAS.length);
  return CARTAS[sorteio];
}

function anima() {
    let sorteio = 0;
    sorteio = Math.floor(Math.random() * ANIMACAO.length);
    return ANIMACAO[sorteio];
}

function abreCartas() {
  let imagem;
  GRID.innerHTML += '<div class="grid">';
  let linhaMesa = GRID.lastElementChild;

  for (let i = 0; i < CARTAS.length; i += 1) {
    linhaMesa.innerHTML += '<img>';
    imagem = linhaMesa.lastElementChild;
    imagem.src = `./cartas/${puxaCarta()}.png`;
    imagem.style.height = '120px';
    imagem.className = `${anima()}`;
  }
  GRID.innerHTML += '<br>';
}

DAR_CARTAS.addEventListener('click', abreCartas);
