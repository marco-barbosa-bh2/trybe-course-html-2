const estado = document.getElementById('estado');
const array = ['AM','AP','AC','RO','RD','TO','PA','MA','PB','PI','BA','CE','SE','AL','RN','MT','MS','GO','DF','MG','ES','RJ','SP','PR','SC','RS'];
estado.addEventListener('mouseover', function () {
    for (let i = 0; i < array.length; i += 1 ) {
      estado.innerHTML += '<option>' + array[i];
    }
});