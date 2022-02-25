function _id(ident){
    return document.getElementById(ident);
}

function factorial(){
    var numero = _id("entradaFactorial").value;
    var total = 1;
    var operacion = "";

    for(var i = 1; i <= numero; i++){
        total = total * i;
        operacion += i
        if(i != numero){
            operacion += "*"
        }
    }
    
    _id("resultatFactorial").innerHTML = total;
    _id("operacionsFactorial").innerHTML = operacion;

}


function calculaIVA(){
    
}

function canviaFons(tipus){
    //Variables
    var fondo;
    var texto;
    //Cambio de color
    if (tipus == "clear"){
        fondo = "white";
        texto = "black";
    }else if (tipus == "random"){
        var gris = Math.floor(Math.random() * 255);
        fondo = "rgb(" + gris + "," + gris + "," + gris + ")";
        
        
        if (gris = gris<50){
            texto = "white";
        }else if (gris = gris<50)
        texto = "Black";
    }
    _id("cos").style.backgroundColor = fondo;
    _id("cos").style.color = texto;
}