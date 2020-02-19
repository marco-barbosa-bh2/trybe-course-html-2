const word="joaofernando";
const ending="fernan";


function terminaCom(palavra,final){
    
    let resultado=false;

    resultado=palavra.endsWith(final);
   
    console.log(resultado);
}

terminaCom(word,ending);
