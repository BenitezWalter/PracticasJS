// 6)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// RETORNAR EL ARRAY FILTRADO
var array=[1,2,3,4,5,6,7]

function eliminar(array, b) {
    var resultado = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== b) {
        resultado.push(array[i]);
      }
    }
    return console.log(resultado);
  }

eliminar(array,5)