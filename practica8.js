// 8)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// AL VALOR DEL STRING DEL ARGUMENTO
var objeto = {
    nombre:"Walter",
    apellido:"Benitez", 
}
function ejercicio8(obj, str){
    if(str==="nombre"){
        return console.log(obj.nombre);
    }
    if(str==="apellido"){
        return console.log(obj.apellido);
    }
    else{
        return console.log("La propiedad no existe en el objeto")
    }
}

ejercicio8(objeto,"apellido")