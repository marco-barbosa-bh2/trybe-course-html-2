const array=[2,3,2,5,8,2,3,];


function verificaMaiorIndex(lista){
    let maior=lista;
    let ultimo=0;
    let i=0;

    ultimo=maior[0];

    for(indice in maior){
        if(maior[indice]>ultimo){
            ultimo=maior[indice];
            i=indice;
        }
    }
    return i;
}


function maiorNumeroRepeticoes(lista){
    
    let comparador=[];
    let saida=[];
    let conta=0;

    comparador=lista;

    for(indice in lista){
        for(indice2 in comparador){
           if(lista[indice]==comparador[indice2]){
               conta+=1;
           }
           saida[indice]=conta;
        }
        conta=0;
    }

    return console.log(lista[verificaMaiorIndex(saida)]);

}


maiorNumeroRepeticoes(array);