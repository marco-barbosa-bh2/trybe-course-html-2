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

dataInicio.DatePickerX.init({
  format : 'dd/mm/yyyy',
  clearButtonLabel : 'Limpa',
  todayButtonLabel : 'Hoje',
});

