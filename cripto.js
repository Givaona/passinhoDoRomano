var selectCrip = document.querySelector("#cifra");
var submit = document.querySelector("#submit")//botão

var criptografar = document.getElementById("cript")
var descriptografar = document.getElementById("dCript")


submit.addEventListener('click', function(event){
    event.preventDefault();

    var passo = parseInt(document.querySelector("#passo").value);
    var entrada = document.querySelector("#entrada")
    var arrTexto = entrada.value.split("");
    var saida = document.querySelector("#saida");
    console.log(arrTexto);
    
    var option = document.querySelector("#option")

    if (selectCrip.value=="cifraCesar") {
        cesar(passo, arrTexto);
    } else if(selectCrip.value=="base64"){
        base(entrada.value, saida);
    } 
});
    
// submit.addEventListener('click', function(event){
//     event.preventDefault();
// } )

var arrSaida = [];

function cesar(passo, arrTexto) {
    if (criptografar.checked) {
        for (var i = 0; i < arrTexto.length; i++) {
            var cripto = arrTexto[i].charCodeAt();
            console.log(cripto);
            if(cripto >= 65 && cripto <= 90){
            arrSaida.push(String.fromCharCode(((cripto - 65 + passo) % 26) + 65));
            
        }  else if(cripto >= 97 && cripto <= 122){
            arrSaida.push(String.fromCharCode(((cripto - 97 + passo) % 26) + 97));
            
        }        
    } 
    } else if(descriptografar.checked){
        for(var j = 0; j< arrTexto.length; j++){
            var dcripto = arrTexto[j].charCodeAt();
            if(dcripto >= 65 && dcripto <= 90){ 
                arrSaida.push(String.fromCharCode(((dcripto - 90 - passo) % 26) + 90));
            }else if(dcripto >= 97 && dcripto <= 122){ 
                arrSaida.push(String.fromCharCode(((dcripto - 122 - passo) % 26) + 122));
        }
        }
    
}
    console.log(arrSaida);
    saida.value=arrSaida.join("");
    arrSaida=[];

}

function base(arrTexto){
    if(criptografar.checked){
        saida.value = btoa(arrTexto);
     }else if(descriptografar.checked){
        saida.value = atob(arrTexto);
     
    }
    console.log(arrSaida);
}
