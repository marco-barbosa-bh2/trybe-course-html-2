// Retorna a maior palavra. Caso existam mais de uma maior palavra, retorna a última

const maiorPalavra = (palavra) => {const contaPalavra = palavra.split(' ');
  let conta=0;
  let contaFinal=0;
  let i = 0;

  for (indice in contaPalavra) {
    conta = contaPalavra[indice].length;
      if (contaFinal <= conta) {
        contaFinal = conta;
        i = indice;
      }
  }
  return contaPalavra[i];
}

console.log(maiorPalavra('Quero comprar um carro , qual você acha melhor : Ferrari ou Porche ?'));