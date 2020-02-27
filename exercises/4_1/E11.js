//Programa para calcular o salário líquido de um trabalhador
const salarioBruto=3000.00;
let aliquotaINSS=0;
let aliquotaIR=0;
let deducao=0;
let salarioBase=0;
let salarioLiquido=0;

//Calculo Aliquota INSS
if(salarioBruto<=1556.94){
    aliquotaINSS=0.08;
}
else if(salarioBruto>=1556.95&&salarioBruto<=2594.92){
    aliquotaINSS=0.09;
}
else if(salarioBruto>=2594.93&&salarioBruto<=5189.82){
    aliquotaINSS=0.11;
}
else{
    aliquotaINSS=570.88;
}


//Calculo Salario Base
if(aliquotaINSS<1){
    salarioBase=salarioBruto-salarioBruto*aliquotaINSS;
}
else{
    salarioBase=salarioBruto-aliquotaINSS;
}


//Calculo Aliquota IR e Deducao
if(salarioBase<=1903.98){
    aliquotaIR=0.00;
    deducao=0;
}
else if(salarioBase>=1903.99&&salarioBase<=2826.65){
    aliquotaIR=0.075;
    deducao=142.80;
}
else if(salarioBase>=2826.66&&salarioBase<=3751.05){
    aliquotaIR=0.15;
    deducao=354.80;
}
else if(salarioBase>=3751.06&&salarioBase<=4664.68){
    aliquotaIR=0.225;
    deducao=636.13;
}
else {
    aliquotaIR=0.275;
    deducao=869.36;
}

//Calculo do Salario Liquido
salarioLiquido=salarioBase-((salarioBase*aliquotaIR)-deducao);

console.log("Salário Líquido = ",salarioLiquido);