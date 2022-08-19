var objeto = {
    nombre:"Walter",
    apellido:"Benitez", 
}

var KEY01="nombre"
function KEY(obj,KEY01){
    let key00=KEY01
    for(KEY01 in objeto){
        if(KEY01==key00){
            console.log("El nombre es "+objeto.nombre)
        }
    }
}

KEY(objeto,KEY01)