const botao = document.getElementsByClassName('button')[0];
let clickCount = 0;

botao.addEventListener('click', ()=>{clickCount += 1; 
  const clicada = document.getElementsByClassName('click-count')[0];
  clicada.innerHTML = `O número de cliques é: ${clickCount}`;
});