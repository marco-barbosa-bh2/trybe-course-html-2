const n=5;
let conta=0;
let soma=0;
let elementos=[];


function somatorio(numero){

    for(i=0;i<n;i+=1){
        conta+=1;
        elementos[i]=conta;
     }

    for(indice in elementos){
        soma+=elementos[indice];
    }

    return console.log(soma);
}

somatorio(n);
