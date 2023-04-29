function elementos() {
    document.getElementById("dibujo").style.display = "none";
    document.getElementById("primerMensaje").style.display = "none";
    document.getElementById("segundoMensaje").style.display = "none";
    document.getElementById("btn-copiar").style.display = "block";
    document.getElementById("salida-texto").style.display = "block";
    document.getElementById("entrada-texto").placeholder = "";
}

function validacionLetras(cadena) {
    var requisitos=true;
    for (i in cadena) {
        var letra = (cadena[i]);
        if (letra === letra.toUpperCase()) {
            return false;
        }else{
            return true;
        }
        
    }
}

function encriptar(){
    var texto = document.getElementById("entrada-texto").value;
    validacionLetras(texto);


    var mapObj = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };
    textoencriptado = texto.replace(/a|e|i|o|u/g, function (matched) {
        return mapObj[matched];
    });

    if (validacionLetras(texto)===false){
        alert("Solo se permiten letras minusculas");
    }

    if(texto.length!=0 & validacionLetras(texto)===true){
        document.getElementById("salida-texto").value = (textoencriptado);
        document.getElementById("entrada-texto").value = "";
        }
    if(texto.length===0)  {
        alert("No has ingresado texto");

    }

}



function desencriptar() {

    
    var textoADesencriptar = document.getElementById("entrada-texto").value;


    validacionLetras(textoADesencriptar);
   

    var mapObj = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    };

    textoADesencriptar = textoADesencriptar.replace(/ai|enter|imes|ober|ufat/g, function (matched) {
        return mapObj[matched];
    });

    if (validacionLetras(textoADesencriptar)===false){
        alert("Solo se permiten letras minusculas");
    }

    if(textoADesencriptar.length!=0 & validacionLetras(textoADesencriptar)===true){
        document.getElementById("salida-texto").value = (textoADesencriptar);
        document.getElementById("entrada-texto").value = "";
        }
    if(textoADesencriptar.length===0)  {
        alert("No has ingresado texto");

    }

}

var textocopiado;
function copiar() {
    textocopiado = document.getElementById("salida-texto").value;
    navigator.clipboard.writeText(textocopiado);
    document.getElementById("salida-texto").value = "";
    document.getElementById("entrada-texto").focus();
}