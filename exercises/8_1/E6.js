const skills = ['JavaScript', 'CSS', 'HTML', 'Concentração', 'Lógica', 'Organização'];
// função 1
const cumprimentos = ( string1, string2 ) => {
    let i = 0.1;

    for ( indice in string1 ) {
      if(string1[indice] === 'x' || string1[indice] === 'X'){
        i = indice;
      }
    }

    if (i === 0.1){
      return 'Não achei o x'
    }

    i = parseInt(i);
    const meio = i + 1;
    const fim = string1.length;

    return `${string1.slice(0,i)} ${string2} ${string1.slice(meio,fim)}
Tudo bem?`;
}

// função de apoio

const imprimeString = (strx) => {for (indice in strx){console.log(strx[indice]);}}

// função 2
const mensagem = cumprimentos('Trybe x Aqui!','Marco');

const habilidades = (msg,skl) => {
  return `${msg}
Minhas habilidades são: 
${skl}
#goTrybe`
}

console.log(habilidades(mensagem,skills));
