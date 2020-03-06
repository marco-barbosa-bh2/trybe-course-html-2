const estado = document.getElementById('estado');
const array = ['AM','AP','AC','RO','RD','TO','PA','MA','PB','PI','BA','CE','SE','AL','RN','PE','MT','MS','GO','DF','MG','ES','RJ','SP','PR','SC','RS'];
const dataInicio = document.getElementById('dataInicio');
const data = document.getElementById('avisoData');

estado.addEventListener('mouseover', function () {
  while(estado.length<26){
    for (let i = 0; i < array.length; i += 1 ) {
      estado.innerHTML += '<option>' + array[i];
    }
  }  
});

dataInicio.DatePickerX.init();

/*
dataInicio.addEventListener('keyup', function () {
  const dataInserida = dataInicio.value;
  let dataSeparada = [];
  
  if (dataInserida.length === 10) {
    dataSeparada = dataInserida.split('/');
  }

  if(parseInt(dataSeparada[0]) < 0 || parseInt(dataSeparada[0]) > 31){
    data.innerHTML = '- Dia do Mês Inválido';
  } else {
    data.innerHTML = '';
  }

  if(parseInt(dataSeparada[1]) < 0 || parseInt(dataSeparada[1]) > 12){
    data.innerHTML += ' - Mês Inválido';
  } else {
    data.innerHTML += '';
  }

  if(parseInt(dataSeparada[2]) < 0){
    data.innerHTML += ' - Ano Inválido';
  } else {
    data.innerHTML += '';
  }

});
*/
