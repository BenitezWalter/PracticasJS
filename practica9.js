// 9)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// LA SUMA DE TODOS SUS VALORES.
var objeto={nombre:21,apellido:21,edad:21}

function ejercicio9(obj) {
    var total=0;

    for (var propiedad in obj) {
        total += obj[propiedad];
    }

    return console.log(total);
}

ejercicio9(objeto)