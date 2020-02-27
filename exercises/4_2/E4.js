//Programa para gerar uma piramide de base n
const n=5;

let tela="";

for(let i=0;i<n;i+=1){
    tela+=i;
}

for(let i=0;i<=parseInt(n/2);i+=1){
      
    tela=tela.replace(tela[parseInt(n/2)-i],"*");     
    tela=tela.replace(tela[parseInt(n/2)+i],"*");

    console.log(tela);

}

/*
for(k=0;k<n;k+=1){
        if(k!=i){
            //tela=tela.replace(tela[k]," ");
        }
    }
*/