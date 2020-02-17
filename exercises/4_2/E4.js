const n=5;

let tela="01234";

for(let i=0;i<n;i+=1){
    tela=tela.replace(tela[i],"*");
    console.log(tela);
}
