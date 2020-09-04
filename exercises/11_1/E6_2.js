const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByAge = (age) => (
    // Adicione o código aqui.
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.age === age);
        if (arrayAnimals.length !== 0) {
          return resolve(arrayAnimals);
        }
        return reject('Nenhum animal com esse nome!');
      }, 100);
    })
  );
  
  const getAnimalByAge = age => findAnimalByAge(age).then((list) => {
    const result = list[0];
    return result;
  });
  
  module.exports = getAnimalByAge;