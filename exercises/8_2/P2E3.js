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