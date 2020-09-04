const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
            
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
            
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
          
const adicionaParametro = (objeto, chave, valor) => {
  const parametro = {};
  parametro[chave] = valor;  
  Object.assign(objeto,parametro);
  return objeto;
}
          
console.log(adicionaParametro(lesson2,'turno','manhã'));
        
const listaChaves = (objeto) => {return Object.keys(objeto);}
        
console.log(listaChaves(lesson1));
        
const tamanhoObj = (objeto) => { 
  const metrica = Object.keys(objeto);
  return metrica.length;
}
      
console.log(tamanhoObj(lesson1));
      
const retornaObj = (objeto) => { return Object.entries(objeto);}
        
console.log(retornaObj(lesson1));
      
const allLessons = {};
      
const agrupaObj = (obj1,obj2,obj3) => {
  return Object.assign(allLessons,{lesson1:obj1},{lesson2:obj2},{lesson3:obj3});
}
      
console.log(agrupaObj(lesson1,lesson2,lesson3));
    
const numeroEstudantes = (obj) => {
    const estudantes = parseInt(obj.lesson1.numeroEstudantes) + parseInt(obj.lesson2.numeroEstudantes) + parseInt(obj.lesson3.numeroEstudantes);
    return estudantes;
}
    
console.log(numeroEstudantes(allLessons));
  
const getValueByNumber = (obj,num) => {
  const valor = allLessons[obj];
  const nivel2 = Object.values(valor);
  return nivel2[num];
}
  
console.log(getValueByNumber('lesson1',0));

const verifyPair = (objeto,chave,valor) => {
  if (Object.keys(objeto).includes(`${chave}`)) {
    if (Object.values(objeto).includes(`${valor}`)) {
      return true;
    }
  }
  return false;
}

console.log(verifyPair(lesson3,'turno','noite'));