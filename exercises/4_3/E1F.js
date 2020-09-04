const nome="desenvolvimento";

function verificaPalindrome(palavra){
    let nomeRecebido=palavra;
    let nomeVerificacao="";

    for(indice in nomeRecebido){
        nomeVerificacao+=nomeRecebido[(palavra.length-1) - indice];
    }

    if(nomeVerificacao==nomeRecebido){
       return console.log(true);
    }
    else {
        return console.log(false);
    }
}

verificaPalindrome(nome);