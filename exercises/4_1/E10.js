//Programa para calcular o lucro de um produto pela venda de 1000 itens
const valorProduto=100;
const valorVenda=140;
let lucroPorMil=0;

if(valorProduto<0||valorVenda<0){
    console.log("Valor informado menor que zero");
    return;
}

let valorFinal=valorProduto+0.2*valorProduto;

lucroPorMil=(valorVenda-valorFinal)*1000;

console.log("O lucro pela venda de mil unidades do produto é = ",lucroPorMil);
