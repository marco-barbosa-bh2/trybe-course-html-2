const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

const getCEP = (CEP) =>{
  const tail = `http://cep.la/${CEP}`;
  xhr.open ("GET", tail, true);
  xhr.setRequestHeader ("Accept", "application/json");
  xhr.onreadystatechange = () => {
    if((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200){
        // console.log(xhr.responseText);
        return xhr.responseText;
    }
  };
  xhr.send (null);
};

module.exports ={
  getCEP,
};