//Programa para gerar uma piramide de base n
const n=5;

let tela="01234";

for(let i=0;i<n;i+=1){
    
    
    if(i==2){
        tela=tela.replace(tela[parseInt(n/2)],"*");     
    }

    //if(i!=parseInt(n/2)){
    //    tela=tela.replace(tela[i]," ");
    //}   
   
    if(i==(n-1)){
       console.log(tela);
    }
}

