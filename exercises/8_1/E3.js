const fatorial = (num1) => {let resultado = 1;
  for (let i = num1; i > 0; i -= 1) {
    resultado *= i;
  }
  return resultado;
  }

console.log(fatorial(3));