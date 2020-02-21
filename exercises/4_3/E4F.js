const nomes=['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana',];

function maiorNome(lista){
    let checaMaior=lista;
    let conta=0;
    let ultimo=0;
    let nome="";
    let resultado="";


    for(indice in checaMaior){
       nome=checaMaior[indice];

       conta=nome.length;
       
       if(ultimo<conta){
           ultimo=conta;
           resultado=nome;
       }
    }
    return console.log(resultado);
}

maiorNome(nomes);