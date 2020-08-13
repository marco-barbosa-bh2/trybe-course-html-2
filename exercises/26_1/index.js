const readline = require("readline-sync");

const interpretaResultados = (r) => {
  if (r < 18.5) {
    console.log("Abaixo do peso (magreza)");
  } else if (r >= 18.5 && r < 25 ) {
    console.log("Peso normal");
  } else if (r >= 25 && r < 30) {
    console.log("Acima do peso (sobrepeso)");
  } else if (r >= 30 && r < 35) {
    console.log("Obesidade grau I");
  } else if (r >= 35 && r < 40) {
    console.log("Obesidade grau II");
  }
  else {
    console.log("Obesidade graus III e IV");
  }
};

const IMC = (a, p) => {
  const resultado = (p/Math.pow(a, 2)).toFixed(2);
  console.log(`Seu IMC é: ${resultado}`);
  return interpretaResultados(resultado);
};

const calculoIMC = () => {
const altura = readline.questionFloat("Digite sua Altura em metros ");
const peso = readline.questionFloat("Digite o seu Peso em kg ");
console.log(`Sua Altura é: ${altura} e seu Peso é: ${peso}`);
IMC(altura, peso);
};

calculoIMC();
