//1)---------
//IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
//SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
//EL RESULTADO
function operacion (x,z){
    if(x<z){
        var resultado= x/z;
    }
    else{
        resultado=x*z;
    }

    return console.log(resultado);
}

operacion(4,2);

