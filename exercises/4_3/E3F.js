const inteiros=[2,3,6,7,10,0,-3];

function verificaMaior(lista){
    let menor=lista;
    let ultimo=0;
    let i=0;

    ultimo=menor[0];

    for(indice in menor){
        if(menor[indice]<ultimo){
            ultimo=menor[indice];
            i=indice;
        }
    }
    return console.log(i);
}

verificaMaior(inteiros);