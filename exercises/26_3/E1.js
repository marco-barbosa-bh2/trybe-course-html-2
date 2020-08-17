// Função que conta o tempo
// const timeToOpen = () => {

// };
let expendingTime = [0, 0];
const files = ['/home/marco/Downloads/meu-arquivo.txt', '/home/marco/Downloads/meu-arquivo.txt'];

// Copiado do conteudo da aula 26.2 com pequenas alterações 
const fs = require('fs');

for (let i = 0; i < expendingTime.length; i += 1) {
  try {
    //Obtendo o tamanho do arquivo
    const stats = fs.statSync(files[i]);
    const fileSizeInBytes = stats["size"]
    // dispara o temporizador
    const startTime = Date.now();
    const data = fs.readFileSync(files[i], 'utf8');
    // Lê o temporizador
    const stopTime = Date.now();
    expendingTime[i] = stopTime - startTime;
    // console.log(data);
    console.log(`Arquivo ${i} - ${files[i]}`);
    console.log(`O tempo gasto para ler o arquivo foi: ${expendingTime[i]}ms`);
    console.log(`O tamanho do arquivo é ${fileSizeInBytes} bytes \n`);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    console.log(err);
  }
}

console.log(`O tempo total da leitura foi: ${expendingTime.reduce((acc, e) => acc + e)}`);