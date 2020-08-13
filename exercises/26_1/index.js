const readline = require("readline-sync");

const IMC = (a, p) => {
  const resultado = (p/Math.pow(a, 2)).toFixed(2);
  return console.log(`Seu IMC é: ${resultado}`);
};

const Calculo_IMC = () => {
const altura = readline.questionFloat("Digite sua Altura em metros ");
const peso = readline.questionFloat("Digite o seu Peso em kg ");
console.log(`Sua Altura é: ${altura} e seu Peso é: ${peso}`);
IMC(altura, peso);
};

Calculo_IMC();
