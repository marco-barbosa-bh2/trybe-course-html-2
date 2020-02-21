//Transfora nota em conceito
const a=100;
if(a>100||a<0){
    console.log("Nota inválida");
    return;
}
if(a>=90){
    console.log("A");
}
else if(a>=80){
    console.log("B");
}
else if(a>=70){
    console.log("C");
}
else if(a>=60){
    console.log("D");
}
else if(a>=50){
    console.log("E");
}
else if(a<50){
    console.log("F");
}
else {
    console.log("Erro");
}