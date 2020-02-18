const inteiros=[2,3,6,7,10,1];

function verificaMaior(lista){
    let maior=lista;
    let ultimo=0;
    let i=0;

    for(indice in maior){
        if(maior[indice]>ultimo){
            ultimo=maior[indice];
            i=indice;
        }
    }
    return console.log(i);
}

verificaMaior(inteiros);