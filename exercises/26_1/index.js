const inquirer = require('inquirer');

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

const perguntas = () => {
  const questions = [
    {
      type: "input",
      name: "altura",
      message: "Digite sua Altura em metros ",
      validate: function (value) {
        if ((value - 0) >= 0) { // "Transforma uma string em número no JS"
          return true;
        }
        return 'Por favor insira um valor numérico';
      } 
    },
    {
      type: "input",
      name: "peso",
      message: "Digite seu Peso em kg ",
      validate: function (value) {
        if ((value - 0) >= 0) { // "Transforma uma string em número no JS"
          return true;
        }
        return 'Por favor insira um valor numérico';
      }
    }
  ];

// Copiado da documentacao em https://www.npmjs.com/package/inquirer#installation
  inquirer.prompt(questions)
  .then(answers => {
    console.log(`Sua altura é ${answers.altura}, seu peso é ${answers.peso}`);
    IMC(answers.altura, answers.peso);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
};
// fim da cópia

perguntas();
