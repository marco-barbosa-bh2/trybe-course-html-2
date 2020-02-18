//Imprime valores do objeto com for in
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

let info2 = {
    personagem: "Tio Patihas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
  };

for(indice in info){
    console.log(info[indice]," e ",info2[indice]);
}
